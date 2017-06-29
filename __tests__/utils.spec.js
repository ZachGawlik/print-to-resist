import { checkStatus, getShortDate } from '../src/utils';

describe('checkStatus', () => {
  it('throws error for non-200 response codes', () => {
    expect(() => checkStatus({ status: 500 })).toThrow();
  });

  it('parses json for successful API response', () => {
    const successResponse = {
      status: 200,
      json: jest.fn()
    };
    checkStatus(successResponse);
    expect(successResponse.json).toBeCalled();
  });
});

describe('getShortDate', () => {
  it('returns date in MM/DD/YY format', () => {
    expect(getShortDate('2017-06-03T13:49:47.000Z')).toEqual('06/03/17');
  });
});
