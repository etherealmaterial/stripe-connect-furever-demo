"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Transactions = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v2/transactions/{id}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v2/transactions',
        methodType: 'list',
    }),
});
