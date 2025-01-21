const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Configuração do body-parser para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configurando a pasta 'html' para ser servida como estática
app.use(express.static(path.join(__dirname, 'html')));

// Rota para a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Página principal carregada com sucesso!');
});

// Rota para a página talkme.html
app.get('/html/talkme.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'talkme.html'));
    console.log('Página Talk Me carregada com sucesso!');
});

// Rota para a página services.html
app.get('/html/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'services.html'));
    console.log('Página Services carregada com sucesso!');
});

// Rota para a página sobre
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
    console.log('Página Sobre carregada com sucesso!');
});

// Rota para o envio do formulário de contato
app.post('/enviar-email', (req, res) => {
    const { nome, email, mensagem } = req.body;

    // Configuração do transportador de e-mail (usando o Gmail no exemplo)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'arthurdev8@gmail.com', // Substitua pelo seu e-mail
            pass: 'pymb qygg sdia siyh'   // Substitua pela sua senha ou senha de aplicativo
        }
    });

    // Opções de e-mail
    const mailOptions = {
        from: email,  // E-mail do cliente
        to: 'seu-email@dominio.com',  // Seu e-mail
        subject: 'Mensagem de Contato',
        text: `Você recebeu uma nova mensagem de ${nome} (${email}):\n\n${mensagem}`
    };

    // Enviar e-mail
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Erro ao enviar e-mail:', err);
            return res.status(500).send('Erro ao enviar o e-mail!');
        }
        console.log('E-mail enviado:', info.response);
        res.status(200).send('Mensagem enviada com sucesso!');
    });
});

// Middleware de erro
app.use((err, req, res, next) => {
    console.error('Erro ao carregar a página:', err);
    res.status(500).send('Algo deu errado!');
});

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
