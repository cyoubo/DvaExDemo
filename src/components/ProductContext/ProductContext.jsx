import { connect } from 'dva'
import React from 'react'

 function ProductContext({data}) {
    return (
        <ul>
            {data.dataSource.map((value,index)=>{
                return <li key = {index}>{`name :  ${value.name}`}</li>
            })}
        </ul>
    )
}
//从redux空间中，提取出productModel的数据，并名为data，传入当前组件的props属性中
const maps = (reduxState) => {
    return { data : reduxState.porductModel}
}

export default connect(maps)(ProductContext)