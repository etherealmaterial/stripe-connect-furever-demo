'use client';

import {ConnectPaymentMethodSettings} from '@stripe/react-connect-js';
import Container from '@/app/components/Container';
import EmbeddedComponentContainer from '@/app/components/EmbeddedComponentContainer';

export default function PaymentMethods() {
  return (
    <Container>
      <header className="mb-8">
        <h1 className="text-xl font-semibold">Payment methods</h1>
        <h2 className="text-sm">Add and manage your payment methods here.</h2>
      </header>
      <EmbeddedComponentContainer>
        <ConnectPaymentMethodSettings />
      </EmbeddedComponentContainer>
    </Container>
  );
}
