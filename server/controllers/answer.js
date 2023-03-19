import mongoose from "mongoose"
import Question from '../models/Questions.js'

export const postAnsers= async (req, res) => {
        const {id: _id} = req.params;
        const {noOfAnswers,answerBody,userAnswered}= req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send('question unavailable')
        }
        updatedNoOfQuestion(_id, noOfAnswers)
        try {
           const updatedQuestion = await Question.findByIdAndUpdate(_id,{$addToSet:{'answer': [{answerBody,userAnswered,userId:req.userId}]}})
           res.status(200).send(updatedQuestion)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        } 
}
const updatedNoOfQuestion = async(_id, noOfAnswers) => {
    try {
        await Question.findByIdAndUpdate(_id, {$set: {'noOfAnswers': noOfAnswers}})

    } catch (error) {
        console.log(error)
    } 
}