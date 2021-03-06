import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import style from "../SubjectComponent/Subject.module.css";

function Exam() {

    const [display, setDisplay] = useState({
        display: "none"
    });

    function handleAddExam() {
        setDisplay({ display: "block" });
    }

    function handleCloseExam() {
        setDisplay({ display: "none" });
    }

    const [exams, setExams] = useState([]);

    useEffect(() => {

        async function getAllExam() {
            let value = await axios.get("http://localhost:3333/Exam");
            setExams(value.data);
            //  console.log(exams);
        }
        getAllExam();
    }, []);

    var date = new Date();
    var d = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const [exam, setExam] = useState({
        exam_name: "",
        exam_desc: "",
        exam_level: "",
        exam_passMarks: "",
        exam_totalQuestion: "",
        exam_marks: "",
        exam_date: d + " " + t
    });

    function handleInput(e) {
        setExam({
            ...exam,
            [e.target.name]: e.target.value
        });
    }

    async function handleAddNewExam() {
        await axios.post("http://localhost:3333/Exam", exam);
        setStatus(true);
    }

    const [status, setStatus] = useState();

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function getAllQuestions() {
            let value = await axios.get("http://localhost:3333/question");
            setQuestions(value.data);
        }
        getAllQuestions();
    }, [])


    const [statusDeleteExam, setStatusDeleteExam] = useState();

    async function deleteExam(id) {

        for (let i = 0; i < questions.length; i++) {
            if (parseInt(questions[i].exam_id) === parseInt(id)) {

                await axios.delete(`http://localhost:3333/question/${questions[i].id}`);
            }
        }
        await axios.delete(`http://localhost:3333/exam/${id}`);
        setStatusDeleteExam(true);
    }

    if (status) return <Exam />

    if (statusDeleteExam) return <Exam />

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>S??nav Listesi</h2>
            </div>

            <div id={style.tableBox}>
                <table >
                    <thead >
                        <tr>
                            <th id={style.center}>S??nav Ad??</th>
                            <th id={style.center}>S??nav A????klamas??</th>
                            <th id={style.center}>S??nav Olu??turma Tarihi</th>
                            <th id={style.center}>S??nav D??zeyi</th>
                            <th id={style.center}>Se??enekler</th>
                        </tr>
                    </thead>
                    <tbody id={style.tbody}>
                        {
                            exams.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.exam_name}</td>
                                        <td>{data.exam_desc}</td>
                                        <td>{data.exam_date}</td>
                                        <td>{data.exam_level}</td>
                                        <td>
                                            <NavLink exact to={`/AdminDashboard/Exam/Details/${data.id}`}>
                                                <button>Detaylar</button>
                                            </NavLink>

                                            <NavLink exact to={`/AdminDashboard/Exam/ViewQuestion/${data.id}`}>
                                                <button>Soruyu G??r??nt??le</button>
                                            </NavLink>

                                            <NavLink exact to={`/AdminDashboard/Exam/AddQuestion/${data.id}`}>
                                                <button>Soru Ekle</button>
                                            </NavLink>

                                            <button onClick={() => deleteExam(data.id)}>Sil</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>

            <div id={style.addSubjectBox}>
                <button onClick={handleAddExam}>S??nav Ekle</button>
            </div>

            <div id={style.addBox} style={display}>
                <label htmlFor="">Ders Ad??n?? Girin</label>
                <input onChange={(e) => handleInput(e)} name="exam_name" type="text"
                    placeholder="Konu Ad??n?? Girin" />

                <label htmlFor="">S??nav a????klamas??n?? girin</label>
                <input onChange={(e) => handleInput(e)} name="exam_desc" type="text"
                    placeholder="S??nav a????klamas??n?? girin" />

                <label htmlFor="">S??nav d??zeyini girin </label>
                <input onChange={(e) => handleInput(e)} name="exam_level" type="text" placeholder="S??nav d??zeyini girin " />

                <label htmlFor="">Toplam soru say??s??n?? giriniz </label>
                <input onChange={(e) => handleInput(e)} name="exam_totalQuestion"
                    type="text" placeholder="Toplam soru say??s??n?? giriniz" />

                <label htmlFor="">Toplam Puan?? Giriniz </label>
                <input onChange={(e) => handleInput(e)} name="exam_marks"
                    type="text" placeholder="Toplam Puan?? Giriniz" />

                <label htmlFor="">Ge??me notunu giriniz</label>
                <input onChange={(e) => handleInput(e)} name="exam_passMarks"
                    type="text" placeholder="Ge??me notunu giriniz" />

                <div id={style.buttonBox}>
                    <button onClick={handleAddNewExam} >Ekle</button>
                    <button onClick={handleCloseExam}  >Kapat</button>
                </div>
            </div>
        </>
    );
}

export default Exam;