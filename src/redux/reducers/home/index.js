import actionType from '../../constant/home';

const INITIAL_STATE = {
    isLoading : true ,
    latitude  :  0,
    longitude : 0,
    data : null ,
    name : null,
    time : 0 ,
    icon : null,
    temp : 0 ,
    description : null,
    country : null,
    humidity : 0,
    pressure : 0,
    sunrise : 0,
    sunset : 0 ,
    color : [ '#a0a09e','#395a94','#a0a09e'] ,
    path : 'rain',
    wind :0 ,
    speed : 0,
    fontColor : '',
    musuc : '',
    error : false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case actionType.HOME_SET_LOCATION_VALUES:
        return {
            isLoading : false,
            latitude : action.payload.latitude,
            longitude : action.payload.longitude
        }

        case actionType.HOME_GET_CURRENT_WETHER :
        return {
            ...state,
            
        }

        case actionType.HOME_GET_CURRENT_WETHER_SUCCESS :
        return {
            ...state,
            isLoading : false ,
            data : action.data ,
            name : action.data.name,
            time : action.data.dt,
            icon : action.data.weather[0].icon,
            temp : action.data.main.temp ,
            //main : action.data.weather[0].main ,
            description : action.data.weather[0].description,
            wind : action.data.wind.deg,
            speed : action.data.wind.speed,
           //  color : getColor(action.data.weather[0].main),
            path : action.data.weather[0].main,
            country : action.data.sys.country,
            humidity : action.data.main.humidity,
            pressure : action.data.main.pressure,
            sunrise : makethisaction(action.data.sys.sunrise),
            sunset : makethisaction(action.data.sys.sunset),
            fontColor : getFontColor(action.data.weather[0].main), 
           // music : getMusic(action.data.main.temp,action.data.weather[0].main)
        }

        case actionType.HOME_GET_CURRENT_WETHER_FAILURE :
            return {
                ...state ,
                error : true

            }

        default:
            return state;  
    }
}

function getMusic(t,m){
    if(m==='Rain')
    return 'rain'
    else
    {
    if((t-273.15)%2===0)
    return 'guiter'
    else
    return 'annie'
    }
    

}

function getFontColor(color){
    if(color === 'Haze' || color === 'Snow' || color === 'Drizzle' || color === 'Mist' || color === 'Fog')
    {
        color = "white"
    }
    else if(color === 'Clear')
         color = "orange"
    else if(color === 'Clouds' )
         color = "#ffffff"
    else 
    {
        color = "green"
    }

    return color 
}

function getPath(color){
    if(color==='Haze')
    return  'haze'  ;
}

function getColor(color)
{
     if(color==='Haze')
    return  ['#a0a09e','#bdd5e5','#ffffff','#a0a09e'] ;     
    else if(color==='Clear')
    return  ['#a0a09e','#ffffff','#395a94','#a0a09e'] ;
    else if (color==='Clouds')
    return  ['#a0a09e','#7e8796','#a0a09e'] ;
    else if(color==='Rain') //#return 
    return  ['#a0a09e','#ffffff','#41646d','#a0a09e'] ;
     else
    return  ['#a0a09e','#87CEFA','#a0a09e'] ;



}

function makethisaction(t){
    let time = t ;
    var date = new Date(time*1000);
        
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var cdate = date.getDate();

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();

   return time = hours + ':' + minutes.substr(-2);
   // alert(time)
}