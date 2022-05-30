import style from "../../SubjectComponent/Subject.module.css";
import {useState} from "react";
import {useHistory , useParams} from "react-router-dom";
import axios from "axios";

      
      function AddQuestion(){

        const {id} = useParams();

         const [question , setQuestion] = useState({
            question_name: "",
            option_one: "",
            option_two: "",
            option_three: "",
            option_four: "",
            question_answer: "",
            exam_id: id,
            subject_name:""
         });

          function onInputChange(e){
                   setQuestion({
                       ...question ,
                       [e.target.name] : e.target.value
                   });
          }
            let history = useHistory();
            function handleGoBack(){
                history.push(`/AdminDashboard/Exam`);
            }

            async function addnewQuestion(){
                await axios.post("http://localhost:3333/question" , question);
                history.push(`/AdminDashboard/Exam/ViewQuestion/${id}`);
            }
          return (
              <>
                <div id={style.displayHeadingBox}> 
                            <h2>Soru Ekle</h2>     
                         </div>
                     <div id={style.addBox} className={style.addQuestion}>   
                         <label >Soru Adı </label>
                         <input onChange={(e) => onInputChange(e)} 
                         name="question_name"
                          type="text" placeholder="Soru Adı" /> 

                        <label >A seçeneğini giriniz </label>
                        <input onChange={(e) => onInputChange(e)} 
                         name="option_one"
                         type="text" placeholder="A seçeneğini giriniz" /> 

                        <label >B seçeneğini giriniz</label>
                        <input onChange={(e) => onInputChange(e)} 
                        name="option_two"
                           type="text" placeholder="B seçeneğini giriniz" /> 

                        <label >C seçeneğini giriniz</label>
                        <input onChange={(e) => onInputChange(e)} 
                        name="option_three"
                          type="text" placeholder="C seçeneğini giriniz" /> 

                        <label >D seçeneğini giriniz</label>
                        <input onChange={(e) => onInputChange(e)}  
                        name="option_four"
                         type="text" placeholder="D seçeneğini giriniz" /> 

                        <label >Sorunun cevabını giriniz</label>
                        <input  onChange={(e) => onInputChange(e)}
                        name="question_answer"
                          type="text" placeholder="Sorunun cevabını giriniz (Seçenekleri yazma (A,B,C,D))" /> 

                          
                        <label >Dersi giriniz</label>
                        <input  onChange={(e) => onInputChange(e)}
                        name="subject_name"
                          type="text" placeholder="Dersi giriniz" /> 

                       <div id={style.buttonBox}>
                         <button onClick={addnewQuestion} >Ekle</button>
                         <button onClick={handleGoBack}>Geri Dön</button>
                       </div>

                   </div>
              </>
          );
      }

      export default AddQuestion;