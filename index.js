import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

let blogs=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


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

app.post("/created-blogs", (req, res) => {
    const { title, author, category, content } = req.body;
    const blog = {
        title: title || "Untitled",
        author: author || "Anonymous",
        category: category || "General",
        content: content || "No content available",
        image: req.file ? req.file.filename : "default-image.jpg"
    };
    blogs.push(blog);
    res.redirect("/read-blogs");
});

app.get("/read-blogs", (req, res) => {
    res.render("user.ejs", { blogs });
});


app.listen(port,(req,res)=>{
    console.log(`Server is running at ${port}`);
});