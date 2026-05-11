// import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export async function sendEmail({ to, subject, html, replyTo }) {
//   return transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to,
//     replyTo,
//     subject,
//     html,
//   });
// }
import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  // service: "gmail",
  // requireTLS: true,
  // tls: {
  //   minVersion: "TLSv1.2",
  // },

  host: "smtp.office365.com",
  port: 587,
  secure: false,
  requireTLS: true,
  tls: {
    minVersion: "TLSv1.2",
  },
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

export async function sendEmail({ to, subject, html, replyTo }) {
  if (!emailUser || !emailPass) {
    throw new Error("Email service credentials are missing");
  }

  if (!to) {
    throw new Error("Missing destination email");
  }

  return transporter.sendMail({
    from: `"SQ1 Contact" <${emailUser}>`,
    to,
    replyTo,
    subject,
    html,
  });
}
