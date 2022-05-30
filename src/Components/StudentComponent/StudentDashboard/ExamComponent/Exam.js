import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import style from "../StudentDashboard.module.css";

function Exam() {

    let { category } = useParams();
    const [allExam, setAllExam] = useState([]);

    useEffect(() => {
        async function getAllExams() {
            let value = await axios.get("http://localhost:3333/exam");
            setAllExam(value.data);
        }
        getAllExams();
    }, [])
    return (
        <>
            <div id={style.displayBoxHeadingBox}>
                <h1>Tüm {category} Sınavları </h1>
            </div>
            {
                allExam.map((data, i) => {
                    if (data.exam_name === category)
                        return (
                            <div id={style.displayBoxExamBox} key={i}>
                                <div id={style.div1}> <span>{data.exam_name}</span> </div>
                                <div id={style.div2}> <span>Sınav ID: {data.id}</span> </div>
                                <div id={style.div2}> <span>Sınav Açıklaması: {data.exam_desc}</span> </div>
                                <div id={style.div3}><span>Geçme Notu:{data.exam_passMarks}</span> </div>
                                <div id={style.div4}><span>Max Puan:{data.exam_marks}</span></div>
                                <div id={style.div5}>
                                    <NavLink exact to={`/StudentDashboard/Exam/../${data.id}`}>
                                        <button>Sınavı Başlat</button>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    return <React.Fragment key={i}></React.Fragment>
                })
            }
        </>
    );
}
export default Exam;