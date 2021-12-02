import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/features/userSlice';
import { Box } from '@mui/system';

export default function KaKaoLogin() {
  const { Kakao } = window;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    Kakao.Auth.createLoginButton({
      container: '#kakao-login',
      success: function (response) {
        setIsLogin(true);
        // 리다이렉션 처리 논의 필요
        navigate(-1);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }, []);

  useEffect(() => {
    if (isLogin) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function (response) {
          // 데이터 어떻게 저장할지 논의 필요
          dispatch(setUser(response));
        },
        fail: function (error) {
          console.log(error);
        },
      });
    }
  }, [isLogin]);

  return <Box id="kakao-login" sx={{ m: 2, px: 6 }} />;
}
