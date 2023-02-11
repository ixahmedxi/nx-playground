import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  if (status === 'authenticated') {
    return (
      <main>
        <h1>Hello there, {session.user.name}</h1>
        <button type='button' onClick={() => void signOut()}>
          Sign out
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Home Page</h1>
      <button type='button' onClick={() => void signIn('github')}>
        Sign in with Github
      </button>
    </main>
  );
};

export default Home;
