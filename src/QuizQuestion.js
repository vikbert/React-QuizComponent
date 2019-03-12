import React, {Component} from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {incorrectAnswer: false};
  }

  handleClick(buttonText) {
    let isCorrectAnswer = buttonText === this.props.quiz_question.answer;
    if (isCorrectAnswer) {
      this.props.showNextQuestionHandler();
      this.setState({incorrectAnswer: false});
    } else {
      this.setState({incorrectAnswer: true});
    }
  }

  render() {
    return (
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="button">
            <ul>
              {this.props.quiz_question.answer_options.map((answerOption, index) => {
                return <QuizQuestionButton key={index}
                                           button_text={answerOption}
                                           clickHandler={this.handleClick.bind(this)}/>;
              })}
            </ul>
          </section>
          {this.state.incorrectAnswer ? <p className="error">Sorry, that's not correct answer.</p> : null}
        </main>
    );
  }
}

export default QuizQuestion;
