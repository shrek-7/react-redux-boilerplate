
import GET_AUTH_TOKEN from './types';

const getAuthToken = () => {
  let authPayload = 'dummy token!';

  return { type: GET_AUTH_TOKEN, payload: authPayload };
};

export default getAuthToken;
