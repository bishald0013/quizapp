import { Router } from "express";
import questionController from "../controller/questionController.js";
import resultController from "../controller/resultController.js";
const router = Router()

router.route("/question")
            .get(questionController.getQuestion)
            .post(questionController.postQuestion)
            .delete(questionController.deleteQuestion)

router.route("/result")
            .get(resultController.getResult)
            .post(resultController.postResult)
            .delete(resultController.deleteResult)


export default router