// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FinancialAddresses = StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v2/financial_addresses' }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v2/financial_addresses/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v2/financial_addresses',
        methodType: 'list',
    }),
});
