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
    const Location_form = req.body.Location_form || '';
    const Location_to = req.body.Location_to || '';



    let htmlBody = `
        ${doctorName ? '<p><strong>Doctor:</strong> ' + doctorName + '</p>' : ''}
        ${name ? '<p><strong>Name:</strong> ' + name + '</p>' : ''}
        ${phone ? '<p><strong>Phone:</strong> ' + phone + '</p>' : ''}
        ${email ? '<p><strong>Email:</strong> ' + email + '</p>' : ''}
        ${Location_form ? '<p><strong>Location Form:</strong> ' + Location_form + '</p>' : ''}
        ${Location_to ? '<p><strong>Location To:</strong> ' + Location_to + '</p>' : ''}

        ${message ? '<p><strong>Message:</strong> ' + message + '</p>' : ''}
    `;
    
    let mailOptions = {
        from: 'futuretouchs@gmail.com', 
        to: 'manshusmartboy@gmail.com', 
        subject: 'Appointment Booking', 
        html: htmlBody
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