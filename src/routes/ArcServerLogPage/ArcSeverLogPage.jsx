import { connect } from 'dva'
import React, { Component } from 'react'
import AsLogList from '../../components/AsLogList/AsLogList'
import * as action from '../../action/AsLogAction'
import AsLogToolBar from '../../components/AsLogToolBar/AsLogToolBar'
import moment from 'moment';

class ArcSeverLogPage extends Component {

render() {
    return (
        <div>
            <AsLogToolBar></AsLogToolBar>
            <AsLogList></AsLogList>
        </div>
    )
}
}

export default connect()(ArcSeverLogPage)