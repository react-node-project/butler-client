import { Country, Language } from '@store/features/configSlice';

const COUNTRY_INFO: Record<
  Country,
  { key: Country; name: string; language: { value: Language; name: string }; callingCode: string }
> = {
  GBR: { key: 'GBR', name: 'United Kingdom', language: { value: 'EN', name: 'English' }, callingCode: '+44' },
  AUS: { key: 'AUS', name: 'Australia', language: { value: 'EN', name: 'English' }, callingCode: '+61' },
  KOR: { key: 'KOR', name: '대한 민국', language: { value: 'KO', name: '한국어' }, callingCode: '+81' },
};

const CALLING_CODES = Object.values(COUNTRY_INFO).map(({ callingCode, key }) => ({
  key,
  value: callingCode,
}));

export { COUNTRY_INFO, CALLING_CODES };
