import type { inferRouterInputs } from '@trpc/server';
import type { Context } from '../../context';
import { createInnerContext } from '../../context';
import { helloRouter } from './helloRouter';

describe('hello router', () => {
  let ctx: Context;
  let caller: ReturnType<typeof helloRouter.createCaller>;

  beforeEach(() => {
    ctx = createInnerContext({ session: null });
    caller = helloRouter.createCaller(ctx);
  });

  it('should return hello world', async () => {
    const result = await caller.greeting();

    expect(result).toStrictEqual({
      message: 'Hello world',
    });
  });

  it('should return hello with name', async () => {
    const input: inferRouterInputs<typeof helloRouter>['greeting'] = {
      name: 'John',
    };

    const result = await caller.greeting(input);

    expect(result).toStrictEqual({
      message: 'Hello John',
    });
  });
});
