import React from 'react';
import { GoogleLogin as GLogin } from 'react-google-login';
import { GOOGLE_API_KEY } from '../../constants/EnvContant';

const GoogleLogin = () => {
  const onLoginSuccess = (res: unknown) => {
    console.log(res);
  };

  const onLoginFailure = (res: unknown) => {
    console.log(res);
  };

  return (
    <GLogin
      className="google-login-button"
      clientId={GOOGLE_API_KEY}
      buttonText="Google Login"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn
    />
  );
};

export default GoogleLogin;
