import Mock from "mockjs"

export default {
    // 要以斜杠号开头
    "GET /api/productStaticData" : {
        status : true,
        msg: "",
        data : [
            { name : "name1"} ,
            { name : "name2"} ,
            { name : "name3"} ,
            { name : "name4"} ,
            { name : "name5"} ,
        ]},
    //这种写法，本质上还是静态数据，只是静态数据是由mock动态生成的
    //即是说，mock执行一次后则不在执行
    //具体的mock函数用法，参考mockjs相关文档
    "GET /api/productMockData2" : Mock.mock({
        'status': true,
        'msg': "",
        'data|10-25' : [{
            name : "@cname"
        }]
    }),
    //这种写法，每次都执行了回调函数，因此每一次请求，都会生成不同的数据
    "GET /api/productMockData" : (req, res) => {
        res.status(200).json(Mock.mock({
            'status': true,
            'msg': "",
            'data|10-25' : [{
                name : "@cname"
            }]
        }))
    }    
}