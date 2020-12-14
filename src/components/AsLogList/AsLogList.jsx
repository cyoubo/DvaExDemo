import { DatePicker } from 'antd'
import { connect } from 'dva'
import React from 'react'

import AsLogItem from '../AsLogItem/AsLogItem';
import * as style from './AsLogList.css'

function AsLogList({ props }) {

    const intial = () => {
        return <div>数据载入中...</div>
    }

    const showData = () => {
        let logObj = JSON.parse(props.logs)
        return (
            <ul className = {style.asLogList}>
                {
                    logObj.logMessages.map((value, index) => {
                        return <AsLogItem key={index} logItem={{
                            time: value.time,
                            source: value.source
                        }}></AsLogItem>
                    })
                }
            </ul>)
    }

    return props.logs === undefined ? intial() : showData()


}

const maps = (reduxState) => {
    return { props: reduxState.aslogModel }
}

export default connect(maps)(AsLogList)