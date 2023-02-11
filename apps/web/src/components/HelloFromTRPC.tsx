import { trpc } from '../utils/trpc';

export const HelloFromTRPC = () => {
  const { data, isLoading, isError } = trpc.hello.useQuery();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error</p>;

  return <p>{data.message}</p>;
};
