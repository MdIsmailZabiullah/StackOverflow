import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import './Homemainbar.css'
import QuestionList from './QuestionList'

import {useSelector} from 'react-redux'



const Homemainbar = () => {

  const user = 1
  const navigate = useNavigate()

  const CheckAuth = () => {
    if(user === null){
      alert('Please Login!')
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  const questionList= useSelector(state => state.questionsReducer)

  // console.log(questionList)
 

  // var questionList=[
  //   {
  //     _id:'1',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswer: 1,
  //     questionTitle: "What is a function ?",
  //     questionBody: "It mean to be",
  //     questionTags:['c','java'],
  //     userPosted: "Isu",
  //     askedOn:"1 jun",
  //     userId: 1,
  //     answer:[
  //       {
  //         answerBody:"answer",
  //         userAnswered:"Kyara",
  //         answeredOn:"1 jun",
  //         userId: 3
  //       }
  //     ]
  //   },
  //   {
  //     _id:'2',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswer: 1,
  //     questionTitle: "What is an array ?",
  //     questionBody: "It mean to be",
  //     questionTags:['c','java'],
  //     userPosted: "Khalid",
  //     askedOn:"1 jun",
  //     userId: 2,
  //     answer:[
  //       {
  //         answerBody:"answer",
  //         userAnswered:"Isu",
  //         answeredOn:"1 jun",
  //         userId: 1
  //       }
  //     ]
  //   },{
  //     _id:'3',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswer: 1,
  //     questionTitle: "What is main() methode ?",
  //     questionBody: "It mean to be",
  //     questionTags:['c','java'],
  //     userPosted: "Kyara",
  //     askedOn:"1 jun",
  //     userId: 3,
  //     answer:[
  //       {
  //         answerBody:"answer",
  //         userAnswered:"khalid",
  //         answeredOn:"1 jun",
  //         userId: 2
  //       }
  //     ]
  //   }
  // ]

  const location= useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button  className='ask-btn' onClick={CheckAuth}>Ask Question</button>
      </div>
      <div>
        {
          questionList.data===null ?
          <p>Loading...</p> :
          <>
            <p>{questionList.data.length} question</p>
            <QuestionList questionList={questionList.data}/>
          </>
        }
      </div>
      
    </div>
  )
}

export default Homemainbar
