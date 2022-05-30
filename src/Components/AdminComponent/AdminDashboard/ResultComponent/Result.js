import axios from "axios";
import {useEffect , useState} from "react";
import style from "../SubjectComponent/Subject.module.css"
   
    function Result(){

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
                   <h2>Sınav Listesi</h2>     
                </div>

                <div id={style.tableBox}>
                    <table>
                       <thead>
                           <tr>
                             <th id="center">Kullanıcı Email</th>
                             <th id="center">Sınav Adı</th>
                             <th id="center">Sınav Tarihi</th>
                             <th id="center">Geçme Durumu</th>
                             <th id="center">Puanınız</th>  
                             <th id="center">Sınav Max Puan</th>
                             <th id="center">Toplam Soru Sayısı</th>  
                          </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((data , i) => {
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
                                })
                            }
                               
                        </tbody>
                     </table>
                </div>
            </>
        );
    }

    export default Result;