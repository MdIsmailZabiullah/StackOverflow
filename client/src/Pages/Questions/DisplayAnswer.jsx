import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import {useSelector,useDispatch} from 'react-redux'

import Avatar from '../../components/Avatar/Avatar'
import './QuestionDetails.css'
import {deleteAnswer} from '../../actions/question'

const DisplayAnser = ({question, handleShare}) => {
  
 const User = useSelector((state) => (state.currentUserReducer))
 const {id} = useParams()
 const dispatch= useDispatch()
 const handleDelete = (answerId,noOfAnswer)=> {
  dispatch(deleteAnswer(id,answerId,noOfAnswer))
}

  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className='display-ans' key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-action-user">
              <div>
                <button type='button' onClick={handleShare}>Share</button>
                {
                  User?.result?._id === ans?.userId &&(
                    <button type='button' onClick={handleDelete}>Delete</button>
                  )
                }
                
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
