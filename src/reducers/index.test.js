import * as reducers from './index';

test('origin', () => {
  expect(reducers.origin(undefined, {})).toEqual('');
  expect(reducers.origin('', {id: '123', type: 'SET_ORIGIN'})).toEqual('123');
  expect(reducers.origin('', {id: '', type: 'CLEAR_ORIGIN'})).toEqual('');
  expect(reducers.origin('123', {type: 'OTHER'})).toEqual('123');
});

test('destination', () => {
  expect(reducers.destination(undefined, {})).toEqual('');
  expect(reducers.destination('', {id: '123', type: 'SET_DESTINATION'})).toEqual('123');
  expect(reducers.destination('', {id: '', type: 'CLEAR_DESTINATION'})).toEqual('');
  expect(reducers.destination('123', {type: 'OTHER'})).toEqual('123');
});

test('transfers', () => {
  expect(reducers.transfers(undefined, {})).toEqual([]);

  expect(reducers.transfers([], {
    type: 'COMMIT_TRANSFER',
    originId: '123',
    destinationId: '456',
  })).toEqual([{origin: '123',destination: '456'}]);

  expect(reducers.transfers([{origin: '123',destination: '456'}], {
    type: 'COMMIT_TRANSFER',
    originId: '789',
    destinationId: '100',
  })).toHaveLength(2)

  expect(reducers.transfers([{origin: '123',destination: '456'}], {
    type: 'OTHER',
  })).toEqual([{origin: '123',destination: '456'}]);
});

test('inPlayMode', () => {
  expect(reducers.inPlayMode(undefined, {})).toEqual(false);
  expect(reducers.inPlayMode(false, {type: 'START_PLAY'})).toEqual(true);
  expect(reducers.inPlayMode(false, {type: 'STOP_PLAY'})).toEqual(false);
  expect(reducers.inPlayMode(true, {type: 'OTHER'})).toEqual(true);
});