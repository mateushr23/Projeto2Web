import { Http } from "../../config/recipePuppyApiConfig";
import { changeloading } from "./loading.action";
import { changeNotify } from "./notify.action";
import { setUserToken } from "./auth.action";


export const actionTypes = {
    CHANGE: "CHANGE",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
};

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload,
});

export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload,
});

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload,
});

export const getItems = (data) => {
    console.log(data);
    return Http.get("api/v1/players?search=", data).then((res) => {
        console.log(res);
    });
};