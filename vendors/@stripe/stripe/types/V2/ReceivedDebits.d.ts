// File generated from our OpenAPI spec

declare module '@stripe/stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * ReceivedDebit resource
       */
      interface ReceivedDebit {
        /**
         * Unique identifier for the ReceivedDebit.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'received_debit';

        /**
         * Amount and currency of the ReceivedDebit.
         */
        amount: Amount;

        /**
         * The time at which the ReceivedDebit was created.
         * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
         */
        created: string;

        /**
         * Freeform string sent by the originator of the ReceivedDebit.
         */
        description: string | null;

        /**
         * This object stores details about the originating banking transaction that resulted in the ReceivedDebit. Present if `type` field value is `external_debit`.
         * Hash containing information about the origin of the ReceivedDebit.
         */
        external_debit: ReceivedDebit.ExternalDebit;

        /**
         * Financial Account on which funds for ReceivedDebit were debited.
         */
        financial_account: string;

        /**
         * A link to the Stripe-hosted receipt for this ReceivedDebit.
         */
        receipt_url: string | null;

        /**
         * Open Enum. The status of the ReceivedDebit.
         */
        status: ReceivedDebit.Status;

        /**
         * Detailed information about the status of the ReceivedDebit.
         */
        status_details: ReceivedDebit.StatusDetails | null;

        /**
         * The time at which the ReceivedDebit transitioned to a particular status.
         */
        status_transitions: ReceivedDebit.StatusTransitions;

        /**
         * Open Enum. The type of the ReceivedDebit.
         */
        type: 'external_debit';
      }

      namespace ReceivedDebit {
        interface ExternalDebit {
          /**
           * The Financial Address that was debited.
           */
          financial_address: string;

          /**
           * Open Enum. The type of the payment method used to originate the debit.
           */
          payment_method_type: 'us_bank_account';

          /**
           * The statement descriptor set by the originator of the debit.
           */
          statement_descriptor: string | null;

          /**
           * The payment method used to originate the debit.
           */
          us_bank_account: ExternalDebit.UsBankAccount;
        }

        namespace ExternalDebit {
          interface UsBankAccount {
            /**
             * The name of the bank the debit originated from.
             */
            bank_name: string | null;

            /**
             * Open Enum. The bank network the debit was originated on.
             */
            network: 'ach';

            /**
             * The routing number of the bank that originated the debit.
             */
            routing_number: string | null;
          }
        }

        type Status =
          | 'canceled'
          | 'failed'
          | 'pending'
          | 'returned'
          | 'succeeded';

        interface StatusDetails {
          /**
           * Information that elaborates on the `failed` status of a ReceivedDebit.
           * It is only present when the ReceivedDebit status is `failed`.
           */
          failed: StatusDetails.Failed;
        }

        namespace StatusDetails {
          interface Failed {
            /**
             * Open Enum. The reason for the failure of the ReceivedDebit.
             */
            reason: Failed.Reason;
          }

          namespace Failed {
            type Reason =
              | 'financial_address_inactive'
              | 'insufficient_funds'
              | 'stripe_rejected';
          }
        }

        interface StatusTransitions {
          /**
           * The time when the ReceivedDebit was marked as `failed`.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
           */
          failed_at: string | null;

          /**
           * The time when the ReceivedDebit was marked as `succeeded`.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
           */
          succeeded_at: string | null;
        }
      }
    }
  }
}
