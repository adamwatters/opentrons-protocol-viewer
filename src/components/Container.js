import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {map} from 'lodash'
import containerDescriptions from '../data/containerDescriptions'
import Well from './Well'
import {
  clearOrigin,
  clearDestination,
  setOrigin,
  setDestination,
  commitTransfer,
  stopPlay
} from '../actions'

const Container = ({x, y, type, containerLocation, dispatch, origin, destination, inPlayMode}) => {
  const containerData = containerDescriptions[type];
  const offset = containerData['origin-offset'] || {x: 0, y: 0}
  const onClick = onClickMaker(dispatch, origin, destination, inPlayMode);
  return (
    <g transform={`translate(${x}, ${y})`}>
      <g transform={`translate(${offset.x}, ${offset.y})`}>
        {map(containerData.locations, (wellDescription, wellLocation) => {
          const id = `${containerLocation}:${wellLocation}`
          return (
            <Well wellDescription={wellDescription}
                  isOrigin={id === origin}
                  isDestination={id === destination}
                  id={id}
                  key={id}
                  onClick={onClick}/>
          )
        })}
      </g>
    </g>
  )
}

Container.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  containerLocation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  inPlayMode: PropTypes.bool.isRequired
}

function onClickMaker(dispatch, origin, destination, inPlayMode) {
  if (inPlayMode) {
    return (id) => {
      dispatch(stopPlay())
      dispatch(clearOrigin())
      dispatch(clearDestination())
      dispatch(setOrigin(id))
    }
  }
  if (origin && destination) {
    return (id) => {
      dispatch(clearOrigin())
      dispatch(clearDestination())
      dispatch(setOrigin(id))
    }
  }
  if (origin) {
    return (id) => {
      if (origin !== id) {
        dispatch(setDestination(id))
        dispatch(commitTransfer(origin, id))
      }
    }
  }
  return (id) => dispatch(setOrigin(id))
}

const mapStateToProps = (state) => ({
  origin: state.origin,
  destination: state.destination,
  inPlayMode: state.inPlayMode,
})

const ConnectedContainer = connect(mapStateToProps)(Container)

export default ConnectedContainer;