import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useEffect } from 'react';
import { PAYPAL_CLIENT_ID } from './../../constants/EnvContant';

export type PaypalButtonProps = {
  amount: string;
  currency?: 'USD';
};

type ButtonWrapperProps = {
  currency: 'USD';
  showSpinner: boolean;
  amount: string;
  style: any;
};

const ButtonWrapper = ({ currency, showSpinner, amount, style }: ButtonWrapperProps) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
              application_context: {
                shipping_preference: 'NO_SHIPPING',
              },
            })
            .then((orderId) => {
              // Your code here after create the order
              console.log('orderId', orderId);
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            // TODO: 결제 완료 후 리다이렉션
          });
        }}
      />
    </>
  );
};

const PaypalButton = (props: PaypalButtonProps) => {
  const { amount, currency = 'USD' } = props;
  const style = { layout: 'vertical', width: '100%' } as const;

  const initialOptions = {
    'client-id': PAYPAL_CLIENT_ID,
    components: 'buttons',
    currency,
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <ButtonWrapper currency={currency} showSpinner={false} amount={amount} style={style} />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
