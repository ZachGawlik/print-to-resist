export const STATUS = {
  UNINITIALIZED: 'UNINITIALIZED',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

export const API_ROOT = process.env.NODE_ENV === 'production' ?
  'http://printtoresist.org/api' :
  'http://localhost:3000/api';
