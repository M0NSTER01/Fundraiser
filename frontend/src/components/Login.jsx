import "./Login.css";
import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { FaRegEye, FaRegEyeSlash, FaArrowLeft} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const [activeTab, setActiveTab] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    let navigate = useNavigate();

    // let url = "http://localhost:9000";
    let url = "https://my-fundraiser-api.onrender.com";


    function handlelogsubmit(e) {
        e.preventDefault();
        console.log({ email, password });
        let data = { "email": email, 
            "password": password };


        axios.get(`${url}/newlogin?email=${email}&password=${password}`)
        .then((res)=>{
            console.log(res.data);
            if(res.status === 401){
                alert("Invalid Credentials");
            }
            else{
                setName(res.data.username);
                let name = res.data.username;
                console.log("Variable Stored Name: ", name);
                localStorage.setItem("user", name);
                console.log("Local Storage Name: ", localStorage.getItem("user"));
                navigate("/dashboard");
            }
        })
        .catch((err)=>{
            console.log(err);
            alert("Error Occured!");
        })
    }
    function handleregsubmit(e) {
        e.preventDefault();
        console.log({ name, email, password });
        axios.post(`${url}/register`, { name, email, password })
        .then ((res)=>{
            console.log(res);
            alert("Registration Successful");
            setActiveTab("login");
        })
        .catch ((err)=>{
            console.log(err);
            alert("Error Occured!");

        });
    }
    function handlechange(e) {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "name") {
            setName(value);
        }
    }
    let handleback = () => {
        navigate("/");
    }

    useEffect(() => {
        console.log({ name, email, password });
    }, [name, email, password]);

    return <>
        <div className={styles.container} >
            <div className={`flexr ${styles.navbar}`}>
                <button className={`flexr aic jic ${styles.backbutton}`} onClick={handleback}><FaArrowLeft />Back to Home</button>
            </div>
            <div className="miniContainer ac jc s30 minmini flex aic ">
                <h2>Happy Fundraiser</h2>
                <div className={styles.tabButtons}>
                    <button
                        className={activeTab === 'login' ? styles.active : ''}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={activeTab === 'signup' ? styles.active : ''}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                </div>
                {activeTab === "login" && (
                    <form className={styles.formbody} onSubmit={handlelogsubmit}>
                        <p className={`${styles.inputtext}`}>Email</p>
                        <input
                            type="email"
                            onChange={handlechange}
                            name="email"
                            placeholder="Email"
                            value={email}
                        />
                        
                        <p className={`${styles.inputtext}`}>Password</p>
                        <div className={`${styles.passwordWrapper}`}>
                            <input
                                type={visible ? "text" : "password"}
                                onChange={handlechange}
                                name="password"
                                placeholder="Password"
                                value={password}
                            />
                            {visible ? <FaRegEyeSlash className={styles.eyeIcon} onClick={() => setVisible(false)} /> : <FaRegEye className={styles.eyeIcon} onClick={() => setVisible(true)} />}
                        </div>
                        <button type="submit" className={styles.submit}>Login</button>
                    </form>
                )}
                {activeTab === 'signup' && <form className={styles.formbody} onSubmit={handleregsubmit}>
                    <p className={`${styles.inputtext}`}>Name:</p>
                    <input type="text" onChange={handlechange} name="name" placeholder="Enter Full Name" value={name} />
                    <p className={`${styles.inputtext}`}>Email:</p>
                    <input
                        type="email"
                        onChange={handlechange}
                        name="email"
                        placeholder="Email"
                        value={email}
                    />
                    <p className={`${styles.inputtext}`}>Password</p>
                    <div className={styles.passwordWrapper}>
                        <input
                            type={visible ? "text" : "password"}
                            onChange={handlechange}
                            name="password"
                            placeholder="Password"
                            value={password}
                        />
                        {visible ? <FaRegEyeSlash className={styles.eyeIcon} onClick={() => setVisible(false)} /> : <FaRegEye className={styles.eyeIcon} onClick={() => setVisible(true)} />}
                    </div>
                    <button type="submit" className={styles.submit}>{visible ? "Login" : "Sign Up"}</button>
                </form>}
            </div>
        </div>
    </>
}

export default Login