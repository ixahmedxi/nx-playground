import type { FC } from 'react';
import type { RouterInputs } from '../utils/trpc';
import { trpc } from '../utils/trpc';

type HelloFromTRPCProps = RouterInputs['hello']['greeting'];

export const HelloFromTRPC: FC<HelloFromTRPCProps> = (props) => {
  const { data, isLoading, isError } = trpc.hello.greeting.useQuery(props);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error</p>;

  return <p>{data.message}</p>;
};
