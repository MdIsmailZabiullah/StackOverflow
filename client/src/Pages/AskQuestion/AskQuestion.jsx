import React from 'react'
import './AskQuestion.css'


const AskQuestion = () => {
  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask as a public question</h1>
            <form>
                <div className="ask-ques-form">
                    <label htmlFor="ques-title">
                                <h4>Title</h4>
                                <p>Enter the title</p>
                                <input type="text" id='ques-title' placeholder='for e.g- What is array?' />
                        </label>
                        <label htmlFor="ques-body">
                                <h4>Body</h4>
                                <p>Enter the title</p>
                                <textarea name="" id="ques-body" cols="30" rows="10"></textarea>
                        </label>
                        <label htmlFor="ques-tags">
                                <h4>Tags</h4>
                                <p>Enter the title</p>
                                <input type="text" id='ques-tags' placeholder='for e.g-  C, C++' />
                        </label>
                </div>
            </form>
            <input type="submit"  value='Review your Question' className='review-btn'/>
        </div>
    </div>
  )
}

export default AskQuestion
