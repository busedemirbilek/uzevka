import style from "../SubjectComponent/Subject.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Question() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        async function getAllQuestions() {
            const value = await axios.get("http://localhost:3333/question");
            setQuestions(value.data);
        }
        getAllQuestions();
    }, [])

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Soru Listesi</h2>
            </div>

            <div id={style.tableBox}>
                <table>
                    <thead>
                        <tr>
                            <th id={style.center}>Soru Adı</th>
                            <th id={style.center}>A</th>
                            <th id={style.center}>B</th>
                            <th id={style.center}>C</th>
                            <th id={style.center}>D</th>
                            <th id={style.center}>Sorunun Cevabı</th>
                            <th id={style.center}>Ders Adı</th>
                        </tr>
                    </thead>
                    <tbody id={style.tbody}>
                        {
                            questions.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.question_name}</td>
                                        <td>{data.option_one}</td>
                                        <td>{data.option_two}</td>
                                        <td>{data.option_three}</td>
                                        <td>{data.option_four}</td>
                                        <td>{data.question_answer}</td>
                                        <td>{data.subject_name}</td>
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

export default Question;