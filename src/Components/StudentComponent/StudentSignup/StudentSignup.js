import { NavLink , useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import style from "./StudentSignup.module.css";

function StudentSignup() {

     const [userData , setUserData] = useState({
        user_name: "",
        user_email: "",
        user_password: ""
     });

     function onTextFieldChange(e){
         setUserData({
             ...userData,
             [e.target.name] : e.target.value
         });
     }


      const [password , setPassword] = useState("");

      function handlePassword(e){
        setPassword( { "confirmPassword":e.target.value});
    }
    

    let history = useHistory();
    
   async function handleSignup(){

        if(userData.user_password === password.confirmPassword)
        {
            await axios.post("http://localhost:3333/user" , userData);
            alert("Hesabınız oluşturuldu!!");
            alert("Lütfen giriş yapınız!!");
            history.push("/StudentLogin");
        }
        else alert("şifreler uyuşmuyor!!");
    }

    return (
        <div id={style.container}>

            <div id={style.formHeading}>
                <h1>Öğrenci kayıt</h1>
                <p>Bize kayıt olmak için lütfen aşağıdaki formu doldurun</p>
            </div>

            <div id={style.nameBox}>
                <label htmlFor="name">İsim
                    <input onChange={(e) => onTextFieldChange(e)} 
                    type="text" name="user_name"  required />
                </label>
            </div>


            <div id={style.emailBox}>
                <label htmlFor="email">Email
                    <input onChange={(e) => onTextFieldChange(e)}  
                    type="text" name="user_email" required />
                </label>
            </div>

            <div id={style.passwordBox}>
                <label htmlFor="password">Şifre
                    <input onChange={(e) => onTextFieldChange(e)} 
                    type="password" name="user_password" required />
                </label>
            </div>


            <div id={style.confirmPasswordBox}>
                <label htmlFor="confirmPassword">Şifreyi tekrarla
                    <input  onChange={(e) => handlePassword(e)}
                     type="password" name="confirmPassword" required />
                </label>
            </div>

            <button id={style.signup} onClick={handleSignup} >Kayıt Ol</button>


            <div id={style.login}>
                Hesabınız var mı?  <NavLink exact to="/StudentLogin">Giriş Yap</NavLink>
            </div>
        </div>
    );
}
export default StudentSignup;