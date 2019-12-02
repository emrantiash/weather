import actionType from "../../constant/search"

import { takeEvery, call, put, select } from 'redux-saga/effects';

function* getSWeatherData(action) {
    console.log("sagas"+action.payload)
    try {
        const response = yield call(fetch, 'https://api.openweathermap.org/data/2.5/weather?q='+action.payload + '&appid=2f1e23b452d65810864060adc8f93509',false);
        const data = yield  response.json();
        yield put({ type:  actionType.SEARCH_GET_CURRENT_WETHER_SUCCESS, data });
    } catch (e) {

        console.log(e)
        yield put({ type:  actionType.SEARCH_GET_CURRENT_WETHER_FAILURE, e });
        return;
    }

    

}

export const searchSaga = [
      takeEvery(actionType.SEARCH_GET_CURRENT_WETHER, getSWeatherData)
    

];