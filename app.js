const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to user');
});

// Nodemailer transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'futureittouch@gmail.com',
        pass: 'xmnkckbdtskzyfuh'
    }
});

app.post("/sendmail", async (req, res) => {
    try {
        console.log(req.body);

        const {
            course, doctor_name, visaType, product,
            S_name, S_last, S_phone, Looking_for_excell,
            plan_date, budget_salary, post_code, S_email,
            Address, message, Location_form, Location_to,
            userEmailsir = 'manshusmartboy@gmail.com',
            userEmailsir2, user_email, ieltsScore,
            DestinationCountry, currentCountry, education,
            experience, tentative_schedule, delivery_method,
            moving_from_country, selectedCity, cityTempo,
            destinationcity, filmweb, S_date, moving_from_state,
            moving_from_city, moving_to_country, Location_form_state,
            Location_to_state, delivery_type, sourcecity, pickUpLocation,
            dropOffLocation, shiftTime, vehicleshiftingfrom, S_services,
            service_type, vehicleshiftingto, budget_range, new_url,
            start_time, need_service, company_size, company_name,
            designation
        } = req.body;

        let htmlBody = `
            ${doctor_name ? '<p><strong>Doctor:</strong> ' + doctor_name + '</p>' : ''}
            ${S_name ? '<p><strong>First Name:</strong> ' + S_name + '</p>' : ''}
            ${S_last ? '<p><strong>Last Name:</strong> ' + S_last + '</p>' : ''}
            ${course ? '<p><strong>Course:</strong> ' + course + '</p>' : ''}
            ${designation ? '<p><strong>Designation:</strong> ' + designation + '</p>' : ''}
            ${company_name ? '<p><strong>Company Name:</strong> ' + company_name + '</p>' : ''}
            ${company_size ? '<p><strong>Company Size:</strong> ' + company_size + '</p>' : ''}
            ${S_phone ? '<p><strong>Phone:</strong> ' + S_phone + '</p>' : ''}
            ${S_email ? '<p><strong>Email:</strong> ' + S_email + '</p>' : ''}
            ${Location_form ? '<p><strong>Location From:</strong> ' + Location_form + '</p>' : ''}
            ${product ? '<p><strong>Product:</strong> ' + product + '</p>' : ''}
            ${education ? '<p><strong>Education:</strong> ' + education + '</p>' : ''}
            ${experience ? '<p><strong>Experience:</strong> ' + experience + '</p>' : ''}
            ${ieltsScore ? '<p><strong>IELTS Score:</strong> ' + ieltsScore + '</p>' : ''}
            ${visaType ? '<p><strong>Visa Type:</strong> ' + visaType + '</p>' : ''}
            ${DestinationCountry ? '<p><strong>Destination Country:</strong> ' + DestinationCountry + '</p>' : ''}
            ${currentCountry ? '<p><strong>Current Country:</strong> ' + currentCountry + '</p>' : ''}
            ${Location_to ? '<p><strong>Location To:</strong> ' + Location_to + '</p>' : ''}
            ${tentative_schedule ? '<p><strong>Tentative Schedule:</strong> ' + tentative_schedule + '</p>' : ''}
            ${delivery_method ? '<p><strong>Delivery Method:</strong> ' + delivery_method + '</p>' : ''}
            ${moving_from_country ? '<p><strong>Moving From Country:</strong> ' + moving_from_country + '</p>' : ''}
            ${new_url ? '<p><strong>Website URL:</strong> ' + new_url + '</p>' : ''}
            ${moving_to_country ? '<p><strong>Moving To Country:</strong> ' + moving_to_country + '</p>' : ''}
            ${moving_from_state ? '<p><strong>Moving From State:</strong> ' + moving_from_state + '</p>' : ''}
            ${Location_form_state ? '<p><strong>Location From State:</strong> ' + Location_form_state + '</p>' : ''}
            ${cityTempo ? '<p><strong>City:</strong> ' + cityTempo + '</p>' : ''}
            ${sourcecity ? '<p><strong>Source City:</strong> ' + sourcecity + '</p>' : ''}
            ${destinationcity ? '<p><strong>Destination City:</strong> ' + destinationcity + '</p>' : ''}
            ${pickUpLocation ? '<p><strong>Pickup Location:</strong> ' + pickUpLocation + '</p>' : ''}
            ${dropOffLocation ? '<p><strong>Drop Off Location:</strong> ' + dropOffLocation + '</p>' : ''}
            ${shiftTime ? '<p><strong>Shifting Time:</strong> ' + shiftTime + '</p>' : ''}
            ${vehicleshiftingfrom ? '<p><strong>Vehicle Shifting From:</strong> ' + vehicleshiftingfrom + '</p>' : ''}
            ${vehicleshiftingto ? '<p><strong>Vehicle Shifting To:</strong> ' + vehicleshiftingto + '</p>' : ''}
            ${Looking_for_excell ? '<p><strong>Looking For Excellence:</strong> ' + Looking_for_excell + '</p>' : ''}
            ${plan_date ? '<p><strong>Plan Date:</strong> ' + plan_date + '</p>' : ''}
            ${budget_salary ? '<p><strong>Budget/Salary:</strong> ' + budget_salary + '</p>' : ''}
            ${Address ? '<p><strong>Address:</strong> ' + Address + '</p>' : ''}
            ${post_code ? '<p><strong>Post Code:</strong> ' + post_code + '</p>' : ''}
            ${message ? '<p><strong>Message:</strong> ' + message + '</p>' : ''}
            ${start_time ? '<p><strong>Start Time:</strong> ' + start_time + '</p>' : ''}
            ${need_service ? '<p><strong>Need Service:</strong> ' + need_service + '</p>' : ''}
            ${S_services ? '<p><strong>Services:</strong> ' + S_services + '</p>' : ''}
            ${service_type ? '<p><strong>Service Type:</strong> ' + service_type + '</p>' : ''}
            ${delivery_type ? '<p><strong>Delivery Type:</strong> ' + delivery_type + '</p>' : ''}
        `;

        let mailOptions = {
            from: 'futureittouch@gmail.com',
            to: userEmailsir2 || userEmailsir, // fallback if userEmailsir2 is not provided
            subject: 'New Lead Received',
            html: htmlBody,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Mail sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send mail" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
