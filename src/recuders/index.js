const reducer = (state, action) => {
    const myResult = (text) => {
        const result = []
        if (text !== '') {
          state.trends.map((item) => item.title.includes(text) && result.push(item))
          state.originals.map((item) => item.title.includes(text) && result.push(item))
        }
        return result
      }

    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: state.myList.find((item) => item.id === action.payload.id) ? state.myList : [...state.myList, action.payload],
            }
        case 'DELETE_FAVORITE':
            return{
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload
            }  
        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) 
                ||
                state.originals.find(item => item.id === Number(action.payload))
                || [] 
            }
        case 'SEARCH_VIDEO':
            return {
                ...state,
                mySearch: myResult(action.payload)
            }
        default:
            return state
    }
}
export default reducer