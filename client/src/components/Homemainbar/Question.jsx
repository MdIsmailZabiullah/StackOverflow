// import React from 'react'
// import {Link} from 'react-router-dom'
// import moment from 'moment'

// const Question = ({question}) => {
//   return (
//     <div className='display-question-container'>
//         <div className='display-vote-ans'>
//             <p>{question.upVotes - question.downVotes}</p>
//             <p>votes</p>
//         </div>
//         <div className='display-vote-ans'>
//             <p>{question.noOfAnswers}</p>
//             <p>Answer</p>
//         </div>
//         <div className='display-question'>
//           <Link to={`/Questions/${question._id}`} className='question-link'>{question.questionTitle}</Link>
//           <div className='display-tags-time'>
//             <div className='display-tags'>
//               {
//                 question.questionTags.map((tag)=>(
//                   <p key={tag}>{tag}</p>
//                 ))
//               }
//             </div>
//             <p className='display-time' >Asked  {moment(question.askedOn).fromNow()} by {question.userPosted}</p>
//           </div>
//         </div>      
//     </div>
//   )
// }

// export default Question
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Question = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="display-vote-ans">
        <p>{question.upVote.length -question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-vote-ans">
        <p>{question.noOfAnswers}</p>
        <p>Answer</p>
      </div>
      <div className="display-question">
        <Link to={`/Questions/${question._id}`} className="question-link">
          {question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">
            Asked {moment(question.askedOn).fromNow()} by {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
