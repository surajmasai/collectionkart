
export const addCart = (product) => {

    return {
        type: "ADDITEM",
        payload: product
    }

}
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const delProduct = (product) => {
    return {
        type: "DEL_PRODUCT",
        payload: product
    }

}