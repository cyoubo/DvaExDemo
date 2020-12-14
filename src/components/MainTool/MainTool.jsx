import { Button } from 'antd'
import { connect } from 'dva'
import React, { Fragment } from 'react'
import * as actions from "../../action/MainModelActions"

/**
 * 计数器案例-按钮栏功能组件
 * @param {*} param0 由dva/connect绑定后，props属性中包含注入分发器dispatch
 */

 function MainTool(props) {

    //监听事件
    function onBtnPlusClick() {
        /**
         * 1. 发布计数器更新消息
         * 2. action由redux-actions创建
         * 3. plusAction的参数表示action所携带的参数，默认记为playload
         * 4. 此句等效于dispatch({type: "mainModel/plus", payload : 1})
         */
        props.dispatch(actions.plusAction(1))
    }

    function onBtnSubtraction() {
        props.dispatch(actions.subtractionAction(1))
    }

    return (
        <Fragment>
            <Button.Group>
                <Button type = "primary" onClick = {onBtnPlusClick}>plus one</Button>
                <Button type = "primary" onClick = {onBtnSubtraction}>subtraction one</Button>
            </Button.Group>
        </Fragment>
    )
}

/**
 * 1. 通过dva/connect高阶函数进行绑定，使得当前组件于redux托管空间发生关联
 * 2. connect后，当前组件的props属性中自动包含dispatch方法，用于发布消息
 * 3. connect函数没有参数，表示当前组件只是消息发布者，不是数据使用者
 */
export default connect()(MainTool)
