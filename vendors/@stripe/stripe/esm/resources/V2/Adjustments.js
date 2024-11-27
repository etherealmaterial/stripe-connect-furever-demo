// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Adjustments = StripeResource.extend({
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v2/adjustments/{id}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v2/adjustments',
        methodType: 'list',
    }),
});
