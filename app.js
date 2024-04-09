const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('Welcome  to user')
})


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'futuretouchs@gmail.com', 
        pass: 'ufvmdzzopesgubhg' 
    }
});


app.post("/sendmail", (req, res) => {
   
    console.log(req.body)
    
    const doctorName = req.body.doctor_name || '';
    const name = req.body.S_name || '';
    const phone = req.body.S_phone || '';
    const email = req.body.S_email || '';
    const message = req.body.message || '';


    let htmlBody = `
      ${doctorName ?  <p><strong>Doctor:</strong> ${doctorName}</p> : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    
    let mailOptions = {
        from: 'futuretouchs@gmail.com', 
        to: 'manshusmartboy@gmail.com', 
        subject: 'Appointment Booking', 
        html: htmlBody // HTML formatted body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred:', error);
        }
        console.log('Email sent:', info.response);
    });

    res.send('Email sent');

});



app.listen(9000,()=>{
    console.log('server is running on port 9000')
})