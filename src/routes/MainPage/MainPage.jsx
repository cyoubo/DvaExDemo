import React, { Component, Fragment } from 'react'
import MainContext from '../../components/MainContext/MainContext'
import MainTool from '../../components/MainTool/MainTool'

/**
 * 容器组件
 * 1. 内部只负责组合功能组件
 * 2. 对外需要于路由表挂接
 */
export default class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <h2>this is count demo</h2>
                <MainContext></MainContext>
                <MainTool></MainTool>
            </Fragment>
        )
    }
}
