import { createMachine, interpret } from 'xstate';
import { inspect } from '@xstate/inspect';

inspect();

const machine = createMachine({});

const service = interpret(machine, { devTools: true }).start();
