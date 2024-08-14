import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"th_leanring_platform"
})

app.get("/",(req,res) => {
    res.json("here is backend")
})

app.get("/users", (req,res) => {
    const q = "SELECT * FROM users"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/users", (req,res) => {
    const q = "INSERT INTO users (`username`,`password`,`role`) VALUES (?)"
    const values = ["user3", "user123456", "user"]

    db.query(q, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("User has been created successfully.")
    })
})

app.listen(8800, () => {
    console.log("Connect backend!")
})

export { db };