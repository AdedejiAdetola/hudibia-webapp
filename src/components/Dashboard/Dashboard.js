import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Patients from "../Patients/Patients";

const Dashboard = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(user);
    const logout = () => {
      dispatch({ type: 'LOGOUT' })
      navigate('/');
      setUser(null);
    }

    useEffect(() => {
      const token = user?.token;

      if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()){
          logout();
        }
      }
        //console.log('token', token)
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token])
    
    console.log(user)
    return(
        <div>
            {
                (() => {
                    if (user?.result?.userType === 'doctor') {
                        return(
                            <div>
                                <Patients />
                            </div>
                        )
                        
                        
                    } else if (user?.result?.userType === 'patient') {
                        return(
                            <>
                            </>
                        )
                    }
                })()
            }
        </div>
    );


}

export default Dashboard;