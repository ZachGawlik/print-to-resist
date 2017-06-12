export const STATUS = {
  UNINITIALIZED: 'UNINITIALIZED',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

export const BASE_URL = process.env.NODE_ENV === 'production' ?
  'http://printtoresist.org' :
  'http://localhost:3000';

export const API_ROOT = `${BASE_URL}/api`

export const PAPER_SIZES = {
  letter: 'Letter',
  tabloid: 'Tabloid'
};

export const COLOR_OPTIONS = {
  bw: 'Black and White',
  color: 'Color'
};
