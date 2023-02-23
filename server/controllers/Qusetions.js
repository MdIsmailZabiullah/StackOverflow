import mongoose from "mongoose"
import Questions from '../models/Questions.js'

export const AskQuestion= async (req, res) => {
    const postQuestionData= req.boby;
    const postQuestion= new Questions({...postQuestionData, userId: req.userId});
    try{
        await postQuestion.save();
        res.status(200).json("posted a question successfully")
    }catch(error){
        console.log(error)
        res.status(200).json("coudn't post a new question ")
    }
}