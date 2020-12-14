import request from "../utils/request"
import * as serviceApi from "../services/productService"

export default {
    namespace: "porductModel",
    state: {
        dataSource: [
            { name: "defalut" }
        ]
    },

    reducers: {
        //向state的dataSouce列表中添加一个元素
        addProduct(state, action) {
            let newState = {...state} //注意深拷贝
            newState.dataSource.push(action.payload)
            return newState
        },
        //整个更新state
        reBuildProductList(state, action) {
            return { dataSource: action.payload }
        }
    },

    effects:
    {
        //异步形式接收传来的action
        *addProductAsync({ payload }, { call, put }) {
            //数据更新过程通过put函数，推迟到reducers的addProduct方法执行
            yield put({type:"addProduct", payload});
        },

        //加载静态模拟数据
        *loadStaticProductList({ payload }, { call, put }) {
            //直接调用utils包中的工具函数request，获得响应的response对象
            //再从response中获得返回数据体
            //注意异步函数调用方法，利用call函数实现类似反射调用request
            const response = yield call(request, "/api/productStaticData")
            if (response.data) {
                const datalist = response.data.data
                //state的修改，推迟到reducers中进行
                yield put({ type: "reBuildProductList", payload: datalist })
            }
            //异常处理
            else{
                console.error(response.err)
            }
        },
        //加载mock生成的动态数据
        *loadMockProductList({ payload }, { call, put }) {
            //假如异步请求过程中还存在其他业务逻辑，则可以将逻辑推迟到serviceAPI中进行
            const response = yield call(serviceApi.loadmockdata)
            if (response.data) {
                const datalist = response.data.data
                //state的修改，推迟到reducers中进行
                yield put({ type: "reBuildProductList", payload: datalist })
            }
            //异常处理
            else{
                console.error(response.err)
            }
        }
    }
}