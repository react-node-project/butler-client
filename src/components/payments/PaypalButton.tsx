import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_ROOT } from './../../constants/PathConstants';
import { PAYPAL_CLIENT_ID } from './../../constants/EnvContant';

export type PaypalButtonProps = {
  amount: string;
  currency?: 'USD' | 'GBP';
  onClick: () => void;
};

type ButtonWrapperProps = PaypalButtonProps & {
  showSpinner: boolean;
  style: any;
};

const ButtonWrapper = ({ currency, showSpinner, amount, style, onClick }: ButtonWrapperProps) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate();

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
        onClick={onClick}
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
              return orderId;
            });
        }}
        onApprove={(data, actions) => {
          return (actions.order as { capture: () => Promise<unknown> }).capture().then(function () {
            // TODO: 결제 완료 후 리다이렉션
            navigate(PATH_ROOT);
          });
        }}
        onError={(err: Record<string, unknown>) => {
          console.log('paypal err', err);
          // eslint-disable-next-line no-alert
          alert('결제 오류');
        }}
      />
    </>
  );
};

const PaypalButton = (props: PaypalButtonProps) => {
  const { amount, currency = 'USD', onClick } = props;
  const style = {
    layout: 'horizontal',
    color: 'blue',
    label: 'paypal',
    tagline: 'false',
  } as const;

  const initialOptions = {
    'client-id': PAYPAL_CLIENT_ID,
    components: 'buttons',
    currency,
  };

  return (
    <div style={{ maxWidth: '100%' }}>
      <PayPalScriptProvider options={initialOptions}>
        <ButtonWrapper currency={currency} showSpinner={false} amount={amount} style={style} onClick={onClick} />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalButton;
