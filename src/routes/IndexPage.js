import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { routerRedux } from 'dva/router'

function IndexPage({dispatch}) {

  //监听点击事件实现路由跳转
  function onUlliClickHandle(event){
    event.preventDefault();
    const routerKey = event.target.dataset["key"]
    //路由跳转通过还是通过dispatch发布消息实现
    //此时的action由dva/router库中的routerRedux函数生成
    dispatch(routerRedux.push(`/${routerKey}`))
  } 


  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <ul className = {styles.list} onClick = {onUlliClickHandle}>
        <li><a href = "#" data-key = "countDemo">Count Demo</a></li>
        <li><a href = "#" data-key = "dataDemo">Data Demo</a></li>
        <li><a href = "#" data-key = "AsLogDemo">AsLog Demo</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

//绑定后，当前组件的props参数自动包含dispatch函数
export default connect()(IndexPage);
