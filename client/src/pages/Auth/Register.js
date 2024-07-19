import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault(); try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                {
                    name, email, password, phone, address
                }
            )
            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
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
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="phone" placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="address" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>

    )
}

export default Register
