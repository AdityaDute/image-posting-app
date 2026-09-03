const express = require('express')
const app = express();
const postModel = require('./model/post.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const upload = multer({storage: multer.memoryStorage()})

//post
app.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        const result = await uploadFile(req.file.buffer)
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "Post Created Successfully",
            post
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create post",
            error: error.message
        })
    }
})

//get
app.get('/posts', async (req, res) => {
    try{
        const posts = postModel.find()
        return res.status(200).json({
            message:"Post Fetched Succesfully",
            posts
        })
    }
    catch(error){
        return res.status(500).json({
            massege:"Posts not fetch",
            error: error.massege
        })
    }
})

module.exports = app;

