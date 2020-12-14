import React from 'react'
import * as style from "./AsLogItem.css"
import moment from 'moment';

export default function AsLogItem({logItem}) {
    return (
        <li className = {style.aslogitem_li}>
           <div className = {style.aslogitem_time}>{moment(logItem.time).format("YYYY-MM-DD HH:mm:ss")}</div> 
           <div className = {style.aslogitem_source}>{logItem.source}</div> 
        </li>
    )
}
