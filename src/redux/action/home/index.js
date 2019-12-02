import actionType from '../../constant/home';

export function setLocationValue(data) {
    return {
        type : actionType.HOME_SET_LOCATION_VALUES,
        payload : data 
    }
}

export function getCurrentWeatherData(data){
    console.log("action")
    return {
    type : actionType.HOME_GET_CURRENT_WETHER,
    payload : data
    }
}
