import listingsReducer from '../../src/reducers/listings';
import { STATUS } from '../../src/constants';
import { GET_LISTING_SUCCESS } from '../../src/actions/listingDetailActions';
import {
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE
} from '../../src/actions/galleryActions';

const listing97 = {
  listingId: 97,
  deadline: '2017-06-01T04:00:00.000Z',
  description: 'Upcoming dates for NYC congress town halls',
  instruction: '',
  isColor: false,
  paperSize: 'Letter',
  dateSubmitted: '2017-04-13T13:49:47.000Z',
  isApproved: 1,
  title: 'NYC Congress Town Halls',
  thumbnailId: 'c0c51fba8b26122d2c368abbfd5da8b6.png',
  imageIds: ['c0753ac7045056c7f73779a80db8ae55.png'],
  tags: ['nyc', 'town hall'],
  links: []
};

const listing124 = {
  listingId: 124,
  deadline: null,
  description:
    'Boston know your rights when stopped by Police, Immigration Agents, or FBI',
  instruction: 'No restrictions. Post freely around town.',
  isColor: false,
  paperSize: 'Letter',
  dateSubmitted: '2017-04-20T01:01:58.000Z',
  isApproved: 1,
  title: 'Know your Rights with Police',
  thumbnailId: '36098bf5ebde67779b998686e10883b0.png',
  imageIds: ['5f0f47b047903bcb7bd909cde0c0b163.pdf'],
  tags: ['aclu', 'know your rights', 'police'],
  links: [
    'https://www.aclu.org/know-your-rights',
    'https://www.aclu.org/about/affiliates'
  ]
};
describe('Listings Reducer', () => {
  it('should return the initial state', () => {
    expect(listingsReducer(undefined, {})).toEqual({
      status: STATUS.UNINITIALIZED,
      entities: {},
      allIds: []
    });
  });

  it('should update status on pending', () => {
    expect(
      listingsReducer(undefined, {
        type: GET_LISTINGS_REQUEST
      })
    ).toEqual({
      status: STATUS.PENDING,
      entities: {},
      allIds: []
    });
  });

  it('should update status on failure', () => {
    expect(
      listingsReducer(undefined, {
        type: GET_LISTINGS_FAILURE
      })
    ).toEqual({
      status: STATUS.FAILURE,
      entities: {},
      allIds: []
    });
  });

  it('GET_LISTING_SUCCESS should normalize new listing', () => {
    expect(
      listingsReducer(
        {
          status: STATUS.UNINITIALIZED,
          entities: { 97: listing97 },
          allIds: [97]
        },
        {
          type: GET_LISTING_SUCCESS,
          payload: listing124
        }
      )
    ).toEqual({
      status: STATUS.UNINITIALIZED,
      entities: {
        97: listing97,
        124: listing124
      },
      allIds: [97]
    });
  });

  it('GET_LISTINGS_SUCCESS normalizes new listings and adds to allIds', () => {
    expect(
      listingsReducer(
        {
          status: STATUS.PENDING,
          entities: { 97: listing97 },
          allIds: [97]
        },
        {
          type: GET_LISTINGS_SUCCESS,
          payload: [listing97, listing124]
        }
      )
    ).toEqual({
      status: STATUS.SUCCESS,
      entities: {
        97: listing97,
        124: listing124
      },
      allIds: [97, 124]
    });
  });
});
