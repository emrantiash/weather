import actionType from '../../constant/location';


export function setValue(data){
    return {
    type : actionType.SET_VALUE,
    payload : data
    }
}
