import {takeEvery} from "redux-saga/effects";
import {USER_LIST} from "./constants"

function* userlist(){
    const url = "https://dummyjson.com/users";
    let data = yield fetch(url);
    data = yield data.json();
    console.warn(data);
}
function* SagaData(){
    yield takeEvery(USER_LIST, userlist);
}
export default SagaData;