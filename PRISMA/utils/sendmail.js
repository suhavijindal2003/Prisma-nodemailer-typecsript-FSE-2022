const nodemailer = require("nodemailer");
const sendMail= (  email,subject,message )=>{
    const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "suhavi.jindal03@gmail.com",
        pass: "noee hxxg vkkf spog",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'suhavi.jindal03@gmail.com', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        text: message, // Plain text body
        html: `<p>${message}</p>`, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
}
module.exports.sendMail=sendMail;