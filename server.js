const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();

// Configuração do body-parser para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath); // Cria a pasta de uploads se não existir
        }
        cb(null, uploadPath); // Define o diretório de upload
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Cria um nome único para o arquivo
    }
});
const upload = multer({ storage: storage });

// Configurando a pasta 'html' para ser servida como estática
app.use(express.static(path.join(__dirname, 'html')));
app.use('/img', express.static(path.join(__dirname, 'img')));

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

// Rota para o envio do formulário de contato com upload de arquivos
app.post('/enviar-email', upload.array('arquivos', 10), (req, res) => {
    const { nome, email, mensagem } = req.body;
    const arquivos = req.files; // Acessa os arquivos enviados

    // Verifica se algum arquivo foi enviado
    if (!arquivos || arquivos.length === 0) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }

    // Configuração do transportador de e-mail (usando o Gmail no exemplo)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'arthurdev8@gmail.com', // Substitua pelo seu e-mail
            pass: 'pymb qygg sdia siyh'   // Substitua pela sua senha ou senha de aplicativo
        }
    });

    // Configuração dos anexos com base nos arquivos enviados
    const anexos = arquivos.map(arquivo => ({
        filename: arquivo.originalname,
        path: arquivo.path
    }));

    // Opções de e-mail
    const mailOptions = {
        from: email,  // E-mail do cliente
        to: 'arthurdev8@gmail.com',  // Seu e-mail
        subject: 'Mensagem de Contato',
        text: `Você recebeu uma nova mensagem de ${nome} (${email}):\n\n${mensagem}`,
        attachments: anexos // Anexos enviados com o formulário
    };

    // Enviar o e-mail
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
