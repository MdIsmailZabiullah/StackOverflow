import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer } from "../../actions/question";
import Avatar from "../../components/Avatar/Avatar";
import moment from "moment";
import "./QuestionDetails.css";

const DisplayAnser = ({ question, handleShare }) => {
  const { id } = useParams();

  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();

  const handleDelete = (answerId, noOfAnswers) => { 
        console.log('successfully deleted')
        dispatch(deleteAnswer(id, answerId, noOfAnswers));
        
  };

  // console.log(question)
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-action-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(ans._id, question.noOfAnswers-1);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>Answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/user/${ans.userId}`}
                className="user-link"
                style={{ color: "black" }}
              >
                <Avatar backgroundColor="green" px="5px" py="12px">
                  {ans.userAnswered.charAt(0).toLocaleUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnser;
