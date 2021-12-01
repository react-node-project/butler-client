import React, { useEffect } from 'react';

export default function KaKaoLogin() {
  const { Kakao } = window;

  useEffect(() => {
    Kakao.Auth.createLoginButton({
      container: '#kakao-login',
      success: function (response) {
        console.log(response);
        // 리다이렉션 및 토큰 저장 필요
        window.location.href = '/';
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }, []);

  return <div id="kakao-login" />;
}
