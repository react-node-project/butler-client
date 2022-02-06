export const getQueryParams = (url: string, key: string) => {
  if (!url) return;

  const query = url.toString().split('?');
  const split = query[1].replace('?', '').split(/[=?&]/);
  const param: any = {};
  for (let i = 0; i < split.length; i++) {
    param[split[i]] = split[++i];
  }

  return param[key];
};
