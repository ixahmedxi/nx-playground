import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { HelloFromTRPC } from '../components/HelloFromTRPC';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  if (status === 'authenticated') {
    return (
      <main>
        <HelloFromTRPC name={session.user.name || undefined} />
        <button type='button' onClick={() => void signOut()}>
          Sign out
        </button>
      </main>
    );
  }

  return (
    <main>
      <HelloFromTRPC />
      <button type='button' onClick={() => void signIn('github')}>
        Sign in with Github
      </button>
    </main>
  );
};

export default Home;
