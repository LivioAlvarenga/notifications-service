<h1 align="center"> 
<img src="./files/logo.svg" height=20 alt="logo ignite lab">
	 - Back-end Serviço de Notificações com NestJs, Apache Kafka, Upstash, TypeScript, Prisma e Jest
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-vitrine-dev">Vitrine Dev</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-instalação">Instalações</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

&nbsp;

![Capa](https://github.com/LivioAlvarenga/notifications-service/blob/master/files/capa.png?raw=true#vitrinedev)

&nbsp;
<a id="-sobre-o-projeto"></a>

## 💻 Sobre o projeto

🚀 É um micro-serviço de notificações com NestJs, Apache Kafka, Upstash, TypeScript, Prisma e Jest. Este projeto faz parte do ignite-lad da RocketSeat.

Possui as funcionalidades de:
* Criar Notificações;
* Ver Notificações;
* Cancelar Notificações;
* Marcar Notificação como Lida;
* Marcar Notificação como não lida;
* Contar Notificações;

Criamos nossa estrutura como:
- Kafka producer - Ao rodar o script kafka-producer.js enviamos uma notificação para o Topics do servidor kafka Upstash, esta notificação foi configurada para se manter no servidor ate 7 dias.

- Prisma - Utilizei o Prisma como ORM e para ambiente de desenvolvimento utilizei o SQLite.

- Test - Utilizei o JestJs para realizar os testes, são 13 testes no total.

- Insomnia - Testei as rotas com Insomnia são 6 rotas no total.

- SRC/app - Temos nossas entidades, repositórios e use-cases.

- SRC/infra - simulação de database para testarmos a aplicação sem subir banco de dados. Temos nosso http que é nossa aplicação e também temos a messaging que é a nossa conexão com kafka.

O objetivo foi realizar um micro-serviço que não precisamos subir banco de dados para testar, que tenha um banco de dados com um ORM, que seja interligado ao kafka para protegermos a integridade do serviço, assim mantemos as notificações salva ate que nosso serviço volte a funcionar. Também era objetivo criar o projeto com testes, bem modulado.

O projeto é escalável, testável e seguro. Foi um grande desafio fazer a integração de todas as ferramentas e trabalhar com um projeto que poderia ser escalável.



&nbsp;

<p align="center">
  <a href="#license"><img src="https://img.shields.io/github/license/LivioAlvarenga/notifications-service?color=ff0000"></a>
  <a href="https://github.com/LivioAlvarenga/notifications-service/issues"><img src="https://img.shields.io/github/issues/LivioAlvarenga/notifications-service" alt="issue site alurabooks" /></a>
  <a href="https://github.com/LivioAlvarenga/notifications-service"><img src="https://img.shields.io/github/languages/count/LivioAlvarenga/notifications-service" alt="total amount of programming languages used in the project" /></a>
  <a href="https://github.com/LivioAlvarenga/notifications-service"><img src="https://img.shields.io/github/languages/top/LivioAlvarenga/notifications-service" alt="most used language in the projects" /></a>
  <a href="https://github.com/LivioAlvarenga/notifications-service"><img src="https://img.shields.io/github/repo-size/LivioAlvarenga/notifications-service" alt="repository size" /></a>
<p>

---

&nbsp;
<a id="-vitrine-dev"></a>

## 📺 Vitrine Dev

| :placard: Vitrine.Dev |                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| :sparkles: Nome       | **Back-end Serviço de Notificações com NestJs, Apache Kafka, Upstash, TypeScript, Prisma e Jest** |
| :label: Tecnologias   | Nestjs, Apache Kafka, Upstash, NodeJs, Typescript, Javascript, Jest, Prisma, Prettier, Eslint     |

---

&nbsp;
<a id="-tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto

&nbsp;

<p align="center">
  <a href= "https://nestjs.com/"><img alt="NestJs badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E0234E&logo=NestJs&label=Framework&message=NestJs&color=E0234E"></a>
  <a href= "https://kafka.apache.org/"><img alt="Apache Kafka badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=231F20E&logo=Apache Kafka&label=Distributed event streaming platformk&message=Apache Kafka&color=231F20"></a>
  <a href= "https://upstash.com/"><img alt="Upstash badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=00E9A3E&logo=Upstash&label=Serverless Data&message=Upstash&color=00E9A3"></a>
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://www.typescriptlang.org/"><img alt="TypeScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=3178c6&logo=TypeScript&label=Language&message=TypeScript&color=3178c6"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://jestjs.io/pt-BR/"><img alt="JestJs badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=C21325&logo=Jest&label=Test&message=JestJs&color=C21325"></a>
  <a href= "https://www.prisma.io/"><img alt="Prisma badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=2d3748&logo=Prisma&label=ORM&message=Prisma&color=2d3748"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
  <a href= "https://eslint.org/"><img alt="code standardization eslint" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=4B32C3&logo=ESLint&label=Code Standardization&message=ESLint&color=4B32C3"></a>
</p>

---

&nbsp;
<a id="-instalação"></a>

## ⚙️ Instalações

Instalando CLI do NestJs de forma global

```bash
npm i -g @nestjs/cli
```

Instalando modulo de Microservices do Nestjs

```bash
npm i --save @nestjs/microservices
```

Criando projeto com Nestjs

```bash
nest new notifications-service
```

Instalando KafkaJs

```bash
npm i kafkajs
```

Instalando Prisma

```bash
npm i prisma -D
npm i @prisma/client
```

Integrando o prisma com [NestJs](https://docs.nestjs.com/recipes/prisma). Crie um arquivo dentro de src **prisma.service.ts**

```bash
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
```

Instalando validadores [class-validator](https://github.com/typestack/class-validator) e [class-transformer](hhttps://github.com/typestack/class-transformer).

```bash
npm i class-validator class-transformer
```

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

### Running the app

```bash
# development (http://localhost:3000/)
$ npm run start

# watch mode (http://localhost:3000/)
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# unit tests with watch
$ npm run test:watch

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### ORM Prisma

```bash
# Criando BD prisma
npx prisma init --datasource-provider SQLite

# criando/atualizando as tabelas do BD no prisma
npx prisma migrate dev
# Enter a name for the new migration: » created tab Notification

# prisma studio (Verificar tabelas e realizar CRUD manual)
npx prisma studio
# ou
npx prisma studio -b firefox -p 5173
# -b firefox p/ especificar navegador
# -p 5173 p/ especificar porta
```

### Kafka-producer

```bash
# Abrindo pasta Kafka-producer e executando o producer
cd Kafka-producer
node kafka-producer.js
```

---

&nbsp;
<a id="-autor"></a>

## 🦸 Autor

Olá, eu sou Livio Alvarenga, Engenheiro de Produção | Dev Back-end e Front-end. Sou aficcionado por tecnologia, programação, processos e planejamento. Uni todas essas paixões em uma só profissão. Dúvidas, sugestões e críticas são super bem vindas. Seguem meus contatos.

- [www.livioalvarenga.com](https://livioalvarenga.com)
- contato@livioalvarenga.com

&nbsp;

<p align="center">
  <a href= "https://www.livioalvarenga.com/"><img alt="portifólio livio alvarenga" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/3109a24e71f07dbad193ae0ddbc43b69b39c7adf/files/badgePortifolioLivio.svg"></a>
  <a href= "https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/"><img alt="perfil linkedin livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=0A66C2&logo=LinkedIn&label=LinkedIn&message=Livio Alvarenga&color=0A66C2"></a>
  <a href= "https://twitter.com/AlvarengaLivio"><img alt="perfil twitter livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1DA1F2&logo=Twitter&label=Twitter&message=@AlvarengaLivio&color=1DA1F2"></a>
  <a href= "https://www.instagram.com/livio_alvarenga/"><img alt="perfil instagram livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E4405F&logo=Instagram&label=Instagram&message=@livio_alvarenga&color=E4405F"></a>
  <a href= "https://www.facebook.com/profile.php?id=100083957091312"><img alt="perfil facebook livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1877F2&logo=Facebook&label=Facebook&message=Livio Alvarenga&color=1877F2"></a>
  <a href= "https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg"><img alt="perfil youtube livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=FF0000&logo=YouTube&label=Youtube&message=Livio Alvarenga&color=FF0000"></a>
</p>
<p align="center">
 <a href= "https://cursos.alura.com.br/vitrinedev/livioalvarenga"><img alt="perfil vitrinedev livio alvarenga" align="center" height="30" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/e0f5b5a82976af114d957c20f0c78b4d304a68a0/files/vitrinedev.svg"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).

##### _#CompartilheConhecimento_
