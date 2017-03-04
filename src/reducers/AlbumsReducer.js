export default function(state = { list: undefined, loading: true }, action) {
    switch (action.type) {

        case "GET_ALBUMS":
            return  { ...state,
                list: action.payload.data, 
                loading: false }
             
            break;
        default:
            return state
    }
}