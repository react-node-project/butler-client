import { object, SchemaOf, string } from 'yup';
import { SignUpRequest } from '../type/user.type';

const signUpRequestSchema: SchemaOf<SignUpRequest> = object({
  email: string().email('올바른 이메일 형식이 아닙니다').required('필수 입력사항입니다'),
  password: string()
    .required('필수입력사항입니다')
    .min(5, '비밀번호는 5자리 이상이어야 합니다')
    .max(20, '비밀번호는 20자리 이하이어야합니다')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/, {
      message: '비밀번호는 최소한 대문자 한개 (A-Z), 소문자 한개 (a-z), 숫자 (0-9) 그리고 특수문자를 포함하여야 합니다',
    })
    .required('필수 입력사항입니다'),
  firstName: string().required('필수 입력사항입니다'),
  lastName: string().required('필수 입력사항입니다'),
  callingCode: string().required('필수 입력사항입니다'),
  mobile: string().required('필수 입력사항입니다'),
});

export { signUpRequestSchema };
