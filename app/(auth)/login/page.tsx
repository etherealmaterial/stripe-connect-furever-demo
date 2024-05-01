import Link from 'next/link';
import {getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';
import Form from './form';

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    return redirect('/');
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold pb-2">Log in</h2>
      </div>
      <div className="flex flex-col gap-y-[24px]"> 
      <Form />
      <div className="text-secondary"> 
        New user?{' '}
        <Link href="/signup" className="font-medium text-accent">
          Create an account{' '}
        </Link>
      </div>
      </div>
    </>
  );
}
