import actionType from "../../constant/home"

import { takeEvery, call, put, select } from 'redux-saga/effects';

function* getWeatherData(action) {
    //console.log("sagas"+action.payload.latitude)
    try {
        const response = yield call(fetch, 'https://api.openweathermap.org/data/2.5/weather?lat=' + action.payload.latitude + '&lon=' + action.payload.longitude + '&appid=2f1e23b452d65810864060adc8f93509',false);
        const data = yield  response.json();
        yield put({ type:  actionType.HOME_GET_CURRENT_WETHER_SUCCESS, data });
    } catch (e) {
        yield put({ type:  actionType.HOME_GET_CURRENT_WETHER_FAILURE, e });
        return;
    }

    

}

export const homeSaga = [
      takeEvery(actionType.HOME_GET_CURRENT_WETHER, getWeatherData)
    

];