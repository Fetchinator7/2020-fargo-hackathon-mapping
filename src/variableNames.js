export const variableNames = {
  routes: {
    root: '/',
    dataMapRouter: {
      base: '/api/map',
      age: '/age',
      root: '/'
    },
    urls: {
      home: '/home',
      map: '/map'
    }
  },
  dispatches: {
    standard: {
      requests: {
        try: {
          LAUNCH: 'LAUNCH',
          SET_MAPS: 'SET_MAPS'
        },
        catch: {
          SET_GET_MAPS_ERROR: 'SET_GET_MAPS_ERROR',
          CLEAR_GET_MAPS_ERROR: 'CLEAR_GET_MAPS_ERROR'
        }
      }
    },
    state: {
      keywords: {
        maps: 'maps',
        errors: 'errors'
      },
      errors: {
        getCensusDataErrorMessage: 'getCensusDataErrorMessage'
      }
    }
  }
};
