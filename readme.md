# Projeto Padilha Advogados

Este é o projeto de um site para a empresa Padilha Advogados, com funcionalidades de navegação entre páginas, formulário de contato, e envio de e-mails. Abaixo estão listadas as mudanças feitas no projeto, incluindo ajustes de design e a implementação de envio de e-mails.

## Alterações Realizadas

### 1. **Alteração de Cores**
Alteramos a paleta de cores do site para deixar o design mais moderno e atraente. A cor principal foi definida como `#6F2C3E`.

### 2. **Estrutura do Formulário de Contato (Fale Conosco)**
Foi implementado um formulário de contato na página `talkme.html`, onde os usuários podem preencher seus dados (nome, e-mail, mensagem) para entrar em contato. O formulário é responsável por capturar essas informações e enviá-las para o e-mail do administrador.

### 3. **Configuração do Envio de E-mails**
Foi configurado o envio de e-mails através do **Nodemailer**. Quando o formulário é enviado, o Nodemailer se conecta ao Gmail e envia as informações para um endereço de e-mail configurado.

### 4. **rotas de links em url criadas tbm, por favor não alterar pela mor de jesus cristo kkkkk**

### 5. **não precisa instalar o tailwind, ja ta configurando com a linkagem no <header>**

### 6. **ajustar rotas de imgs, deixa com o pai que amanha eu vejo essa função ***

#### Para configurar o envio de e-mails, o seguinte foi feito:
- Instalação do Nodemailer:
  ```bash
  npm install nodemailer
