import ActionTypes from "./actionTypes";


export const resetCommentReducer = ()=>{
    return{
        type:ActionTypes.RESET_COMMENT_REDUCER
    }
}

export const setComments = (comments=[])=>{
    return{
        type:ActionTypes.SET_COMMENTS,
        payload:comments
    }
}


export const addComment = (comment={})=>{
    return{
        type:ActionTypes.ADD_COMMENT,
        payload : comment
    }
}