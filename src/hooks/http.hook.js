import {useCallback} from "react";


export const useHttp = () => {
    const request = useCallback(async (url,method = "GET", body,headers)=>{
        if(body){
            body = JSON.stringify(body)
        }
        let data = await fetch(url,{method,body,headers})
        let fenched = await data.json()
        return fenched
    },[]);


    return {request}
}