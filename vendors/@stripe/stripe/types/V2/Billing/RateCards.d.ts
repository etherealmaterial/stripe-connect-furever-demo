// File generated from our OpenAPI spec

declare module '@stripe/stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The RateCard object.
         */
        interface RateCard {
          /**
           * The ID of the RateCard.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.rate_card';

          /**
           * Whether this RateCard is active. Inactive RateCards cannot be used in new activations or have new rates added.
           */
          active: boolean;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * The currency of this RateCard.
           */
          currency: string;

          /**
           * A free-text field used as a human-readable rate card name. Not visible to customers.
           */
          internal_name: string;

          /**
           * The ID of this RateCard's most recently created version.
           */
          latest_version: string;

          /**
           * The ID of the version that will be used by all Subscriptions when no specific version is specified.
           */
          live_version: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The interval for assessing service. For example, a monthly RateCard with a rate of $1 for the first 10 "workloads"
           * and $2 thereafter means "$1 per workload up to 10 workloads during a month of service." This is similar to but
           * distinct from billing interval; the service interval deals with the rate at which the customer accumulates fees,
           * while the billing interval in Cadence deals with the rate the customer is billed.
           */
          service_interval: RateCard.ServiceInterval;

          /**
           * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"` in
           * order to specify quarterly service.
           */
          service_interval_count: number;

          /**
           * The Stripe Tax tax behavior - whether the rates are inclusive or exclusive of tax.
           */
          tax_behavior: RateCard.TaxBehavior;
        }

        namespace RateCard {
          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type TaxBehavior = 'exclusive' | 'inclusive';
        }
      }
    }
  }
}
