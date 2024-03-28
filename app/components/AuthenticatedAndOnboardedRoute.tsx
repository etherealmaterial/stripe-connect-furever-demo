'use client';

import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import Nav from './Nav';

export default function AuthenticatedAndOnboardedRoute({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const {data: session} = useSession();

  useEffect(() => {
    if (session?.user?.stripeAccount?.details_submitted === false) {
      router.push('/onboarding');
    }
  }, [session, router]);

  if (!session || !session.user) {
    return null;
  }

  return (
    <div className="flex h-full min-h-screen">
      <Nav />
      <div className="bg-offset p-8 ml-64 flex-1 space-y-8">{children}</div>
    </div>
  );
}
