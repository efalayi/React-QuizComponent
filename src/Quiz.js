import React, { Component } from 'react'

const { quiz_questions: quizQuestions } = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizPosition: 1
    }

  }
  render() {
    return (
      <div>
        <div className="QuizQuestion">
          <div className="quiz--question__instruction">
            <h5>{quizQuestions[this.state.quizPosition].instruction_text}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz
