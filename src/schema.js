import { schema } from 'normalizr';

export const listingSchema = new schema.Entity(
  'listings',
  {},
  { idAttribute: 'listingId' }
);

export const listingsSchema = [ listingSchema ];
