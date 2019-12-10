
const serializeToQueryParam = (queryObject, prefix) => {
  const queryString = [];
  for (const key in queryObject)
    if (queryObject.hasOwnProperty(key)) {
      queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryObject[key]));
    }
  return prefix ? `${prefix}?${queryString.join('&')}` : queryString.join('&');
};

export {
  serializeToQueryParam
};
