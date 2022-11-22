import ActionTypes from "./actionTypes";


export const setDesignerBrands=(brands=[])=>{
    return {
        type:ActionTypes.SET_DESIGNER_BRANDS,
        payload:brands
    }
}


export const setLuxBrands = (brands=[])=>{
    return {
        type:ActionTypes.SET_LUX_BRANDS,
        payload:brands
    }
}