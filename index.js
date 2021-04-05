require('dotenv').config();
const nodemailer = require("nodemailer");

const hbs = require("nodemailer-express-handlebars");
// const path = require("path");


var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,        //Add your email
    pass: process.env.PASSWORD,        //Add your password
  },
});



// You can use custom templates using handlebars

// const handlebarOptions = {
//     viewEngine: {
//       extName: ".handlebars",
//       partialsDir: path.resolve(__dirname, "views"),
//       defaultLayout: false,
//     },
//     viewPath: path.resolve(__dirname, "views"),
//     extName: ".handlebars",
//   };

// transporter.use("compile",hbs(handlebarOptions));



myemail = [
  {"name": "yourname", "email": "youremail.com"}
]

for(let i=0;i < myemail.length; i++)
{
  var mailOptions = {
    from: process.env.EMAIL,
    to: myemail[i].email,
    subject: `Hello ${myemail[i].name}`,
    // text: 'This is the plain body of email',
    html: '<p>This is the html body of email</p>'
    // template: "index",              //Any template stored in viewPath
  };

transporter.sendMail(mailOptions);
}