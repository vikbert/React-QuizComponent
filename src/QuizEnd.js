import React, { Component } from "react";

class QuizEnd extends Component {
  render() {
    return (
      <div className='quiz-end'>
        <p>Thanks for playing!</p>
        <a href="http://localhost:3000/">Reset Quiz</a>
      </div>
    );
  }
}

export default QuizEnd;
