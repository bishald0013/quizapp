import Questions from "../models/questionSchema.js"
import questions, {answer} from "../database/data.js"

class questionController {
    static getQuestion = async (req,res) => {
        try {
            const q = await Questions.find()
            res.status(200).json(q)
        } catch (error) {
            res.json({ error })
        }
    }
    
    static postQuestion = async (req, res) => {
        try {
            Questions.insertMany({ questions: questions, answers: answer }, (error, result) => {
                if(!error){
                    res.status(200).json({msg: "Data saved successfully", data: result})
                }else{
                    res.json({ msg: error })
                }
            })
        } catch (error) {
            res.json({error})
        }
    }

    static deleteQuestion = async (req, res) => {
        try {
            await Questions.deleteMany()
            res.json({msg: "successfully deleted all question"})
        } catch (error) {
            console.log(error)
        }
    }
}

export default questionController