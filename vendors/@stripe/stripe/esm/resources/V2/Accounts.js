// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Accounts = StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v2/accounts' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v2/accounts/{id}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v2/accounts/{id}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v2/accounts',
        methodType: 'list',
    }),
    close: stripeMethod({ method: 'POST', fullPath: '/v2/accounts/{id}/close' }),
});
