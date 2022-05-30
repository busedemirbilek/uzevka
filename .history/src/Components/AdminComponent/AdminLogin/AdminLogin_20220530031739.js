import style from "./AdminLogin.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


function AdminLogin() {

    const [admin, setAdmin] = useState({
        admin_name: "",
        admin_password: ""
    });

    function handleInput(e) {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        }, []);
    }
    let history = useHistory();

    async function login(e) {
        const value = await axios.get("http://localhost:3333/admin");

        if (value.data[0].admin_name === admin.admin_name) {
            if (value.data[0].admin_password === admin.admin_password) {
                alert("giriş başarılı!!");
                history.push("/AdminDashboard");
            }
            else {
                alert("yanlış şifre!!");
            }
        }
        else {
            alert("yanlış kullanıcı adı!!");
        }
    }


    return (
        <div id={style.container}>
            <div id={style.containerHeadingBox}>
                <h1>Öğretmen Girişi</h1>
            </div>
            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input name="admin_name" onChange={(e) => handleInput(e)} type="text" id={style.email} />
                </label>
            </div>
            <div id={style.passwordBox}>
                <label htmlFor="password"> Şifre
                    <input name="admin_password" onChange={(e) => handleInput(e)} type="password" id={style.password} />
                </label>
            </div>
            <button onClick={(e) => login(e)} id={style.login}>Giriş Yap</button>
            <NavLink to="/exams" id={style.goBackLink}>Geri Dön</NavLink>
        </div>
    );
}
export default AdminLogin;