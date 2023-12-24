import express from "express";
import bodyParser from "body-parser";
import jQuery from "jquery";


const app=express();
const port=3000;

// set the view engine to ejs
// app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("welcome.ejs");
});

// app.get("/blogs/:id",(req,res)=>{
//     const blogPost=req.params.id;
app.get("/:id",(req,res)=>{
    const blogPost=req.params['id'];
    res.render("blogs.ejs", {postedBlog:blogPost});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  

var blogLatestPost={
    title:"The most  common current mistake the female gender make in a relationship",
    littleIntro:"Do you wonder what it is? Look around you; observe relationships that are failing, of which the man claims she is the problem.",
    dYear: new Date().getFullYear,
    dDate:new Date().getDate(),
    seconds: new Date().getSeconds(),
}