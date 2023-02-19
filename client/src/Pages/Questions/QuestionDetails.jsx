import React from 'react'
import { useParams,Link } from 'react-router-dom'

import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './QuestionDetails.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionDetails = () => {
    const {id}= useParams()
    
    var questionList=[
        {
          _id:'1',
          upVotes: 3,
          downVotes: 2,
          noOfAnswer: 1,
          questionTitle: "What is a function ?",
          questionBody: "It mean to be",
          questionTags:['c','java'],
          userPosted: "Isu",
          askedOn:"1 jun",
          userId: 1,
          answer:[
            {
              answerBody:"answer",
              userAnswered:"Khalid",
              answeredOn:"1 jun",
              userId: 2
            }
          ]
        },
        {
          _id:'2',
          upVotes: 3,
          downVotes: 2,
          noOfAnswer: 1,
          questionTitle: "What is an array ?",
          questionBody: "It mean to be",
          questionTags:['c','java'],
          userPosted: "Khalid",
          askedOn:"1 jun",
          userId: 2,
          answer:[
            {
              answerBody:"answer",
              userAnswered:"Isu",
              answeredOn:"1 jun",
              userId: 1
            }
          ]
        },{
          _id:'3',
          upVotes: 3,
          downVotes: 2,
          noOfAnswer: 1,
          questionTitle: "What is main() methode ?",
          questionBody: "It mean to be",
          questionTags:['c','java'],
          userPosted: "Kyara",
          askedOn:"1 jun",
          userId: 3,
          answer:[
            {
              answerBody:"answer",
              userAnswered:"khalid",
              answeredOn:"1 jun",
              userId: 2
            }
          ]
        }
      ]
  return (
    <div className='question-details-page'>
      {
        questionList === null ?
        <h1>Loading...</h1>:
        <>
            {
                questionList.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                          <h1>{question.questionTitle}</h1>
                          <div className='question-details-container-2'>
                              <div className="question-votes">
                                  <img src={upvote} alt="Up" width='20px' className='votes-icon'/>
                                  <p>{question.upVotes -question.downVotes}</p>
                                  <img src={downvote} alt="Dwon"  width='20px' className='votes-icon'/>
                              </div>
                              <div>
                                  <div className='rightOf-votes'>
                                    <p className="question-body">{question.questionBody}</p>
                                    <div className="question-details-tags">
                                      {
                                        question.questionTags.map((tag) => (
                                          <p key={tag}>{tag}</p>
                                        ))
                                      }
                                    </div>
                                    <div className="question-action-user">
                                      <div>
                                        <button type='button'>share</button>
                                        <button type='button'>Delete</button>
                                      </div>
                                      <div>
                                        <p>Asked on {question.askedOn}</p>
                                        <Link to={`/user/${question.userId}`} className='user-link' style={{color:'black'}}>
                                          <Avatar backgroundColor='orange' px='5px' py='12px' margin='0%' >{question.userPosted.charAt(0).toLocaleUpperCase()}</Avatar>
                                          <div>
                                            {question.userPosted}
                                          </div>
                                        </Link>
                                      </div>
                                    </div>                                    
                                  </div>
                              </div>
                          </div>
                        </section>
                        {
                          question.noOfAnswer !== 0 && (
                            <section>
                              <h3>{question.noOfAnswer} answers</h3>
                              <DisplayAnswer key={question._id} question={question}/>
                            </section>
                          )
                        }
                        <section className='post-ans-container'>
                          <h3>Your answer</h3>
                          <form>
                            <textarea name="" id="" cols="30" rows="10"></textarea><br />
                            <input type="submit" className='post-ans-btn' value='Post your answer' />
                          </form>
                          <p >Browse other question from this tag 
                            {
                              question.questionTags.map((tag) => (
                                <Link to='/tags'className='ques-ans-tags'key={tag}> {tag} </Link>
                              ))
                            }
                            Or <Link to='/AskQuestion' style={{textDecoration:'none', color:'#009dff'}}>ask your own question</Link>.
                          </p>
                        </section>
                    </div>
                ))
            }
        </>
      }
    </div>
  )
}

export default QuestionDetails
