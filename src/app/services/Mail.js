const nodemailer = require("nodemailer");
const mailConfig = require('../../config/mail');
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
const exphbs = require("express-handlebars");

const transport = nodemailer.createTransport(mailConfig);

const viewPath = path.resolve(__dirname, '..', 'views', 'emails');

transport.use('compile', hbs({
    viewEngine: exphbs.create({
        extname: '.hbs',
        layoutsDir: path.resolve(viewPath),
        partialsDir: path.resolve(viewPath, "partials")
    }),
    viewPath: viewPath,
    extName: '.hbs'
}))

module.exports = transport;