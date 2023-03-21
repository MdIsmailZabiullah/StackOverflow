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

export const deleteQuestion = async (req,res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable')
    }
    try {
        await Question.findByIdAndRemove(_id);
        res.status(200).json({message: "succesfully deleted"})
    } catch (error) 
        {
        res.status(404).json({message: error.message})
     }
}