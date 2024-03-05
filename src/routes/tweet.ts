import express from "express"
import { scheduleTweet, getAllTweets, deleteTweet } from "../controllers/tweet"

const router = express.Router();

router.post('/',scheduleTweet)
router.get('/',getAllTweets)

router.delete('/:id',deleteTweet)


export default router;