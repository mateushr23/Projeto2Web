import { Http } from "../../config/recipePuppyApiConfig";


export const getItems = (texto) => {
    return Http.get("/api/?q=" + texto).then((res) => {
        debugger
    })
}