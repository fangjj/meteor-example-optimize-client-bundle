import SimpleSchema from 'simpl-schema';
import Documents from './documents';
import rateLimit from '../../modules/rate-limit.js';

export const upsertDocument = () => new Error('not built');

export const removeDocument = () => new Error('not built');

rateLimit({
  methods: [
    upsertDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
