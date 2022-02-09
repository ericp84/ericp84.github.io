const exp = document.getElementsById("name");
const nodemailer = require("nodemailer");


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "epdevelopment.contact@gmail.com",
        pass: "Ericcv@16",    
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: exp,
    to: "epdevelopment.contact@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    phone: req.body.phone,
    html: `j'ai un nouveau message pour moi: ${req.body.email}<br/>${req.body.phone}<br/>${req.body.subject} <br/>${req.body.message}`,
  });
  console.log(exp)
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);