import express from "express";
const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/read-blogs",(req,res)=>{
    res.render("blog.ejs");
});

app.get("/home",(req,res)=>{
    res.render("index.ejs");
});

app.post("/create-blogs",(req,res)=>{
    res.render("create.ejs");
});


app.listen(port,(req,res)=>{
    console.log(`Server is running at ${port}`);
});