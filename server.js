const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();


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

// Configurando pastas estáticas
app.use(express.static(path.join(__dirname, 'html')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/script', express.static(path.join(__dirname, 'script')));

// Rotas para páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Página principal carregada com sucesso!');
});

app.get('/html/talkme.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'talkme.html'));
    console.log('Página Talk Me carregada com sucesso!');
});

app.get('/html/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'services.html'));
    console.log('Página Services carregada com sucesso!');
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
    console.log('Página Sobre carregada com sucesso!');
});


// Configuração da porta
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
