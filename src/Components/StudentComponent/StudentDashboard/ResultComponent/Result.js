import axios from "axios";
import React, {useState , useEffect} from "react"; 
import style from "../StudentDashboard.module.css";

function Result() {

    const [results , setResults] = useState([]);

     useEffect(()=>{    
        async function getAllResults(){
            let value = await axios.get("http://localhost:3333/result");
            setResults(value.data);
        }
            getAllResults();
     },[]);
    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Öğrenci Sınav Listesi</h2>
            </div>
            <div id={style.tableBox}>
                <table >
                    <thead>
                        <tr>
                             <th id={style.center}>Kullanıcı Email</th>
                             <th id={style.center}>Sınav Adı</th>
                             <th id={style.center}>Sınav Tarihi</th>
                             <th id={style.center}>Geçme Durumu</th>
                             <th id={style.center}>Alınan Puan</th>  
                             <th id={style.center}>Max Puan</th>
                             <th id={style.center}>Toplam Soru Sayısı</th>  
                        </tr>
                    </thead>
                    <tbody >
                    {
                        results.map((data , i) => {
                                if( data.user_email === sessionStorage.getItem("user"))
                                    return(
                                          <tr key={i}>
                                              <td>{data.user_email}</td>
                                              <td>{data.exam_name}</td>
                                              <td>{data.exam_date}</td>
                                              <td>{data.result_status}</td>
                                              <td>{data.result_score}</td>
                                              <td>{data.total_marks}</td>
                                              <td>{data.total_Question}</td>
                                          </tr>
                                    );
                                    return <React.Fragment key={i}></React.Fragment>
                                })
                            }
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Result;