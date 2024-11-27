'use client';

import * as React from 'react';
import {ConnectPayments} from '@stripe/react-connect-js';
import Container from '@/app/components/Container';
import EmbeddedComponentContainer from '@/app/components/EmbeddedComponentContainer';
import MonthToDateWidget from '@/app/components/MonthToDateWidget';
import CustomersWidget from '@/app/components/CustomersWidget';
import {LoaderCircle, Plus} from 'lucide-react';
import {useSession} from 'next-auth/react';

const StripePricingTable = ({
  customerSessionClientSecret,
}: {
  customerSessionClientSecret: String;
}) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement('stripe-pricing-table', {
    'pricing-table-id': 'prctbl_1QPsgcPohO0XT1fpB7GNfR0w',
    'publishable-key':
      'pk_test_51QPruLPohO0XT1fpWpEciHgkU2awScnyBaMA1hESnsaHAKjqRM94kl2qnLD6dqbaAsqUOUVLvJzJPATPy0Mr31xR00bN6fnSzg',
    // 'customer-session-client-secret': customerSessionClientSecret,
  });
};

export default function Billing() {
  const {data: session} = useSession();

  // TODO: actually fetch the customer session
  const [loading, setLoading] = React.useState(false); // TODO: default should be true
  const [customerSession, setCustomerSession] = React.useState('fake'); // TODO: default should be null

  React.useEffect(() => {
    if (customerSession) {
      return;
    }
    const fetchData = async () => {
      const response = await fetch('/api/customer_session', {method: 'POST'});
      const json = await response.json();
      if (!response.ok) {
        // Handle errors on the client side here
        const {error} = json;
        console.warn('An error occurred: ', error);
      } else {
        setCustomerSession(json.session);
        setLoading(false);
      }
    };
    // fetchData();
  }, [customerSession]);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">Billing</h1>
      </div>

      {loading || !customerSession ? (
        <LoaderCircle className="align-center ml-1 animate-spin" size={60} />
      ) : (
        <StripePricingTable customerSessionClientSecret={customerSession} />
      )}
    </>
  );
}
