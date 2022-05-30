import style from "./Subject.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Subject() {

    const [display, setDisplay] = useState({
        display: "none"
    });

    function handleAddSubject() {
        setDisplay({ display: "block" });
    }

    function handleCloseAdd() {
        setDisplay({ display: "none" });
    }

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {

        async function getAllSubject() {
            let value = await axios.get("http://localhost:3333/subject");
            setSubjects(value.data);
        }
        getAllSubject();
    }, []);

    const [subject, setSubject] = useState({
        subject_name: "",
    });

    function handleInput(e) {
        setSubject({
            subject_name: e.target.value
        });
    }

    async function handleAddNewSubject() {
        await axios.post("http://localhost:3333/subject", subject);
        setStatus(true);
    }

    const [status, setStatus] = useState();

    async function deleteSubject(id) {
        await axios.delete(`http://localhost:3333/subject/${id}`);
        setStatusDelete(true);
    }

    const [statusDelete, setStatusDelete] = useState();


    if (statusDelete) return <Subject />;

    if (status) return <Subject />;

    if (subjects.length === 0) return (
        <>
            <div id={style.content}>

                <div id={style.displayHeadingBox}>
                    <h2>Konu Yok</h2>
                </div>

                <div id={style.addSubjectBox}>
                    <button onClick={handleAddSubject}>Ders Ekle</button>
                </div>

                <div id={style.addBox} style={display} >
                    <label htmlFor="">Ders Adı Girin </label>
                    <input onChange={(e) => handleInput(e)} type="text" placeholder="Ders Adı Girin" />

                    <div id={style.buttonBox}>
                        <button onClick={handleAddNewSubject}  >Ekle</button>
                        <button onClick={handleCloseAdd} >Kapat</button>
                    </div>
                </div>

            </div>
        </>
    );

    return (
        <>

            <div id={style.content}>

                <div id={style.displayHeadingBox}>
                    <h2>Ders Listesi</h2>
                </div>

                <div id={style.tableBox}>
                    <table >
                        <thead>
                            <tr>
                                <th id={style.center}>Ders Adı</th>
                                <th id={style.center}>Seçenekler</th>
                            </tr>
                        </thead>
                        <tbody id={style.tbody}>
                            {
                                subjects.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{data.subject_name}</td>
                                            <td><button onClick={() => deleteSubject(data.id)}>Sil</button></td>
                                        </tr>
                                    );

                                })
                            }

                        </tbody>
                    </table>
                </div>

                <div id={style.addSubjectBox}>
                    <button onClick={handleAddSubject}>Ders Ekle</button>
                </div>

                <div id={style.addBox} style={display} >
                    <label htmlFor="">Ders Ekle</label>
                    <input onChange={(e) => handleInput(e)} type="text" placeholder="Ders Ekle" />

                    <div id={style.buttonBox}>
                        <button onClick={handleAddNewSubject}  >Ekle</button>
                        <button onClick={handleCloseAdd} >Kapat</button>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Subject;