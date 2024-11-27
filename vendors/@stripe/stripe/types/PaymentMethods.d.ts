// File generated from our OpenAPI spec

declare module '@stripe/stripe' {
  namespace Stripe {
    /**
     * PaymentMethod objects represent your customer's payment instruments.
     * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
     * Customer objects to store instrument details for future payments.
     *
     * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
     */
    interface PaymentMethod {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_method';

      acss_debit?: PaymentMethod.AcssDebit;

      affirm?: PaymentMethod.Affirm;

      afterpay_clearpay?: PaymentMethod.AfterpayClearpay;

      alipay?: PaymentMethod.Alipay;

      /**
       * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
       */
      allow_redisplay?: PaymentMethod.AllowRedisplay;

      alma?: PaymentMethod.Alma;

      amazon_pay?: PaymentMethod.AmazonPay;

      au_becs_debit?: PaymentMethod.AuBecsDebit;

      bacs_debit?: PaymentMethod.BacsDebit;

      bancontact?: PaymentMethod.Bancontact;

      billing_details: PaymentMethod.BillingDetails;

      blik?: PaymentMethod.Blik;

      boleto?: PaymentMethod.Boleto;

      card?: PaymentMethod.Card;

      card_present?: PaymentMethod.CardPresent;

      cashapp?: PaymentMethod.Cashapp;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
       */
      customer: string | Stripe.Customer | null;

      customer_balance?: PaymentMethod.CustomerBalance;

      eps?: PaymentMethod.Eps;

      fpx?: PaymentMethod.Fpx;

      giropay?: PaymentMethod.Giropay;

      grabpay?: PaymentMethod.Grabpay;

      ideal?: PaymentMethod.Ideal;

      interac_present?: PaymentMethod.InteracPresent;

      kakao_pay?: PaymentMethod.KakaoPay;

      klarna?: PaymentMethod.Klarna;

      konbini?: PaymentMethod.Konbini;

      kr_card?: PaymentMethod.KrCard;

      link?: PaymentMethod.Link;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      mobilepay?: PaymentMethod.Mobilepay;

      multibanco?: PaymentMethod.Multibanco;

      naver_pay?: PaymentMethod.NaverPay;

      oxxo?: PaymentMethod.Oxxo;

      p24?: PaymentMethod.P24;

      payco?: PaymentMethod.Payco;

      paynow?: PaymentMethod.Paynow;

      paypal?: PaymentMethod.Paypal;

      pix?: PaymentMethod.Pix;

      promptpay?: PaymentMethod.Promptpay;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: PaymentMethod.RadarOptions;

      revolut_pay?: PaymentMethod.RevolutPay;

      samsung_pay?: PaymentMethod.SamsungPay;

      sepa_debit?: PaymentMethod.SepaDebit;

      sofort?: PaymentMethod.Sofort;

      swish?: PaymentMethod.Swish;

      twint?: PaymentMethod.Twint;

      /**
       * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
       */
      type: PaymentMethod.Type;

      us_bank_account?: PaymentMethod.UsBankAccount;

      wechat_pay?: PaymentMethod.WechatPay;

      zip?: PaymentMethod.Zip;
    }

    namespace PaymentMethod {
      interface AcssDebit {
        /**
         * Name of the bank associated with the bank account.
         */
        bank_name: string | null;

        /**
         * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
         */
        fingerprint: string | null;

        /**
         * Institution number of the bank account.
         */
        institution_number: string | null;

        /**
         * Last four digits of the bank account number.
         */
        last4: string | null;

        /**
         * Transit number of the bank account.
         */
        transit_number: string | null;
      }

      interface Affirm {}

      interface AfterpayClearpay {}

      interface Alipay {}

      type AllowRedisplay = 'always' | 'limited' | 'unspecified';

      interface Alma {}

      interface AmazonPay {}

      interface AuBecsDebit {
        /**
         * Six-digit number identifying bank and branch associated with this bank account.
         */
        bsb_number: string | null;

        /**
         * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
         */
        fingerprint: string | null;

        /**
         * Last four digits of the bank account number.
         */
        last4: string | null;
      }

      interface BacsDebit {
        /**
         * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
         */
        fingerprint: string | null;

        /**
         * Last four digits of the bank account number.
         */
        last4: string | null;

        /**
         * Sort code of the bank account. (e.g., `10-20-30`)
         */
        sort_code: string | null;
      }

      interface Bancontact {}

      interface BillingDetails {
        /**
         * Billing address.
         */
        address: Stripe.Address | null;

        /**
         * Email address.
         */
        email: string | null;

        /**
         * Full name.
         */
        name: string | null;

        /**
         * Billing phone number (including extension).
         */
        phone: string | null;
      }

      interface Blik {}

      interface Boleto {
        /**
         * Uniquely identifies the customer tax id (CNPJ or CPF)
         */
        tax_id: string;
      }

      interface Card {
        /**
         * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
         */
        brand: string;

        /**
         * Checks on Card address and CVC if provided.
         */
        checks: Card.Checks | null;

        /**
         * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
         */
        country: string | null;

        /**
         * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
         */
        description?: string | null;

        /**
         * The brand to use when displaying the card, this accounts for customer's brand choice on dual-branded cards. Can be `american_express`, `cartes_bancaires`, `diners_club`, `discover`, `eftpos_australia`, `interac`, `jcb`, `mastercard`, `union_pay`, `visa`, or `other` and may contain more values in the future.
         */
        display_brand: string | null;

        /**
         * Two-digit number representing the card's expiration month.
         */
        exp_month: number;

        /**
         * Four-digit number representing the card's expiration year.
         */
        exp_year: number;

        /**
         * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
         *
         * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
         */
        fingerprint?: string | null;

        /**
         * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
         */
        funding: string;

        /**
         * Details of the original PaymentMethod that created this object.
         */
        generated_from: Card.GeneratedFrom | null;

        /**
         * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
         */
        iin?: string | null;

        /**
         * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
         */
        issuer?: string | null;

        /**
         * The last four digits of the card.
         */
        last4: string;

        /**
         * Contains information about card networks that can be used to process the payment.
         */
        networks: Card.Networks | null;

        /**
         * Contains details on how this Card may be used for 3D Secure authentication.
         */
        three_d_secure_usage: Card.ThreeDSecureUsage | null;

        /**
         * If this Card is part of a card wallet, this contains the details of the card wallet.
         */
        wallet: Card.Wallet | null;
      }

      namespace Card {
        interface Checks {
          /**
           * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
           */
          address_line1_check: string | null;

          /**
           * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
           */
          address_postal_code_check: string | null;

          /**
           * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
           */
          cvc_check: string | null;
        }

        interface GeneratedFrom {
          /**
           * The charge that created this object.
           */
          charge: string | null;

          /**
           * Transaction-specific details of the payment method used in the payment.
           */
          payment_method_details: GeneratedFrom.PaymentMethodDetails | null;

          /**
           * The ID of the SetupAttempt that generated this PaymentMethod, if any.
           */
          setup_attempt: string | Stripe.SetupAttempt | null;
        }

        namespace GeneratedFrom {
          interface PaymentMethodDetails {
            card_present?: PaymentMethodDetails.CardPresent;

            /**
             * The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`.
             */
            type: string;
          }

          namespace PaymentMethodDetails {
            interface CardPresent {
              /**
               * The authorized amount
               */
              amount_authorized: number | null;

              /**
               * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
               */
              brand: string | null;

              /**
               * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
               */
              brand_product: string | null;

              /**
               * When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured.
               */
              capture_before?: number;

              /**
               * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
               */
              cardholder_name: string | null;

              /**
               * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
               */
              country: string | null;

              /**
               * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
               */
              description?: string | null;

              /**
               * Authorization response cryptogram.
               */
              emv_auth_data: string | null;

              /**
               * Two-digit number representing the card's expiration month.
               */
              exp_month: number;

              /**
               * Four-digit number representing the card's expiration year.
               */
              exp_year: number;

              /**
               * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
               *
               * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
               */
              fingerprint: string | null;

              /**
               * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
               */
              funding: string | null;

              /**
               * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
               */
              generated_card: string | null;

              /**
               * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
               */
              iin?: string | null;

              /**
               * Whether this [PaymentIntent](https://stripe.com/docs/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support).
               */
              incremental_authorization_supported: boolean;

              /**
               * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
               */
              issuer?: string | null;

              /**
               * The last four digits of the card.
               */
              last4: string | null;

              /**
               * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
               */
              network: string | null;

              /**
               * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. The first three digits of the Trace ID is the Financial Network Code, the next 6 digits is the Banknet Reference Number, and the last 4 digits represent the date (MM/DD). This field will be available for successful Visa, Mastercard, or American Express transactions and always null for other card brands.
               */
              network_transaction_id: string | null;

              /**
               * Details about payments collected offline.
               */
              offline: CardPresent.Offline | null;

              /**
               * Defines whether the authorized amount can be over-captured or not
               */
              overcapture_supported: boolean;

              /**
               * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
               */
              preferred_locales: Array<string> | null;

              /**
               * How card details were read in this transaction.
               */
              read_method: CardPresent.ReadMethod | null;

              /**
               * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
               */
              receipt: CardPresent.Receipt | null;

              wallet?: CardPresent.Wallet;
            }

            namespace CardPresent {
              interface Offline {
                /**
                 * Time at which the payment was collected while offline
                 */
                stored_at: number | null;

                /**
                 * The method used to process this payment method offline. Only deferred is allowed.
                 */
                type: 'deferred' | null;
              }

              type ReadMethod =
                | 'contact_emv'
                | 'contactless_emv'
                | 'contactless_magstripe_mode'
                | 'magnetic_stripe_fallback'
                | 'magnetic_stripe_track2';

              interface Receipt {
                /**
                 * The type of account being debited or credited
                 */
                account_type?: Receipt.AccountType;

                /**
                 * EMV tag 9F26, cryptogram generated by the integrated circuit chip.
                 */
                application_cryptogram: string | null;

                /**
                 * Mnenomic of the Application Identifier.
                 */
                application_preferred_name: string | null;

                /**
                 * Identifier for this transaction.
                 */
                authorization_code: string | null;

                /**
                 * EMV tag 8A. A code returned by the card issuer.
                 */
                authorization_response_code: string | null;

                /**
                 * Describes the method used by the cardholder to verify ownership of the card. One of the following: `approval`, `failure`, `none`, `offline_pin`, `offline_pin_and_signature`, `online_pin`, or `signature`.
                 */
                cardholder_verification_method: string | null;

                /**
                 * EMV tag 84. Similar to the application identifier stored on the integrated circuit chip.
                 */
                dedicated_file_name: string | null;

                /**
                 * The outcome of a series of EMV functions performed by the card reader.
                 */
                terminal_verification_results: string | null;

                /**
                 * An indication of various EMV functions performed during the transaction.
                 */
                transaction_status_information: string | null;
              }

              namespace Receipt {
                type AccountType =
                  | 'checking'
                  | 'credit'
                  | 'prepaid'
                  | 'unknown';
              }

              interface Wallet {
                /**
                 * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
                 */
                type: Wallet.Type;
              }

              namespace Wallet {
                type Type =
                  | 'apple_pay'
                  | 'google_pay'
                  | 'samsung_pay'
                  | 'unknown';
              }
            }
          }
        }

        interface Networks {
          /**
           * All available networks for the card.
           */
          available: Array<string>;

          /**
           * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
           */
          preferred: string | null;
        }

        interface ThreeDSecureUsage {
          /**
           * Whether 3D Secure is supported on this card.
           */
          supported: boolean;
        }

        interface Wallet {
          amex_express_checkout?: Wallet.AmexExpressCheckout;

          apple_pay?: Wallet.ApplePay;

          /**
           * (For tokenized numbers only.) The last four digits of the device account number.
           */
          dynamic_last4: string | null;

          google_pay?: Wallet.GooglePay;

          link?: Wallet.Link;

          masterpass?: Wallet.Masterpass;

          samsung_pay?: Wallet.SamsungPay;

          /**
           * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
           */
          type: Wallet.Type;

          visa_checkout?: Wallet.VisaCheckout;
        }

        namespace Wallet {
          interface AmexExpressCheckout {}

          interface ApplePay {}

          interface GooglePay {}

          interface Link {}

          interface Masterpass {
            /**
             * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            billing_address: Stripe.Address | null;

            /**
             * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            email: string | null;

            /**
             * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            name: string | null;

            /**
             * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            shipping_address: Stripe.Address | null;
          }

          interface SamsungPay {}

          type Type =
            | 'amex_express_checkout'
            | 'apple_pay'
            | 'google_pay'
            | 'link'
            | 'masterpass'
            | 'samsung_pay'
            | 'visa_checkout';

          interface VisaCheckout {
            /**
             * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            billing_address: Stripe.Address | null;

            /**
             * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            email: string | null;

            /**
             * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            name: string | null;

            /**
             * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            shipping_address: Stripe.Address | null;
          }
        }
      }

      interface CardPresent {
        /**
         * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
         */
        brand: string | null;

        /**
         * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
         */
        brand_product: string | null;

        /**
         * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
         */
        cardholder_name: string | null;

        /**
         * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
         */
        country: string | null;

        /**
         * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
         */
        description?: string | null;

        /**
         * Two-digit number representing the card's expiration month.
         */
        exp_month: number;

        /**
         * Four-digit number representing the card's expiration year.
         */
        exp_year: number;

        /**
         * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
         *
         * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
         */
        fingerprint: string | null;

        /**
         * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
         */
        funding: string | null;

        /**
         * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
         */
        iin?: string | null;

        /**
         * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
         */
        issuer?: string | null;

        /**
         * The last four digits of the card.
         */
        last4: string | null;

        /**
         * Contains information about card networks that can be used to process the payment.
         */
        networks: CardPresent.Networks | null;

        /**
         * Details about payment methods collected offline.
         */
        offline: CardPresent.Offline | null;

        /**
         * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
         */
        preferred_locales: Array<string> | null;

        /**
         * How card details were read in this transaction.
         */
        read_method: CardPresent.ReadMethod | null;

        wallet?: CardPresent.Wallet;
      }

      namespace CardPresent {
        interface Networks {
          /**
           * All available networks for the card.
           */
          available: Array<string>;

          /**
           * The preferred network for the card.
           */
          preferred: string | null;
        }

        interface Offline {
          /**
           * Time at which the payment was collected while offline
           */
          stored_at: number | null;

          /**
           * The method used to process this payment method offline. Only deferred is allowed.
           */
          type: 'deferred' | null;
        }

        type ReadMethod =
          | 'contact_emv'
          | 'contactless_emv'
          | 'contactless_magstripe_mode'
          | 'magnetic_stripe_fallback'
          | 'magnetic_stripe_track2';

        interface Wallet {
          /**
           * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
           */
          type: Wallet.Type;
        }

        namespace Wallet {
          type Type = 'apple_pay' | 'google_pay' | 'samsung_pay' | 'unknown';
        }
      }

      interface Cashapp {
        /**
         * A unique and immutable identifier assigned by Cash App to every buyer.
         */
        buyer_id: string | null;

        /**
         * A public identifier for buyers using Cash App.
         */
        cashtag: string | null;
      }

      interface CustomerBalance {}

      interface Eps {
        /**
         * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
         */
        bank: Eps.Bank | null;
      }

      namespace Eps {
        type Bank =
          | 'arzte_und_apotheker_bank'
          | 'austrian_anadi_bank_ag'
          | 'bank_austria'
          | 'bankhaus_carl_spangler'
          | 'bankhaus_schelhammer_und_schattera_ag'
          | 'bawag_psk_ag'
          | 'bks_bank_ag'
          | 'brull_kallmus_bank_ag'
          | 'btv_vier_lander_bank'
          | 'capital_bank_grawe_gruppe_ag'
          | 'deutsche_bank_ag'
          | 'dolomitenbank'
          | 'easybank_ag'
          | 'erste_bank_und_sparkassen'
          | 'hypo_alpeadriabank_international_ag'
          | 'hypo_bank_burgenland_aktiengesellschaft'
          | 'hypo_noe_lb_fur_niederosterreich_u_wien'
          | 'hypo_oberosterreich_salzburg_steiermark'
          | 'hypo_tirol_bank_ag'
          | 'hypo_vorarlberg_bank_ag'
          | 'marchfelder_bank'
          | 'oberbank_ag'
          | 'raiffeisen_bankengruppe_osterreich'
          | 'schoellerbank_ag'
          | 'sparda_bank_wien'
          | 'volksbank_gruppe'
          | 'volkskreditbank_ag'
          | 'vr_bank_braunau';
      }

      interface Fpx {
        /**
         * Account holder type, if provided. Can be one of `individual` or `company`.
         */
        account_holder_type: Fpx.AccountHolderType | null;

        /**
         * The customer's bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
         */
        bank: Fpx.Bank;
      }

      namespace Fpx {
        type AccountHolderType = 'company' | 'individual';

        type Bank =
          | 'affin_bank'
          | 'agrobank'
          | 'alliance_bank'
          | 'ambank'
          | 'bank_islam'
          | 'bank_muamalat'
          | 'bank_of_china'
          | 'bank_rakyat'
          | 'bsn'
          | 'cimb'
          | 'deutsche_bank'
          | 'hong_leong_bank'
          | 'hsbc'
          | 'kfh'
          | 'maybank2e'
          | 'maybank2u'
          | 'ocbc'
          | 'pb_enterprise'
          | 'public_bank'
          | 'rhb'
          | 'standard_chartered'
          | 'uob';
      }

      interface Giropay {}

      interface Grabpay {}

      interface Ideal {
        /**
         * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
         */
        bank: Ideal.Bank | null;

        /**
         * The Bank Identifier Code of the customer's bank, if the bank was provided.
         */
        bic: Ideal.Bic | null;
      }

      namespace Ideal {
        type Bank =
          | 'abn_amro'
          | 'asn_bank'
          | 'bunq'
          | 'handelsbanken'
          | 'ing'
          | 'knab'
          | 'moneyou'
          | 'n26'
          | 'nn'
          | 'rabobank'
          | 'regiobank'
          | 'revolut'
          | 'sns_bank'
          | 'triodos_bank'
          | 'van_lanschot'
          | 'yoursafe';

        type Bic =
          | 'ABNANL2A'
          | 'ASNBNL21'
          | 'BITSNL2A'
          | 'BUNQNL2A'
          | 'FVLBNL22'
          | 'HANDNL2A'
          | 'INGBNL2A'
          | 'KNABNL2H'
          | 'MOYONL21'
          | 'NNBANL2G'
          | 'NTSBDEB1'
          | 'RABONL2U'
          | 'RBRBNL21'
          | 'REVOIE23'
          | 'REVOLT21'
          | 'SNSBNL2A'
          | 'TRIONL2U';
      }

      interface InteracPresent {
        /**
         * Card brand. Can be `interac`, `mastercard` or `visa`.
         */
        brand: string | null;

        /**
         * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
         */
        cardholder_name: string | null;

        /**
         * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
         */
        country: string | null;

        /**
         * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
         */
        description?: string | null;

        /**
         * Two-digit number representing the card's expiration month.
         */
        exp_month: number;

        /**
         * Four-digit number representing the card's expiration year.
         */
        exp_year: number;

        /**
         * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
         *
         * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
         */
        fingerprint: string | null;

        /**
         * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
         */
        funding: string | null;

        /**
         * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
         */
        iin?: string | null;

        /**
         * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
         */
        issuer?: string | null;

        /**
         * The last four digits of the card.
         */
        last4: string | null;

        /**
         * Contains information about card networks that can be used to process the payment.
         */
        networks: InteracPresent.Networks | null;

        /**
         * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
         */
        preferred_locales: Array<string> | null;

        /**
         * How card details were read in this transaction.
         */
        read_method: InteracPresent.ReadMethod | null;
      }

      namespace InteracPresent {
        interface Networks {
          /**
           * All available networks for the card.
           */
          available: Array<string>;

          /**
           * The preferred network for the card.
           */
          preferred: string | null;
        }

        type ReadMethod =
          | 'contact_emv'
          | 'contactless_emv'
          | 'contactless_magstripe_mode'
          | 'magnetic_stripe_fallback'
          | 'magnetic_stripe_track2';
      }

      interface KakaoPay {}

      interface Klarna {
        /**
         * The customer's date of birth, if provided.
         */
        dob?: Klarna.Dob | null;
      }

      namespace Klarna {
        interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number | null;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number | null;

          /**
           * The four-digit year of birth.
           */
          year: number | null;
        }
      }

      interface Konbini {}

      interface KrCard {
        /**
         * The local credit or debit card brand.
         */
        brand: KrCard.Brand | null;

        /**
         * The last four digits of the card. This may not be present for American Express cards.
         */
        last4: string | null;
      }

      namespace KrCard {
        type Brand =
          | 'bc'
          | 'citi'
          | 'hana'
          | 'hyundai'
          | 'jeju'
          | 'jeonbuk'
          | 'kakaobank'
          | 'kbank'
          | 'kdbbank'
          | 'kookmin'
          | 'kwangju'
          | 'lotte'
          | 'mg'
          | 'nh'
          | 'post'
          | 'samsung'
          | 'savingsbank'
          | 'shinhan'
          | 'shinhyup'
          | 'suhyup'
          | 'tossbank'
          | 'woori';
      }

      interface Link {
        /**
         * Account owner's email address.
         */
        email: string | null;

        /**
         * [Deprecated] This is a legacy parameter that no longer has any function.
         * @deprecated
         */
        persistent_token?: string;
      }

      interface Mobilepay {}

      interface Multibanco {}

      interface NaverPay {
        /**
         * Whether to fund this transaction with Naver Pay points or a card.
         */
        funding: NaverPay.Funding;
      }

      namespace NaverPay {
        type Funding = 'card' | 'points';
      }

      interface Oxxo {}

      interface P24 {
        /**
         * The customer's bank, if provided.
         */
        bank: P24.Bank | null;
      }

      namespace P24 {
        type Bank =
          | 'alior_bank'
          | 'bank_millennium'
          | 'bank_nowy_bfg_sa'
          | 'bank_pekao_sa'
          | 'banki_spbdzielcze'
          | 'blik'
          | 'bnp_paribas'
          | 'boz'
          | 'citi_handlowy'
          | 'credit_agricole'
          | 'envelobank'
          | 'etransfer_pocztowy24'
          | 'getin_bank'
          | 'ideabank'
          | 'ing'
          | 'inteligo'
          | 'mbank_mtransfer'
          | 'nest_przelew'
          | 'noble_pay'
          | 'pbac_z_ipko'
          | 'plus_bank'
          | 'santander_przelew24'
          | 'tmobile_usbugi_bankowe'
          | 'toyota_bank'
          | 'velobank'
          | 'volkswagen_bank';
      }

      interface Payco {}

      interface Paynow {}

      interface Paypal {
        /**
         * Owner's email. Values are provided by PayPal directly
         * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        payer_email: string | null;

        /**
         * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
         */
        payer_id: string | null;
      }

      interface Pix {}

      interface Promptpay {}

      interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      interface RevolutPay {}

      interface SamsungPay {}

      interface SepaDebit {
        /**
         * Bank code of bank associated with the bank account.
         */
        bank_code: string | null;

        /**
         * Branch code of bank associated with the bank account.
         */
        branch_code: string | null;

        /**
         * Two-letter ISO code representing the country the bank account is located in.
         */
        country: string | null;

        /**
         * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
         */
        fingerprint: string | null;

        /**
         * Information about the object that generated this PaymentMethod.
         */
        generated_from: SepaDebit.GeneratedFrom | null;

        /**
         * Last four characters of the IBAN.
         */
        last4: string | null;
      }

      namespace SepaDebit {
        interface GeneratedFrom {
          /**
           * The ID of the Charge that generated this PaymentMethod, if any.
           */
          charge: string | Stripe.Charge | null;

          /**
           * The ID of the SetupAttempt that generated this PaymentMethod, if any.
           */
          setup_attempt: string | Stripe.SetupAttempt | null;
        }
      }

      interface Sofort {
        /**
         * Two-letter ISO code representing the country the bank account is located in.
         */
        country: string | null;
      }

      interface Swish {}

      interface Twint {}

      type Type =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'alma'
        | 'amazon_pay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'card_present'
        | 'cashapp'
        | 'customer_balance'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'interac_present'
        | 'kakao_pay'
        | 'klarna'
        | 'konbini'
        | 'kr_card'
        | 'link'
        | 'mobilepay'
        | 'multibanco'
        | 'naver_pay'
        | 'oxxo'
        | 'p24'
        | 'payco'
        | 'paynow'
        | 'paypal'
        | 'pix'
        | 'promptpay'
        | 'revolut_pay'
        | 'samsung_pay'
        | 'sepa_debit'
        | 'sofort'
        | 'swish'
        | 'twint'
        | 'us_bank_account'
        | 'wechat_pay'
        | 'zip';

      interface UsBankAccount {
        /**
         * Account holder type: individual or company.
         */
        account_holder_type: UsBankAccount.AccountHolderType | null;

        /**
         * Account type: checkings or savings. Defaults to checking if omitted.
         */
        account_type: UsBankAccount.AccountType | null;

        /**
         * The name of the bank.
         */
        bank_name: string | null;

        /**
         * The ID of the Financial Connections Account used to create the payment method.
         */
        financial_connections_account: string | null;

        /**
         * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
         */
        fingerprint: string | null;

        /**
         * Last four digits of the bank account number.
         */
        last4: string | null;

        /**
         * Contains information about US bank account networks that can be used.
         */
        networks: UsBankAccount.Networks | null;

        /**
         * Routing number of the bank account.
         */
        routing_number: string | null;

        /**
         * Contains information about the future reusability of this PaymentMethod.
         */
        status_details: UsBankAccount.StatusDetails | null;
      }

      namespace UsBankAccount {
        type AccountHolderType = 'company' | 'individual';

        type AccountType = 'checking' | 'savings';

        interface Networks {
          /**
           * The preferred network.
           */
          preferred: string | null;

          /**
           * All supported networks.
           */
          supported: Array<Networks.Supported>;
        }

        namespace Networks {
          type Supported = 'ach' | 'us_domestic_wire';
        }

        interface StatusDetails {
          blocked?: StatusDetails.Blocked;
        }

        namespace StatusDetails {
          interface Blocked {
            /**
             * The ACH network code that resulted in this block.
             */
            network_code: Blocked.NetworkCode | null;

            /**
             * The reason why this PaymentMethod's fingerprint has been blocked
             */
            reason: Blocked.Reason | null;
          }

          namespace Blocked {
            type NetworkCode =
              | 'R02'
              | 'R03'
              | 'R04'
              | 'R05'
              | 'R07'
              | 'R08'
              | 'R10'
              | 'R11'
              | 'R16'
              | 'R20'
              | 'R29'
              | 'R31';

            type Reason =
              | 'bank_account_closed'
              | 'bank_account_frozen'
              | 'bank_account_invalid_details'
              | 'bank_account_restricted'
              | 'bank_account_unusable'
              | 'debit_not_authorized';
          }
        }
      }

      interface WechatPay {}

      interface Zip {}
    }
  }
}
