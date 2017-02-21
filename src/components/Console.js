import React from 'react'
import { connect } from 'react-redux'
import colors from '../constants/colors'
import {
  startPlay,
  stopPlay
} from '../actions'

const Console = ({origin, destination, transfers, inPlayMode, dispatch}) => {
  return (
    <div className='console'>
      <div className='console-title'>Console</div>
      <div className='console-section'>{`From: ${origin}`}</div>
      <div className='console-section'>{`To: ${destination}`}</div>
      <div className='console-section'>
        {transfers.map((transfer, i) => {
          return (
            <div key={i}>
              <span style={{color: colors.ORIGIN}}>{transfer.origin}</span>
              {' => '}
              <span style={{color: colors.DESTINATION}}>{transfer.destination}</span>
            </div>
          )
        })}
      </div>
      {transfers.length ? (
        <button onClick={inPlayMode ? () => dispatch(stopPlay()) : () => dispatch(startPlay())}>
          {inPlayMode ? 'Stop Protocol' : 'Run Protocol'}
        </button>
      ) : ''
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  origin: state.origin,
  destination: state.destination,
  transfers: state.transfers,
  inPlayMode: state.inPlayMode,
})

const ConnectedConsole = connect(mapStateToProps)(Console)

export default ConnectedConsole;