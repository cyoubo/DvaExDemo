import { connect } from 'dva'
import React from 'react'

/**
 * 计数器案例-按钮栏功能组件
 * @param {*} param0 由dva/connect绑定后，props属性中包含注入的数据值和分发器
 * 注意：此处在对传入的props时进行了解构，只取其中的data属性
 */
 function MainContext({data}) {    
    return (
        <h4>
            {`current count is ${data.count}`} <br></br>
            {`current name is ${data.name}`}
        </h4>
    )
}

/**
 * 提取函数：告知connect函数，如何从redux空间中获取当前组件需要的数据
 * @param {}} reduxState 整个redux托管的数据空间
 */
const maps = (reduxState) => {
    //从redux空间中取出mainModel的数据数据，包裹成{data: {实际值}}的对象，传入到当前组件的props中
    return { data : reduxState.mainModel}
}

/**
 * 1. 通过dva/connect高阶函数进行绑定，使得当前组件于redux托管空间发生关联
 * 2. connect后，当前组件的props属性中自动包含dispatch方法，用于发布消息
 * 3. connect函数有参数，表示当前组件即是消息发布者，也是数据使用者
 */
export default connect(maps)(MainContext)
