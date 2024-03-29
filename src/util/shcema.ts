import { object, SchemaOf, string } from 'yup';
import { SignUpRequest, UserInfo } from '../type/user.type';

export const phoneNumberRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);
const passwordRegx = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/);

const signUpRequestSchema: SchemaOf<SignUpRequest> = object().shape({
  email: string().email('올바른 이메일 형식이 아닙니다').required('이메일은 필수 입력사항입니다'),
  password: string()
    .min(5, '비밀번호는 5자리 이상이어야 합니다')
    .max(20, '비밀번호는 20자리 이하이어야합니다')
    .matches(passwordRegx, {
      message: '비밀번호는 최소한 대문자 한개 (A-Z), 소문자 한개 (a-z), 숫자 (0-9) 그리고 특수문자를 포함하여야 합니다',
    })
    .required('비밀번호는 필수 입력사항입니다'),
  name: string().required('이름은 필수 입력사항입니다'),
  callingCode: string().required('나라 코드 번호는 필수 입력사항입니다'),
  mobile: string().required('핸드폰 번호는 필수 입력사항입니다').matches(phoneNumberRegex, {
    message: '핸드폰 번호 양식으로 입력해주세요',
  }),
});

const updateUserSchema: SchemaOf<UserInfo> = object().shape({
  email: string().email('올바른 이메일 형식이 아닙니다').required('이메일은 필수 입력사항입니다'),
  name: string().required('이름은 필수 입력사항입니다'),
  callingCode: string().required('나라 코드 번호는 필수 입력사항입니다'),
  mobile: string().required('핸드폰 번호는 필수 입력사항입니다').matches(phoneNumberRegex, {
    message: '핸드폰 번호 양식으로 입력해주세요',
  }),
});

export { signUpRequestSchema, updateUserSchema };
