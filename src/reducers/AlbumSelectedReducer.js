export default function(state = { selectedAlbum: undefined }, action) {
    switch (action.type) {

        case "GET_ALBUM":
            return { ...state, 
                selectedAlbum: action.payload.data }    // should be single album
            break;
         
        default:
            return state
    }
}