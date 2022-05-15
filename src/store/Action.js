export const ADD_DATA = "ADD_DATA"


export const addData = (item) => {
    return {
        type: ADD_DATA,
        payload:item
    }
}