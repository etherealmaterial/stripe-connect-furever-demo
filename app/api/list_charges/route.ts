import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/lib/auth';
import {stripe} from '@/lib/stripe';

export async function GET(count = 1) {
  try {
    const session = await getServerSession(authOptions);

    const charges = await stripe.charges.list(
      {
        limit: count,
      },
      {
        stripeAccount: session?.user?.stripeAccount?.id,
      }
    );
    return new Response(
      JSON.stringify({
        charge_count: charges.data.length,
        charges: charges.data,
      }),
      {status: 200, headers: {'Content-Type': 'application/json'}}
    );
  } catch (error: any) {
    console.error(
      'An error occurred when calling the Stripe API to create an account session',
      error
    );
    return new Response(error.message, {status: 500});
  }
}
