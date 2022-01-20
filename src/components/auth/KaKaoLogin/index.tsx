import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/features/userSlice';
import { Box } from '@mui/system';

export default function KaKaoLogin() {
  const { Kakao } = window as any;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    Kakao.Auth.createLoginButton({
      container: '#kakao-login',
      success: function (response: string) {
        console.log(response);
        setIsLogin(true);
        // 리다이렉션 처리 논의 필요
        navigate(-1);
      },
      fail: function (error: string) {
        console.log(error);
      },
    });
  }, []);

  useEffect(() => {
    if (isLogin) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function (response: string) {
          // 데이터 어떻게 저장할지 논의 필요

          console.log(response);
          dispatch(setUser(response));
        },
        fail: function (error: string) {
          console.log(error);
        },
      });
    }
  }, [isLogin]);

  if (!Kakao) return null;

  return <Box id="kakao-login" sx={{ width: '80%%', height: '80%', p: 1, mt: '0.5px' }} />;
}
