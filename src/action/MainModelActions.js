import {createAction} from "redux-actions"

/**
 * 1. 基于redux-actions插件简化action的创建过程
 * 2. createAction的参数由响应model的namespace和reducerfunction名组合而成
 */
export const plusAction = createAction("mainModel/plus")
export const subtractionAction = createAction("mainModel/subtraction")