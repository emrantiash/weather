
import actionType from "../../constant/location"

import { takeEvery, call, put, select } from 'redux-saga/effects';

function* getWeatherData(action) {


    console.log("sagasss")
}


export const locationSaga = [
     takeEvery(actionType.GET_URL_DATA, getWeatherData),
    

];