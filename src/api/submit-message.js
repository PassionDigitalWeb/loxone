import axios from "axios"
import nodemailer from "nodemailer"
import validator from "validator"
const sanitizer = require("sanitize")()

const recaptchaValidation = async ({ recaptchaToken }) => {
  const result = await (async () => {
    try {
      const response = await axios({
        url: "https://www.google.com/recaptcha/api/siteverify",
        method: "POST",
        params: {
          secret: process.env.RECAPTCHA_V3_SECRET_KEY,
          response: recaptchaToken,
        },
      })
      return { successful: true }
    } catch (error) {
      let message
      if (error.response) {
        message = `reCAPTCHA server responded with non 2xx code: ${error.response.data}`
      } else if (error.request) {
        message = `No reCAPTCHA response received: ${error.request}`
      } else {
        message = `Error setting up reCAPTCHA response: ${error.message}`
      }
      return { successful: false, message }
    }
  })()
  return result
}

const sendEmail = async ({
  enquiry_type,
  first_name,
  last_name,
  email,
  phone_number,
  describe_your_project,
}) => {
  const result = await (async () => {
    try {
      const html = [
        {
          title: "Enquiry Type",
          value: enquiry_type,
        },
        {
          title: "First Name",
          value: first_name,
        },
        {
          title: "Last Name",
          value: last_name,
        },
        {
          title: "Email",
          value: email,
        },
        {
          title: "Phone Number",
          value: phone_number,
        },
        {
          title: "Describe your project",
          value: describe_your_project,
        },
      ]
        .map(({ title, value }) => {
          const sanitizerTitle = validator.escape(title)
          const sanitizerValue = validator.escape(value)
          return `<p><strong>${sanitizerTitle}</strong>: <span>${sanitizerValue}</span></p>`
        })
        .join("")

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_SECRET,
        },
      })

      // uncomment for additional help debugging
      // await transporter.verify();

      const info = await transporter.sendMail({
        from: process.env.SMTP_SENDER,
        to: process.env.CONTACT_EMAIL,
        subject: "Contact Form Submission",
        html,
      })
      return { successful: true, message: info.messageId }
    } catch (error) {
      return { successful: false, message: JSON.stringify(error, null, 2) }
    }
  })()
  return result
}

//TODO: CSRF protection and field validation
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed")
  } else {
    const {
      enquiry_type,
      first_name,
      last_name,
      email,
      phone_number,
      describe_your_project,
      recaptchaToken,
    } = req.body

    const recaptchaValidationResult = await recaptchaValidation({
      recaptchaToken,
    })

    if (!recaptchaValidationResult.successful) {
      res.status(400).send(recaptchaValidationResult.message)
    } else {
      const sendEmailResult = await sendEmail({
        enquiry_type,
        first_name,
        last_name,
        email,
        phone_number,
        describe_your_project,
      })

      if (!sendEmailResult.successful) {
        res.status(400).send(sendEmailResult.message)
      } else {
        res.status(200).send("All good!")
      }
    }
  }
}
