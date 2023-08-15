function Options({ questions, dispatch, answer }) {
  const hasAnswer = answer !== null; //there is an answer then disable button

  return (
    <div>
      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswer
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
            key={option}
            disabled={hasAnswer} //there is an answer then disable button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
