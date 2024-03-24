import {ConnectElementTagName} from '@stripe/connect-js';
import {
  useAttachAttribute,
  useAttachEvent,
  useCreateComponent,
} from '@stripe/react-connect-js';
import React from 'react';

// Not yet shipped connect components. These are not publicly accessible.
export const ConnectNotificationBanner = (): JSX.Element => {
  const {wrapper} = useCreateComponent(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    'stripe-connect-notification-banner' as any
  );
  return wrapper;
};

export const ConnectDebugUtils = (): JSX.Element => {
  const {wrapper} = useCreateComponent(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    'stripe-connect-debug-utils' as any
  );
  return wrapper;
};

export const ConnectAccountManagement = (): JSX.Element => {
  const {wrapper} = useCreateComponent(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    'stripe-connect-account-management' as any
  );
  return wrapper;
};

export const ConnectAccountOnboarding = ({
  onOnboardingExited,
  privacyPolicyUrl,
  fullTermsOfServiceUrl,
  recipientTermsOfServiceUrl,
}: {
  onOnboardingExited: () => void;
  privacyPolicyUrl?: string;
  fullTermsOfServiceUrl?: string;
  recipientTermsOfServiceUrl?: string;
}): JSX.Element | null => {
  const {wrapper, component: onboarding} = useCreateComponent(
    'stripe-connect-account-onboarding' as any
  );

  useAttachEvent(onboarding, 'onboardingexited' as any, onOnboardingExited); // Assuming an 'onboardingexited' event
  useAttachAttribute(onboarding, 'privacy-policy-url', privacyPolicyUrl);
  useAttachAttribute(
    onboarding,
    'full-terms-of-service-url',
    fullTermsOfServiceUrl
  );
  useAttachAttribute(
    onboarding,
    'recipient-terms-of-service-url',
    recipientTermsOfServiceUrl
  );

  return wrapper;
};

export const ConnectPaymentMethodSettings = (): JSX.Element => {
  // TODO convert to the <ConnectPaymentMethodSettings /> component once it is launched
  const {wrapper} = useCreateComponent(
    'stripe-connect-payment-method-settings' as ConnectElementTagName
  );

  return wrapper;
};
