import React,{useEffect,useState} from 'react'
import { useAuth } from '../../context/auth'
import Spinner from '../UI/Spinner';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
    const [ok,setOk] = useState(false);
    const {auth,setAuth} = useAuth();
    useEffect(()=>{
        const authCheck = async()=>{
            const res = await axios.get("https://medicart-backend.onrender.com/ecomm/api/v1/auth/user-auth");
            if(res.data.ok)
            {
                setOk(true);
            }
            else{
                setOk(false);
            }
        }
        if(auth?.token)
        {
            authCheck();
        }
    },[auth?.token])
 return ok ? <Outlet/> : <Spinner/>
}

export default PrivateRoute
