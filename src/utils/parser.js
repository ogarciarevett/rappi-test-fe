import queryString from 'query-string';

export const convertQueryToString = query => {
  const { search } = queryString.parse(query);
  return search;
};
