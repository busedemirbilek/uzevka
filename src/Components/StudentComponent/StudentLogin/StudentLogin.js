import style from "./StudentLogin.module.css";
import {NavLink , useHistory} from "react-router-dom";
import {useState} from "react" ;
import axios from "axios";

     function StudentLogin(){

        const [user , setUser] = useState({
            user_email:"",
            user_password:""
        });

        function onTextFieldChange(e){
            setUser({
                ...user ,
                [e.target.name] : e.target.value
            });
        }

          let history = useHistory();

          const [check, setCheck]  = useState(false);


      async function handleLogin()
       {
          let value  = await axios.get("http://localhost:3333/user");

             for(let i=0 ;i<value.data.length ;i++)
             {
                if( value.data[i].user_email === user.user_email &&
                   value.data[i].user_password === user.user_password)
                {
                    setCheck(true);
                   alert("giriş başarılı!!");
                   sessionStorage.setItem("user" , user.user_email);
                   history.push("/StudentDashboard");
                }
             }
             if(check)
             alert("Email veya Şifre hatalı!!");
        }
         return(
            <div id={style.container}>

                <div id={style.containerHeadingBox}>
                    <h1>Öğrenci Girişi</h1>
                </div>

               <div id={style.emailBox}>
                   <label htmlFor="email"> Email
                       <input name="user_email" 
                       onChange={(e) => onTextFieldChange(e)} type="text" id={style.email} />
                   </label>
               </div>


               <div id={style.passwordBox}>
                   <label htmlFor="password"> Şifre
                     <input name="user_password" 
                      onChange={(e) => onTextFieldChange(e)} type="password" id={style.password} />
                   </label>
               </div>

               <button id={style.login} onClick={handleLogin}>Login</button>

              <div id={style.signup}>
                 Hesabınız yok mu? <NavLink exact to="/StudentSignup"> Kayıt Ol</NavLink> 
                 <NavLink id={style.goBackLink} exact to="/exams"> Geri Dön</NavLink> 
              </div>
               </div>
         ); 
     }

     export default StudentLogin;