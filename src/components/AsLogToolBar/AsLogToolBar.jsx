import { Button, DatePicker } from 'antd'
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { connect } from 'dva';
import * as action from '../../action/AsLogAction'
import * as style from './AsLogToolBar.css'

function AsLogToolBar({ props, dispatch }) {

    const [DateRange, setDateRange] = useState([moment().subtract(7,'days'), moment()])
    
    useEffect(() => {
        const taskID = setInterval(()=>{
            setDateRange([DateRange[0], moment()])
        }, 3000)
        return () => {
            clearInterval(taskID)
        }
    }, [])

    useEffect(() => {
        dispatch(action.queryLogAysnc(convertStateToFilter()))
    }, [DateRange])

    const convertStateToFilter = () => {
        return {
            filter : {
                startTime: DateRange[0].valueOf(),
                endTime:  DateRange[1].valueOf()
            }
        }
    }

    return (
    <div>
        <div className = {style.title}>
            <span className = {style.label}>起始时间</span>
            <span className = {style.value}>{DateRange[0].format()}</span>
            <span className = {style.label}>终止时间</span>
            <span className = {style.value}>{DateRange[1].format()}</span>
        </div>
    </div>)
}

const maps = (reduxState) => {
    return { props: reduxState.aslogModel }
}

export default connect(maps)(AsLogToolBar)