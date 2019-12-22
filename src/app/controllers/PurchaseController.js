const Ad = require("../models/Ad");
const User = require("../models/User");
const Mail = require('../services/Mail');

class PurchaseController {
    async store (req, res) {
        const { ad, content } = req.body;

        const purchaseAd = await Ad.findById(ad).populate('author');
        const user = await User.findById(req.userId);

        Mail.sendMail({
            from: 'Caio Poyares <capoyares@gmail.com>',
            to: purchaseAd.author.email,
            subject: `Solicitação de compra: ${purchaseAd.title}`,
            html: `<html>
            <head>
                <style>
                    body {
                        font-family: Arial, Helvetica, sans-serif;
                    }
                </style>
            </head>
            <body>
                <strong>Olá, ${purchaseAd.author.name}</strong>
                <p>Você tem uma nova solicitação de compra para o anúncio ${purchaseAd.title}</p>
                <br>
                <strong>${user.name} (${user.email}):</strong>
                <p>${content}</p>
            </body>
        </html>`
        });

        return res.send()
    }
}

module.exports = new PurchaseController();