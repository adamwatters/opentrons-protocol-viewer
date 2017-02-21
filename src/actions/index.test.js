import * as actions from '../actions';

test('setOrigin', () => {
  expect(actions.setOrigin('123')).toEqual({type: 'SET_ORIGIN', id: '123'});
});

test('clearOrigin', () => {
  expect(actions.clearOrigin()).toEqual({type: 'CLEAR_ORIGIN'});
});

test('setDestination', () => {
  expect(actions.setDestination('123')).toEqual({type: 'SET_DESTINATION', id: '123'});
});

test('clearDestination', () => {
  expect(actions.clearDestination()).toEqual({type: 'CLEAR_DESTINATION'});
});

test('commitTransfer', () => {
  expect(actions.commitTransfer('123', '456')).toEqual({
    type: 'COMMIT_TRANSFER',
    originId: '123',
    destinationId: '456'
  });
});

test('stopPlay', () => {
  expect(actions.stopPlay()).toEqual({type: 'STOP_PLAY'});
});

test('startPlay', (done) => {

  const mockDispatch = jest.fn()
  const mockGetState = jest.fn()

  mockGetState.mockReturnValue({
    transfers:['1','2'],
    inPlayMode: true,
  })

  // startPlay returns a function which is handled by thunk middleware
  expect(actions.startPlay()).toBeInstanceOf(Function)
  expect(mockDispatch).not.toHaveBeenCalled()
  expect(mockGetState).not.toHaveBeenCalled()
  actions.startPlay(1)(mockDispatch, mockGetState)
  expect(mockDispatch).toHaveBeenCalled()
  expect(mockGetState).toHaveBeenCalled()
  setTimeout(done, 20);

});
