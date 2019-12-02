import { all } from 'redux-saga/effects';
//import { netwrokTestSaga } from './network-test';
import { locationSaga } from './location';
import { homeSaga } from './home'
import {searchSaga} from './search'


export default function* rootSaga() {
    yield all([
        // ...netwrokTestSaga,
        // ...locationSaga,
        // ...homeSaga
        //locationSaga(),
        ...homeSaga,
        ...locationSaga,
        ...searchSaga
        
    ])
}