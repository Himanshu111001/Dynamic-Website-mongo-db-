const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use("", routes);

// (template engine)
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// db connection
mongoose.connect("mongodb://localhost/freelance_project", () => {
  console.log("db connected");
});

// Service.create([
//   {
//     icon: "fab fa-accusoft",
//     title: "Provide Best Courses",
//     description:
//       "We provide courses that helps student in learning and in placement",
//     linkText: "Check",
//     link: "https://himxnshu.netlify.app",
//   },
//   {
//     icon: "fab fa-affiliatetheme",
//     title: "Learn Projects",
//     description:
//       ">We provide courses that helps student in learning and in placement",
//     linkText: "Learn",
//     link: "https://himxnshu.netlify.app",
//   },
//   {
//     icon: "fab fa-affiliatetheme",
//     title: "Learn Projects",
//     description:
//       ">We provide courses that helps student in learning and in placement",
//     linkText: "Learn",
//     link: "https://himxnshu.netlify.app",
//   },
// ]);

// Slider.create([
//   {
//     title: "Learn Java in very easy way",
//     subTitle: "Java is one of the most popular programing language",
//     imageUrl: "/static/images/s1.jpg",
//     class: "active",
//   },
//   {
//     title: "What is Django in python ?",
//     subTitle: "Django is most famous framework of python",
//     imageUrl: "/static/images/s2.jpg",
//   },
//   {
//     title: "What about node js ?",
//     subTitle: "Node js is runtime environment to execute javascript",
//     imageUrl: "/static/images/s3.jpg",
//   },
// ]);

// Detail.create({
//   brandName: "Himxnshu",
//   brandIconUrl:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Square%2C_Inc_-_Square_Logo.jpg/1200px-Square%2C_Inc_-_Square_Logo.jpg",
//   links: [
//     {
//       label: "Home",
//       url: "/",
//     },
//     {
//       label: "Services",
//       url: "/services",
//     },
//     {
//       label: "Gallery",
//       url: "/gallery",
//     },
//     {
//       label: "About",
//       url: "/about",
//     },
//     {
//       label: "Contact Us",
//       url: "/contact-us",
//     },
//   ],
// });

app.listen(process.env.PORT | 5556, () => {
  console.log("server started");
});
