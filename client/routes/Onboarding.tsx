import React from 'react';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ConnectAccountOnboarding} from '@stripe/react-connect-js';
import {OnboardingFooter} from '../components/NoticeFooter';
import {EnableEmbeddedCheckbox} from '../components/EnableEmbeddedCheckbox';
import {
  EmbeddedComponentContainer,
  EmbeddedContainer,
} from '../components/EmbeddedComponentContainer';
import {useSession} from '../hooks/SessionProvider';
import {Container} from '../components/Container';
import StripeConnectDebugUtils from '../components/StripeConnectDebugUtils';

const useOnboarded = () => {
  const {refetch} = useSession();
  const navigate = useNavigate();
  return useMutation<void, Error>('login', async () => {
    const response = await fetch('/stripe/onboarded', {
      method: 'GET',
    });
    const {onboarded} = await response.json();
    if (onboarded) {
      refetch();
      navigate('/reservations');
    } else {
      navigate(0);
    }
  });
};

const Onboarding = () => {
  const {mutate, error} = useOnboarded();

  return (
    <>
      <Container sx={{alignItems: 'center', gap: 4, marginBottom: 2}}>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
          }}
        >
          Onboard to Stripe
        </Typography>
        <EmbeddedContainer>
          <EnableEmbeddedCheckbox label="Enable embedded onboarding" />
          <EmbeddedComponentContainer>
            <ConnectAccountOnboarding
              onOnboardingExited={() => {
                console.log(
                  'Onboarding exited! We redirect the user to the next page...'
                );
                mutate();
              }}
            />
          </EmbeddedComponentContainer>
          <StripeConnectDebugUtils />
        </EmbeddedContainer>
        {error?.message && (
          <Typography variant="body2" color="error">
            {error.message}
          </Typography>
        )}
      </Container>

      <OnboardingFooter />
    </>
  );
};

export default Onboarding;
