import { Button } from 'antd'
import { connect } from 'dva'
import React, { Fragment } from 'react'
import * as actions from "../../action/ProductModelAction"

function ProductTool(props) {

    //发送添加事件
    const onBtnAppendProductItemClick = () => {
        props.dispatch(actions.addProductAsync({name : Date.now().toString()}))
    }
    //发送加载静态列表事件
    const onBtnLoadStaticListClick = () => {
        props.dispatch(actions.loadStaticProductList())
    }
    //发送添加动态模拟列表事件
    const onBtnLoadMockListClick = () => {
        props.dispatch(actions.loadMockProductList())
    }

    return (
        <Fragment>
            <Button.Group>
                <Button type = "primary" onClick = {onBtnAppendProductItemClick}>append product item</Button>
                <Button type = "default" onClick = {onBtnLoadStaticListClick}>load static list</Button>
                <Button type = "dashed" onClick = {onBtnLoadMockListClick}>load mock list</Button>
            </Button.Group>
        </Fragment>
    )
}

export default connect()(ProductTool)
