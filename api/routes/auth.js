import express from 'express'


const router=express.Router()

router.get("/", (req,res)=>{
    res.send("Hello there number 2")
})

export default router