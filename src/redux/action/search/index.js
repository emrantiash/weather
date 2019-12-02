import actionType from '../../constant/search';



export function getMuteAll(){
    return {
        type : actionType.SEARCH_MUTE_ALL
    }
    
}

export function getSearcWeatherData(data){
    //console.log("action")
    return {
    type : actionType.SEARCH_GET_CURRENT_WETHER,
    payload : data
    }
}
