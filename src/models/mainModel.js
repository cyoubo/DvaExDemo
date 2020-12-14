
export default {
    /**
     * 当前数据模型的命名空间
     * 1. 作为dispatch-action中的限定前缀
     * 2. 作为当前模型在redux中的属性名
     */
    namespace: 'mainModel',
  
    //当前数据模型所管理的数据
    state: {
        count : 100, //变化值
        name : "cyoubo" //不变值
    },
  
    //当前数据模型对数据操作函数
    //namespace+函数名，可以构成dispatch-action中的type值
    reducers: {
      plus(state, action) {
        return { ...state, count: state.count + action.payload };
      },
      subtraction(state, action) {
        return { ...state, count: state.count - action.payload };
      },  
    },


};