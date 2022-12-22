import Result from "../models/resultSchema.js"

class resultController {
    static getResult = async(req, res) => {
        try {
            const r = Result.find()
            res.json({msg: r})
        } catch (error) {
            console.log(error)
        }
    }

    static postResult = async(req, res) => {
        try {
            const {username, result, attempts, points, achived} = req.body

            if(!username && !result){
                res.json({msg: "Data not given"})
            }else{
                Result.create({ username, result, attempts, points, achived }, (error, result) =>{
                    if(!error){
                        res.json({ msg: result })
                    }else{
                        res.json({ msg: error })
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    static deleteResult = async(req, res) => {
        try {
            await Result.deleteMany()
            res.json({msg: "Sucessfully deleted"})
        } catch (error) {
            console.log(error)
        }
    }
}

export default resultController