export const setOrigin = (id) => ({
  type: 'SET_ORIGIN',
  id
})

export const clearOrigin = () => ({
  type: 'CLEAR_ORIGIN',
})

export const setDestination = (id) => ({
  type: 'SET_DESTINATION',
  id
})

export const clearDestination = () => ({
  type: 'CLEAR_DESTINATION',
})

export const commitTransfer = (originId, destinationId) => ({
  type: 'COMMIT_TRANSFER',
  originId,
  destinationId
})

export const stopPlay = () => ({
  type: 'STOP_PLAY'
})

const _startPlay = () => ({
  type: 'START_PLAY'
})

export const startPlay = (timeBetweenMoves) => {
  let counter = 0;
  return (dispatch, getState) => {
    dispatch(_startPlay());
    const transfers = getState().transfers;
    const inner = () => {
      const inPlayMode = getState().inPlayMode;
      if (transfers[counter] && inPlayMode) {
        dispatch(setOrigin(transfers[counter].origin));
        dispatch(setDestination(transfers[counter].destination));
        counter += 1;
        setTimeout(() => {
          inner();
        }, timeBetweenMoves)
      } else {
        dispatch(stopPlay());
      }
    }
    inner();
  };
}