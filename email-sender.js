const nodemailer = require('nodemailer');
const { text } = require('stream/consumers');
const transporter = nodemailer.createTransport({
service:'gmail',
auth:{
    user:'bramsukt@gmail.com',
    pass:'**********'
}

});

const mailOptions = {
    from:'bramsukt@gmail.com',
    to:'saada.ibrahim@outlook.com',
    subject:'test Node js sent mail Nodemailer',
    text:'Helllo this is a test nodemailer '
};

transporter.sendMail(mailOptions, function (error,info){
    if(error){
        console.log('Ereur send:',error);
    } else{
            console.log('Success:', info.response);
        }
    });
