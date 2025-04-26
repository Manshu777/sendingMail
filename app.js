const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('Welcome  to user')
})


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'futureittouch@gmail.com', 
        pass: 'xmnkckbdtskzyfuh' 
    }
});


app.post("/sendmail", async (req, res) => {
   
    console.log(req.body)

    const course = req.body.course || '';
  
    // visaType
    const doctorName = req.body.doctor_name || '';
    const visaType = req.body.visaType || '';

     const product = req.body.product || '';
    
    const name = req.body.S_name || '';
    const last = req.body.S_last || '';
    const phone = req.body.S_phone || '';
   
    const Looking_for_excell = req.body.Looking_for_excell || '';
    const plan_date = req.body.plan_date || '';
    const  budget_salary = req.body.budget_salary || '';
    const post_code = req.body.post_code || '';

    const email = req.body.S_email || '';
    const Address = req.body.Address || '';
    const message = req.body.message || '';
    const Location_form = req.body.Location_form || '';
    const Location_to = req.body.Location_to || '';
    const userEmailsir = req.body.userEmailsir || 'manshusmartboy@gmail.com';
    const userEmailsir2 = req.body.userEmailsir2 || '';
    const user_email = req.body.user_email || '';

const ieltsScore = req.body.ieltsScore || '';
    const DestinationCountry = req.body.DestinationCountry || '';

 const currentCountry = req.body.currentCountry || '';
     const education = req.body.education || '';

         const experience = req.body.experience || '';

    const tentative_schedule = req.body.tentative_schedule || '';
    const delivery_method = req.body.delivery_method || '';
    const moving_from_country = req.body.moving_from_country || '';
    const selectedCity = req.body.selectedCity || '';
    const cityTempo = req.body.cityTempo || '';

    const destinationcity = req.body.destinationcity || '';
    const filmweb = req.body.filmweb || '';


    

 

   const S_date = req.body.S_date || ''
    const moving_from_state = req.body.moving_from_state || '';
    const moving_from_city = req.body.moving_from_city || '';
    const moving_to_country = req.body.moving_to_country || '';
    const Location_form_state = req.body.Location_form_state || '';
    const Location_to_state = req.body.Location_to_state || '';
    const delivery_type = req.body.delivery_type || '';

    const sourcecity = req.body.sourcecity || '';

    const pickUpLocation = req.body.pickUpLocation || '';
    const dropOffLocation = req.body.dropOffLocation || '';
    const shiftTime = req.body.shiftTime || '';

    const vehicleshiftingfrom = req.body.vehicleshiftingfrom || '';
    const S_services = req.body.S_services || '';
    const service_type = req.body.service_type || '';



    const vehicleshiftingto = req.body.vehicleshiftingto || '';



    
    const budget_range = req.body.budget_range || '';

    
  const new_url = req.body.new_url || '';
  const start_time = req.body.start_time || '';

  const need_service = req.body.need_service || '';
  const company_size = req.body.company_size || '';
  const company_name = req.body.company_name || '';
  const designation = req.body.designation || '';


  
  
  


  

    let htmlBody = `
        ${doctorName ? '<p><strong>Doctor:</strong> ' + doctorName + '</p>' : ''}
        ${name ? '<p><strong>First Name:</strong> ' + name + '</p>' : ''}
        ${last ? '<p><strong>Last Name:</strong> ' + last + '</p>' : ''}
       
        


  ${course ? '<p><strong>course :</strong> ' + course + '</p>' : ''}
        
        ${designation ? '<p><strong> Designation :</strong> ' + designation + '</p>' : ''}
        ${company_name ? '<p><strong> Company Name :</strong> ' + company_name + '</p>' : ''}
        ${company_size ? '<p><strong> Company Size:</strong> ' + company_size + '</p>' : ''}

        ${phone ? '<p><strong>Phone:</strong> ' + phone + '</p>' : ''}
        ${email ? '<p><strong>Email:</strong> ' + email + '</p>' : ''}
        ${Location_form ? '<p><strong>Location Form:</strong> ' + Location_form + '</p>' : ''}
${product ? '<p><strong>Product:</strong> ' + product + '</p>' : ''}
         ${education ? '<p><strong>Education:</strong> ' + education + '</p>' : ''}
           ${experience ? '<p><strong>Experience:</strong> ' + experience + '</p>' : ''}
         ${ieltsScore ? '<p><strong>Ielts Score:</strong> ' + ieltsScore + '</p>' : ''}
 ${visaType ? '<p><strong> Visa Type </strong> ' + visaType + '</p>' : ''}

             ${DestinationCountry ? '<p><strong>Destination Country:</strong> ' + DestinationCountry + '</p>' : ''}
         ${currentCountry ? '<p><strong>Current Country:</strong> ' + currentCountry + '</p>' : ''}
         ${currentCountry ? '<p><strong>Current Country:</strong> ' + currentCountry + '</p>' : ''}

        ${Location_to ? '<p><strong>Location To:</strong> ' + Location_to + '</p>' : ''}
        ${tentative_schedule ? '<p><strong> Tentative Schedule:</strong> ' + tentative_schedule + '</p>' : ''}
        ${delivery_method ? '<p><strong> Delivery Method:</strong> ' + delivery_method + '</p>' : ''}
        ${moving_from_country ? '<p><strong>Moving From Country </strong> ' + moving_from_country + '</p>' : ''}
        ${new_url ? '<p><strong> Website Url </strong> ' + new_url + '</p>' : ''}
        ${moving_to_country ? '<p><strong>Moving To Country </strong> ' + moving_to_country + '</p>' : ''}
        ${moving_from_state ? '<p><strong>Moving From State:</strong> ' + moving_from_state + '</p>' : ''}
        ${moving_from_state ? '<p><strong>Moving From State:</strong> ' + moving_from_state + '</p>' : ''}
        ${Location_form_state ? '<p><strong> Location From state :</strong> ' + Location_to_state + '</p>' : ''}
        ${cityTempo ? '<p><strong> Enter your City :</strong> ' + cityTempo + '</p>' : ''}
        ${sourcecity ? '<p><strong> Enter Source City :</strong> ' + sourcecity + '</p>' : ''}
        ${destinationcity ? '<p><strong> Enter Destination City :</strong> ' + destinationcity + '</p>' : ''}
        ${pickUpLocation ? '<p><strong> Pickup from :</strong> ' + pickUpLocation + '</p>' : ''}
        ${dropOffLocation ? '<p><strong> Drop at :</strong> ' + dropOffLocation + '</p>' : ''}
        ${shiftTime ? '<p><strong> Shifting Date :</strong> ' + shiftTime + '</p>' : ''}
        ${vehicleshiftingfrom ? '<p><strong> Vehicle Shifting From:</strong> ' + vehicleshiftingfrom + '</p>' : ''}
        ${vehicleshiftingto ? '<p><strong> Vehicle Shifting To:</strong> ' + vehicleshiftingto + '</p>' : ''}

        
        ${Looking_for_excell ? '<p><strong> What looking for client :</strong> ' + Looking_for_excell + '</p>' : ''}
        ${plan_date ? '<p><strong>  plan to start your proje :</strong> ' + plan_date + '</p>' : ''}
        ${budget_salary ? '<p><strong>  plan to start your proje :</strong> ' + budget_salary + '</p>' : ''}
        ${post_code ? '<p><strong>  User Post code  :</strong> ' + post_code + '</p>' : ''}
        ${S_services ? '<p><strong> Service :</strong> ' + S_services + '</p>' : ''}
        ${service_type ? '<p><strong> Service :</strong> ' + service_type + '</p>' : ''}
        ${budget_range ? '<p><strong> Budget Range</strong> ' + budget_range + '</p>' : ''}

        ${start_time ? '<p><strong> Start Time :</strong> ' + start_time + '</p>' : ''}

        
        ${Address ? '<p><strong> Address :</strong> ' + Address + '</p>' : ''}
    


        ${selectedCity ? '<p><strong>  Selected City :</strong> ' + selectedCity + '</p>' : ''}
        ${Location_to_state ? '<p><strong> Location TO state </strong> ' + Location_to_state + '</p>' : ''}
        ${delivery_type ? '<p><strong> Delivery Type </strong> ' + delivery_type + '</p>' : ''}
        ${need_service ? '<p><strong> Services </strong> ' + need_service + '</p>' : ''}
        ${S_date ? '<p><strong> Moving Date </strong> ' + S_date + '</p>' : ''}
        ${message ? '<p><strong>Message:</strong> ' + message + '</p>' : ''}
    `;
    

    const originalPdfPath = './Files/user.pdf';
    const newPdfPath = './Files/new_user.pdf';

    const existingPdfBytes = fs.readFileSync(originalPdfPath);
    const existingPdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the last page of the existing PDF
    const pages = existingPdfDoc.getPages();
    const lastPage = pages[pages.length - 1];
    const { width, height } = lastPage.getSize();
    
    const boldFont = await existingPdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontSize = 12;
    const margin = 50; // Margin from the top for the text content
    const textContent = [
       
        `First Name: ${name}`,
        `Email : ${user_email}`,
        `Phone : ${phone}`,
        
        `Service : ${S_services}`,
        
        `Message: ${message}`
    ];
   
    let yPosition = height - margin; // Start position from top with margin
    const lineHeight = 20; // Line height between each line of text
   console.log(yPosition)
  let ynewPosition = 380
  console.log(ynewPosition)
    textContent.forEach(text => {
        if (text) {
            lastPage.drawText(text, {
                x: margin,
                y: ynewPosition,
                size: fontSize,
                font: boldFont,
                color: rgb(0, 0, 0),
            });
            ynewPosition -= lineHeight;
        }
    });

    // Save the modified PDF document
    const newPdfBytes = await existingPdfDoc.save();
    fs.writeFileSync(newPdfPath, newPdfBytes);

    let mailOptions = {
        from: 'futuretouchs@gmail.com', 
        to: [userEmailsir, userEmailsir2,user_email],

        
        subject: 'Appointment Booking', 
        html: htmlBody
    };

    if (filmweb) {


    
        mailOptions.attachments = [
            {
                filename: 'new_user.pdf',
                path: newPdfPath
            }
        ];
    
    }
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
