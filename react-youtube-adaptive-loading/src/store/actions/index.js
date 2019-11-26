
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const createRequestTypes = base => {
  if (!base) {
    throw new Error('cannot create request type with base = \'\' or base = null');
  }
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const createAction = (type, payload = {}) => {
  return {
    type,
    ...payload
  };
};
