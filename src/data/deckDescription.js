const WIDTH = 427.5;
const HEIGHT = 383.25;
const X_SPACING = WIDTH / 5;
const Y_SPACING = HEIGHT / 3;


const deckDescription = {
  width: WIDTH,
  height: HEIGHT,
  locations: {
    A1: {
      x: 0,
      y: Y_SPACING * 2
    },
    A2: {
      x: 0,
      y: Y_SPACING
    },
    A3: {
      x: 0,
      y: 0
    },
    B1: {
      x: X_SPACING,
      y: Y_SPACING * 2
    },
    B2: {
      x: X_SPACING,
      y: Y_SPACING
    },
    B3: {
      x: X_SPACING,
      y: 0
    },
    C1: {
      x: X_SPACING * 2,
      y: Y_SPACING * 2
    },
    C2: {
      x: X_SPACING * 2,
      y: Y_SPACING
    },
    C3: {
      x: X_SPACING * 2,
      y: 0
    },
    D1: {
      x: X_SPACING * 3,
      y: Y_SPACING * 2
    },
    D2: {
      x: X_SPACING * 3,
      y: Y_SPACING
    },
    D3: {
      x: X_SPACING * 3,
      y: 0
    },
    E1: {
      x: X_SPACING * 4,
      y: Y_SPACING * 2
    },
    E2: {
      x: X_SPACING * 4,
      y: Y_SPACING
    },
    E3: {
      x: X_SPACING * 4,
      y: 0
    },
  },
}

export default deckDescription;