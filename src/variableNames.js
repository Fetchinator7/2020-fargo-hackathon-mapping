export const variableNames = {
  routes: {
    root: '/',
    dataMapRouter: {
      base: '/api/map',
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
          LAUNCH: 'LAUNCH'
        },
        catch: {
          SET_GET_INFO_ON_LAUNCH_ERROR: 'SET_GET_INFO_ON_LAUNCH_ERROR',
          CLEAR_GET_INFO_ON_LAUNCH_ERROR: 'CLEAR_GET_INFO_ON_LAUNCH_ERROR'
        }
      }
    },
    state: {
      errors: {
        getCensusDataErrorMessage: 'getCensusDataErrorMessage'
      }
    }
  }
};
