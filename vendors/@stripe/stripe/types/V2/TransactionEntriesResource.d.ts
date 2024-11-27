// File generated from our OpenAPI spec

declare module '@stripe/stripe' {
  namespace Stripe {
    namespace V2 {
      interface TransactionEntryRetrieveParams {}

      interface TransactionEntryListParams {
        /**
         * Filter for Transactions created at an exact time.
         */
        created?: string;

        /**
         * Filter for Transactions created after the specified timestamp.
         */
        created_gt?: string;

        /**
         * Filter for Transactions created at or after the specified timestamp.
         */
        created_gte?: string;

        /**
         * Filter for Transactions created before the specified timestamp.
         */
        created_lt?: string;

        /**
         * Filter for Transactions created at or before the specified timestamp.
         */
        created_lte?: string;

        /**
         * The page limit.
         */
        limit?: number;

        /**
         * The page token.
         */
        page?: string;

        /**
         * Filter for TransactionEntries belonging to a Transaction.
         */
        transaction?: string;
      }

      class TransactionEntriesResource {
        /**
         * Retrieves the details of a TransactionEntry by ID.
         */
        retrieve(
          id: string,
          params?: TransactionEntryRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.TransactionEntry>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.TransactionEntry>>;

        /**
         * Returns a list of TransactionEntries that match the provided filters.
         */
        list(
          params?: TransactionEntryListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.V2.TransactionEntry>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.V2.TransactionEntry>;
      }
    }
  }
}
