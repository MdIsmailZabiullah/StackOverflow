import React, {useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './QuestionDetails.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {postAnswer} from '../../actions/question'


const QuestionDetails = () => {
  
    const {id}= useParams()
    const questionList= useSelector(state => state.questionsReducer)
    
        
    // var questionList=[
    //     {
    //       _id:'1',
    //       upVotes: 3,
    //       downVotes: 2,
    //       noOfAnswer: 1,
    //       questionTitle: "What is a function ?",
    //       questionBody: "It mean to be",
    //       questionTags:['c','java'],
    //       userPosted: "Isu",
    //       askedOn:"1 jun",
    //       userId: 1,
    //       answer:[
    //         {
    //           answerBody:"answer",
    //           userAnswered:"Khalid",
    //           answeredOn:"1 jun",
    //           userId: 2
    //         }
    //       ]
    //     },
    //     {
    //       _id:'2',
    //       upVotes: 3,
    //       downVotes: 2,
    //       noOfAnswer: 1,
    //       questionTitle: "What is an array ?",
    //       questionBody: "It mean to be",
    //       questionTags:['c','java'],
    //       userPosted: "Khalid",
    //       askedOn:"1 jun",
    //       userId: 2,
    //       answer:[
    //         {
    //           answerBody:"answer",
    //           userAnswered:"Isu",
    //           answeredOn:"1 jun",
    //           userId: 1
    //         }
    //       ]
    //     },{
    //       _id:'3',
    //       upVotes: 3,
    //       downVotes: 2,
    //       noOfAnswer: 1,
    //       questionTitle: "What is main() methode ?",
    //       questionBody: "It mean to be",
    //       questionTags:['c','java'],
    //       userPosted: "Kyara",
    //       askedOn:"1 jun",
    //       userId: 3,
    //       answer:[
    //         {
    //           answerBody:"answer",
    //           userAnswered:"khalid",
    //           answeredOn:"1 jun",
    //           userId: 2
    //         }
    //       ]
    //     }
    //   ]
    const [answer,setAnswer]= useState('')
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const handlepstanswer = (e, answerLength) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup for answer a question')
            navigate('/Auth')
        }else{
            if(answer === ''){
              alert('Enter an answer before submitting')
            }else{
              console.log({answer})
              dispatch(postAnswer({id,noOfAnswer: answerLength + 1 ,answerBody: answer,userAnswered: User.result.name}) )
            }
        }
    }
  return (
    <div className='question-details-page'>
      {
        questionList.data === null ?
        <h1>Loading...</h1>:
        <>
            {
                questionList.data.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                          <h1>{question.questionTitle}</h1>
                          <div className='question-details-container-2'>
                              <div className="question-votes">
                                  <img src={upvote} alt="Up" width='20px' className='votes-icon'/>
                                  <p>{question.upVotes -question.downVotes || 0}</p>
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
                              <h3>{question.noOfAnswer} Answers</h3>
                              <DisplayAnswer key={question._id} question={question}/>
                            </section>
                          )
                        }
                        <section className='post-ans-container'>
                          <h3>Your answer</h3>
                          <form onSubmit={(e) => { handlepstanswer(e, question.answer.length) }}>
                            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea><br />
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
