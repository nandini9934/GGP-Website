// mailer.js
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Create a function to send emails
const sendEmail = async (name, phoneno, goals, mail) => {
  // Step 1: Configure nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // You can use any email service provider
    auth: {
      user: "Organikkanpur@gmail.com", // Your email address from .env
      pass: "rrjvjwgwotnbunox", // Your email password or app-specific password
    },
  });

  const templatePath = "src/app/api/template.html";
  console.log(templatePath);
  let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

  const recipientName = name; // Replace with recipient's actual name
  htmlTemplate = htmlTemplate.replace("{{Name}}", name);
  htmlTemplate = htmlTemplate.replace("{{Mobile}}", phoneno);
  htmlTemplate = htmlTemplate.replace("{{Email}}", mail);
  // htmlTemplate = htmlTemplate.replace("{{Address}}", token);
  htmlTemplate = htmlTemplate.replace("{{Goal}}", goals);
  // Step 2: Define the email options
  let mailOptions = {
    from: "Organikkanpur@gmail.com", // Sender's email address
    to: "kushwahaakash2000@gmail.com,jforjames@gmail.com,harshitshakya94@gmail.com", // Recipient's email address
    subject: "New Lead Generated", // Subject of the email
    html: htmlTemplate, // Plain text body of the email
  };

  // Step 3: Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log("Error sending email:", error);
  }
};

module.exports = sendEmail;
