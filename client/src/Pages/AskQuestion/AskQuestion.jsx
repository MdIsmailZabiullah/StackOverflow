import React from 'react'
import './AskQuestion.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {askQuestion} from '../../actions/question'




const AskQuestion = () => {
const [questionTitle, setQuestionTitle]= useState('')
const [questionBody, setQuestionBody]= useState('')
const [questionTags, setQuestionTags]= useState('')

const dispatch= useDispatch()
const user= useSelector((state) => (state.currentUserreducer))
const navigate = useNavigate()

const handleSubmit= (e) =>{
  e.preventDefault()
  // console.log({questionTitle, questionBody, questionTags})
  dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: user.result.name }, navigate))
}

  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask as a public question</h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-ques-form">
                    <label htmlFor="ques-title">
                                <h4>Title</h4>
                                <p>Enter the title</p>
                                <input type="text" id='ques-title' placeholder='for e.g- What is array?' onChange={(e) =>{setQuestionTitle(e.target.value)}} />
                        </label>
                        <label htmlFor="ques-body">
                                <h4>Body</h4>
                                <p>Enter the title</p>
                                <textarea name="" id="ques-body" onChange={(e) =>{setQuestionBody(e.target.value)}} cols="30" rows="10" ></textarea>
                        </label>
                        <label htmlFor="ques-tags">
                                <h4>Tags</h4>
                                <p>Enter the title</p>
                                <input type="text" id='ques-tags' placeholder='for e.g-  C, C++' onChange={(e) =>{setQuestionTags(e.target.value.split(" "))}} />
                        </label>
                </div>
            </form>
            <input type="submit"  value='Review your Question' className='review-btn'/>
        </div>
    </div>
  )
}
export default AskQuestion
