
 import style from "./Home.module.css";
 import pic1 from "../../images/sinav_logo2.png";
 import pic2 from "../../images/2.png";
 import pic3 from "../../images/indir.png";

 import {NavLink} from "react-router-dom";

    function Home(){
        return(
            <>
               <div id={style.header}>
                   <NavLink exact  to="/">
                        <span>UZEKA'ya Dön</span>
                     </NavLink>
               <div className="header-info">
                
               </div>
                   <div id={style.headerHeadingBox}>
                  
                        <h3>Online Sınav Sistemi</h3> 
                    </div>
                </div>

              <div id={style.div1}>
                  <img src={pic1} alt="" />
                 
              </div>

              <div id={style.div2}>
            
                  <div className ={style.div3}>
                     <NavLink exact  to="/StudentLogin">
                        <img src={pic2} alt="" />
                        <span>Öğrenci</span>
                     </NavLink>
                  </div>

                  <div  className ={style.div3}>
                    <NavLink  to="/AdminLogin">
                       <img src={pic3} alt="" />
                       <span>Öğretmen</span>
                     </NavLink> 
                  </div>
                
              </div>
            </>
        );
    }
    export default Home;