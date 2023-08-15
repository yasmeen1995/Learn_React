import Options from "./Options";

function Questions({ questions, dispatch, answer }) {
  console.log(questions.options);
  return (
    <div>
      <h4>{questions.question}</h4>

      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
