import { useState, useEffect } from "react"

function Questions() {

    useEffect(() => {
        callApi()
    }, [])

    const [questions, setQuestions] = useState([])

    const callApi = () => {
        fetch("https://opentdb.com/api.php?amount=30&category=19").then(response => response.json()).then(data => {
            showQuestion(data)
        }).catch(error => {
            console.error("ERRO!", error);
        })
    }

    const showQuestions = (dados) => {
        const questionData = dados.map((questao) => ({
            questao: questao.question,
            dificuldade: questao.dificulty
        }))};
        setQuestions(questionsData);

}