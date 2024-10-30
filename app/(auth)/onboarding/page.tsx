'use client';

import React from 'react';
import {useSession} from 'next-auth/react';
import {useCreateAccountLink} from '@/app/hooks/useCreateAccountLink';
import {Link} from '@/components/ui/link';
import {
  ConnectAccountOnboarding,
  ConnectComponentsProvider,
} from '@stripe/react-connect-js';
import {loadConnectAndInitialize} from '@stripe/connect-js';

export default function Onboarding() {
  const [stripeConnectInstance] = React.useState(() => {
    const fetchClientSecret = async () => {
      // Fetch the AccountSession client secret
      const response = await fetch('/api/account_session', {method: 'POST'});
      if (!response.ok) {
        // Handle errors on the client side here
        const {error} = await response.json();
        console.log('An error occurred: ', error);
        return undefined;
      } else {
        const {client_secret: clientSecret} = await response.json();
        return clientSecret;
      }
    };
    return loadConnectAndInitialize({
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,
      fetchClientSecret: fetchClientSecret,
      appearance: {
        overlays: 'dialog',
        variables: {
          colorPrimary: '#625afa',
        },
      },
    });
  });

  return (
    <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
      <ConnectAccountOnboarding
        onExit={() => {
          window.location.href = '/home?shownux=true';
        }}
      />
    </ConnectComponentsProvider>
  );
}
