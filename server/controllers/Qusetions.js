import mongoose from "mongoose"
import Question from '../models/Questions.js'

export const AskQuestion= async (req, res) => {
    const postQuestionData= req.body;
    const postQuestion= new Question(postQuestionData);
    try{
        await postQuestion.save();
        res.status(200).json("posted a question successfully")
    }catch(error){
        console.log(error)
        res.status(200).json("coudn't post a new question ")
    }
}
export const getAllquestions= async (req, res) => {
    try {
        const questionList= await Question.find();
        res.status(200).json(questionList)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}