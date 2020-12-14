import * as requestOptionApi from "../utils/requestOptionBuilder"

export async function generateTokeTest(_userInfo) {

    const contentType = "application/x-www-form-urlencoded";

    const userInfo = {
        username: "siteadmin",
        password: "admin123",
        client: "requestip",
        ip: "192.168.1.87",
        expiration: "10",
        f: "json"
    }
    const tokenOptions = requestOptionApi.generatePostOptions(contentType, userInfo)

    try {
        const response = await fetch("/localserverapi/generateToken", tokenOptions);
        const data = await response.text();
        return ({ data });
    } catch (err) {
        return ({ err });
    }
}

export async function queryLog(_defalutToken, _userInfo, _filter) {
    try {
        const contentType = "application/x-www-form-urlencoded";

        if (chectToken(_defalutToken) === false) {
            const userInfo = {
                username: "siteadmin",
                password: "admin123",
                client: "requestip",
                ip: "192.168.1.87",
                expiration: "10",
                f: "json"
            }
            //生成key
            const tokenOptions = requestOptionApi.generatePostOptions(contentType, userInfo)
            let response = await fetch("/localserverapi/generateToken", tokenOptions);
            _defalutToken = await response.json();
            console.log("create new token")
        }

        _filter = processFilter(_filter)

        //查询日志
        const queryLogOptions = requestOptionApi.generatePostOptions(contentType, _filter)
        const url = `/localserverapi/logs/query?token=${_defalutToken.token}`
        let response = await fetch(url, queryLogOptions)
        let logs = await response.text();

        return ({ defalutToken: _defalutToken, logs });
    }
    catch (err) {
        return ({ err });
    }
}

function chectToken(_defalutToken) {
    if (_defalutToken === undefined)
        return false;
    else
        return _defalutToken.expires > Date.now()
}

function processFilter(_filter) {
    if(_filter===undefined)
        _filter = {}
        
    _filter.f = "json"
    _filter.filter = "{\"services\": \"*\", \"server\": [\"Rest\"]}"
    return _filter
}