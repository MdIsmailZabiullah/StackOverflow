import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Avatar from '../../components/Avatar/Avatar'
import './QuestionDetails.css'

const DisplayAnser = ({question, handleShare}) => {
  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className='display-ans' key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-action-user">
              <div>
                <button type='button' onClick={handleShare}>Share</button>
                <button type='button'>Delete</button>
              </div>
              <div>
                <p>Answered  {moment(ans.answeredOn).fromNow()}</p>
                <Link to={`/user/${ans.userId}`} className='user-link' style={{color:'black'}}>
                  <Avatar backgroundColor='green' px='5px' py='12px' >{ans.userAnswered.charAt(0).toLocaleUpperCase()}</Avatar>
                  <div>
                    {ans.userAnswered}
                  </div>
                </Link>
              </div>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default DisplayAnser
