export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQBa7w1sFzrzaw1H41hZ0dyu46C50vgzU6_MC0VtHkzwJMdF-duAC09gwrA2Kp3-kKhrT2NAO_6S9ffRrWnykPA7XRsPGhEXoyInJ3S5siiyp-8REqmirteEJFu45mi3pQ1HOuFtyBTDm7OJMx8bnnx_XZgN1lW2cWhkmeC2fEKS6-W_cVFtQUykhDiesOK-mconOiFjaYcsvIFm1Wo6Jg',
}

const reducer = (state, action) =>{
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
      ...state,
        user: action.user,
      }

      case 'SET_TOKEN':
        return {
        ...state,
          token: action.token,
        };
        
        case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      default: return state
  }
};

export default reducer