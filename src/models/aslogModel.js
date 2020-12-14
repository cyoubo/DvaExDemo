import * as serviceAPI from "../services/aslogService"

export default {
    namespace: "aslogModel",
    state: {
        token: undefined,
        logs: undefined
    },
    reducers: {
        updateToken(state, action) {
            return { ...state, token: action.payload }
        },
        updateLogs(state, action) {
            return { token:action.payload.token, logs: action.payload.logs}
        }
    },
    effects: {
        *generateTokeAsync({ payload }, { call, put }) {
            const response = yield call(serviceAPI.generateTokeTest)
            if (response.data) {
                yield put({ type: "updateToken", payload: response.data })
            }
            else {
                console.log(response.err)
            }
        },
        *queryLogAysnc({ payload }, { call, put, select }) {
            const defalutToken = yield select((state) => state.aslogModel.token)
            console.log(payload.filter)
            const response = yield call(serviceAPI.queryLog, defalutToken, payload.userInfo, payload.filter)
            if (response.logs) {
                yield put({ type: "updateLogs", payload: { token: response.defalutToken, logs:response.logs}})
            }
            else {
                console.log(response.err)
            }
        }
    }
}