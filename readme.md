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
  

### 21/01. **atualização de ajuste pequenos no site**
  ## Alterações Realizadas

### 1. **Alteração de Cores**
Alteramos a paleta de cores do site para deixá-lo mais moderno e atraente, com a cor principal definida como `#6F2C3E`.

### 2. **Estrutura do Formulário de Contato (Fale Conosco)**
Foi implementado um formulário de contato na página `talkme.html`, onde os usuários podem preencher seus dados (nome, e-mail, mensagem). O formulário agora permite o envio de arquivos juntamente com a mensagem.

### 3. **Configuração do Envio de E-mails**
Foi configurado o envio de e-mails usando **Nodemailer**. Quando o formulário é enviado, as informações (incluindo arquivos) são enviadas para o e-mail do administrador.

### 4. **Alteração nas Rotas de Linkagem de Imagens**
Foi feita a alteração nas rotas de linkagem de imagens para garantir que o carregamento das imagens seja feito corretamente. Porém, a parte da funcionalidade de imagens será revisada mais tarde. **Deixe com o pai, amanhã vejo isso**.

### 5. **Adição de Cookies**
Foi implementada a funcionalidade de cookies. Agora, ao acessar o site, será exibida uma mensagem pedindo consentimento para o uso de cookies, e o consentimento será mantido nas próximas visitas, não sendo necessário pedir toda vez que a página for atualizada.

### 6. **Separação do Código JavaScript**
O código JavaScript foi separado em arquivos distintos para organizar melhor o código e facilitar a manutenção do projeto. Os scripts agora estão divididos para funcionalidades específicas.

### 7. **Ajustes no `server.js`**
Foram feitos ajustes no arquivo `server.js` para garantir o correto funcionamento do envio de e-mails, cookies e outras funcionalidades do servidor. A configuração foi atualizada para garantir que tudo esteja funcionando corretamente.

### 8. **Rotas de Links em URL**
Foram criadas as rotas de links em URL para garantir que todas as páginas possam ser acessadas corretamente. **Por favor, não altere essas rotas** para garantir que o fluxo do site funcione sem problemas.

### 9. **Configuração do Tailwind CSS**
Não é necessário instalar o Tailwind CSS, pois ele já está configurado corretamente no `<header>` do projeto.

## Observações

**OBS: Rafael, não altere a cor pela mor de Deus kkkkkk e nem mexe no arquivo do `server.js`, foca em separar o script do html e fazer funcionar kkkk!**


