import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/auth';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                {
                    email, password
                }
            )
            if (res && res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate('/');
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong!!!')
        }
    }


    return (
        <Layout title={"Register"}>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        </Layout>
    )
}

export default Login
