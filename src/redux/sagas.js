import { takeLatest, takeEvery, call, put, select, delay } from 'redux-saga/effects';
import * as $ from './actions';
import { apiUrl, } from '../config/'
import axios from 'axios';



function* handler() {
    yield takeLatest($.GET_DATA, FUNC_GET_DATA);
    yield takeLatest($.GET_DATA_ID, FUNC_GET_DATA_ID);
    yield takeLatest($.ADD_CART, FUNC_ADD_CART);
    yield takeLatest($.REMOVE_CART, FUNC_REMOVE_CART);
    yield takeLatest($.ADD_FAVORITE, FUNC_ADD_FAVORITE);
    yield takeLatest($.REMOVE_FAVORITE, FUNC_REMOVE_FAVORITE);
}

function* FUNC_GET_DATA() {
    try {
        yield put({
            type: $.GET_DATA_REQUEST
        })
        const response = yield axios.get(apiUrl)
        if (response.data.status == 0) {
            yield put({
                type: $.GET_DATA_REQUEST_FAILURE,
                ERROR: response
            })
        }
        else {
            response.data.forEach(obj => {
                obj.isLike = false;
                obj.cartNumber = 0;
              });
            yield put({
                type: $.GET_DATA_REQUEST_SUCCESS,
                DATA: response.data
            })
        }
    } catch (error) {
        yield put({
            type: $.GET_DATA_REQUEST_FAILURE,
            ERROR: error
        })
    }
    finally {
        yield put({
            type: $.GET_DATA_REQUEST_END
        })
    }
}

function* FUNC_ADD_CART(action) {
    yield put({
        type: $.ADD_CART_REQUEST,
        CART: action.item
    })
}

function* FUNC_REMOVE_CART(action) {
    yield put({
        type: $.REMOVE_CART_REQUEST,
        ID: action.ID
    })
}

function* FUNC_ADD_FAVORITE(action) {
    yield put({
        type: $.ADD_FAVORITE_REQUEST,
        FAVORITE: action.item
    })
}

function* FUNC_REMOVE_FAVORITE(action) {
    yield put({
        type: $.REMOVE_FAVORITE_REQUEST,
        ID: action.ID
    })
}

function* FUNC_GET_DATA_ID(action) {
    try {
        yield put({
            type: $.GET_DATA_ID_REQUEST
        })
        const response = yield axios.get(apiUrl + '/DATADetay?id=' + action.id)
        if (response.data.status == 0) {
            yield put({
                type: $.GET_DATA_ID_REQUEST_FAILURE,
                ERROR: response.data
            })
        }
        else {
            yield put({
                type: $.GET_DATA_ID_REQUEST_SUCCESS,
                DATA_ID: response.data
            })
        }
    } catch (error) {
        yield put({
            type: $.GET_DATA_ID_REQUEST_FAILURE,
            ERROR: error
        })
    }
    finally {
        yield put({
            type: $.GET_DATA_ID_REQUEST_END
        })
    }
}





export { handler };