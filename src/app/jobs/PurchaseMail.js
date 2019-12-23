const Mail = require("../services/Mail");

class PurchaseMail {
    get key() {
        return 'PurchaseMail'
    }

    async handle (job, done) {
        const { purchaseAd, user, content}  = job.data

        await Mail.sendMail({
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

        return done();
    }
}

module.exports = new PurchaseMail();