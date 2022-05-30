import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../SubjectComponent/Subject.module.css";

function ViewQuestion() {

    const [display, setDisplay] = useState({
        display: "none"
    });

    function handleEditQuestion(questionId) {
        setDisplay({ display: "block" });
        setDataInInputField(questionId);
    }

    function handleClose() {
        setDisplay({ display: "none" });
    }

    const { id } = useParams();

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function getAllQuestions() {
            let value = await axios.get("http://localhost:3333/question");
            setQuestions(value.data);
        }
        getAllQuestions();
    }, [])
    const [updatedQ, setUpdatedQ] = useState({
        question_name: "",
        option_one: "",
        option_two: "",
        option_three: "",
        option_four: "",
        question_answer: "",
        exam_id: id,
        subject_name: ""
    });


    function onTextFieldChange(e) {
        setUpdatedQ({
            ...updatedQ,
            [e.target.name]: e.target.value
        })
    }
    const [qId, setQId] = useState();


    function setDataInInputField(questionId) {
        setQId(questionId);

        for (let i = 0; i < questions.length; i++) {
            if (parseInt(questions[i].id) === parseInt(questionId)) {
                setUpdatedQ(questions[i]);
            }
        }
    }
    const [check, setCheck] = useState();


    async function updateQuestion() {
        await axios.put(`http://localhost:3333/question/${qId}`, updatedQ);
        setCheck(true);
    }
    let history = useHistory();

    function handleGoBack() {
        history.push("/AdminDashboard/Exam");
    }
    const [d, setD] = useState();

    async function deleteQuestion(id) {
        await axios.delete(`http://localhost:3333/question/${id}`);
        setD(true);
    }


    if (check) return <ViewQuestion />;

    if (d) return <ViewQuestion />;
    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Soru Listesi</h2>
            </div>

            <div id={style.tableBox}>
                <table>
                    <thead >
                        <tr>
                            <th id={style.center}>Soru Adı</th>
                            <th id={style.center}>A şıkkı</th>
                            <th id={style.center}>B şıkkı</th>
                            <th id={style.center}>C şıkkı</th>
                            <th id={style.center}>D şıkkı</th>
                            <th id={style.center}>Doğru Cevap</th>
                            <th id={style.center}>Seçenekler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((data, i) => {
                                if (parseInt(data.exam_id) === parseInt(id)) {
                                    return (
                                        <tr key={i}>
                                            <td>{data.question_name}</td>
                                            <td>{data.option_one}</td>
                                            <td>{data.option_two}</td>
                                            <td>{data.option_three}</td>
                                            <td>{data.option_four}</td>
                                            <td>{data.question_answer}</td>
                                            <td>
                                                <button onClick={() => handleEditQuestion(data.id)}>Düzenle</button>
                                                <button onClick={() => deleteQuestion(data.id)}>Sil</button>
                                            </td>
                                        </tr>
                                    );
                                }
                                return <React.Fragment key={i}></React.Fragment>
                            })
                        }

                    </tbody>
                </table>
            </div>

            <div id={style.addSubjectBox}>
                <button onClick={handleGoBack}>Geri Dön</button>
            </div>


            <div id={style.addBox} style={display}>

                <label>Soru Giriniz </label>
                <input value={updatedQ.question_name}
                    onChange={(e) => onTextFieldChange(e)}
                    name="question_name"
                    type="text" placeholder="Soru giriniz " />

                <label >A seçeneğini giriniz </label>
                <input value={updatedQ.option_one}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_one"
                    type="text" placeholder="A seçeneğini giriniz" />

                <label >B seçeneğini giriniz</label>
                <input value={updatedQ.option_two}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_two"
                    type="text" placeholder="B seçeneğini giriniz" />

                <label >C seçeneğini giriniz</label>
                <input value={updatedQ.option_three}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_three"
                    type="text" placeholder="C seçeneğini giriniz" />

                <label >D seçeneğini giriniz </label>
                <input value={updatedQ.option_four}
                    onChange={(e) => onTextFieldChange(e)}
                    name="option_four"
                    type="text" placeholder="D seçeneğini giriniz" />

                <label >Sorunun cevabını giriniz</label>
                <input value={updatedQ.question_answer}
                    onChange={(e) => onTextFieldChange(e)}
                    name="question_answer"
                    type="text" placeholder="Sorunun cevabını giriniz" />

                <label >Ders Girin </label>
                <input value={updatedQ.subject_name}
                    onChange={(e) => onTextFieldChange(e)}
                    name="subject_name"
                    type="text" placeholder="Ders Girin" />

                <div id={style.buttonBox}>
                    <button onClick={updateQuestion} >Soruyu Güncelle</button>
                    <button onClick={handleClose} >Kapat</button>
                </div>
            </div>
        </>
    );
}
export default ViewQuestion;