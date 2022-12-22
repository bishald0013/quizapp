import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios"

export function attempt_number(result){
    return result.filter(r => r !== undefined).length;
}

export function marks(result, answer) {
    return result.map((e, i) => answer[i] === e).filter(i => i).map( i => 10).reduce((prev, curr) => prev + curr, 0)
}

export function AllowUser({children}) {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to="/" replace={true} />
}

export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}

export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}