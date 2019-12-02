import actionType from '../../constant/location';

const INITIAL_STATE = {
    isLoading : true ,
    latitude  :  0,
    longitude : 0
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case actionType.SET_VALUE:
            return {
                isLoading : false,
                latitude : action.payload.latitude,
                longitude : action.payload.longitude
            }

        default:
            return state;
    }
}