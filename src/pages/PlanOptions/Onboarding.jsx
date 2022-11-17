import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import SubmitButton from "../../components/SubmitButton";
import "../../assets/css/answerbutton.css";
import "./onboarding.css";
import GenerateLoading from "../../components/GenerateLoading";
import { useNavigate } from "react-router";

const questions = [
  "How long is your current plan?",
  "How many blocks will you need?",
  "What days will you be training?",
];
const answers = [
  ["4 weeks", "8 weeks", "12 weeks"],
  ["1 block", "2 blocks", "3 blocks"],
  ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
];

function Onboarding() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersIndex, setAnswersIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setAnswersIndex(answersIndex + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/template");
      }, 3000);
    }
  };

  const handleBack = () => {
    setQuestionIndex(questionIndex - 1);
    setAnswersIndex(answersIndex - 1);
  };

  const handleAnswer = (selection) => {
    if (selectedAnswers.includes(selection)) {
      setSelectedAnswers(
        selectedAnswers.filter((answer) => answer !== selection)
      );
    } else {
      setSelectedAnswers([...selectedAnswers, selection]);
    }
  };

  if (loading) {
    return <GenerateLoading />;
  } else {
    return (
      <div>
        <h1>{questions[questionIndex]}</h1>
        <div className="onboarding-answers">
          {answers[answersIndex].map((answer, index) => (
            <button
              className={
                selectedAnswers.includes(answer)
                  ? "answer-button-selected"
                  : "answer-button"
              }
              onClick={() => handleAnswer(answer)}
              key={index}
            >
              {answer}
            </button>
          ))}
        </div>
        <div className="onboarding-pagination">
          {answersIndex !== 0 && <BackButton handleBack={handleBack} />}
          <SubmitButton handleNext={handleNext} />
        </div>
      </div>
    );
  }
}

export default Onboarding;
