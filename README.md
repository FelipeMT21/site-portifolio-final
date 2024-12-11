# Felipe Site Portifólio 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/FelipeMT21/site-portifolio-final/blob/main/LICENSE) 

# Sobre o projeto

Acesse: [Felipe Site Portfólio](https://felipedev.familiaweb.com.br/)

Felipe Site Portfólio é uma aplicação web full-stack construída para aplicar todo o conhecimento adquirido no meu desenvolvimento como Desenvolvedor.

O site funciona como um portfólio online, apresentando um pouco sobre mim e os projetos que desenvolvi ao longo da minha jornada. Seu front-end foi desenvolvido utilizando o framework Angular, hospedado na Hostinger, enquanto o back-end (API) foi construído em Java 21 com Spring Boot e Maven, hospedado na EC2 da AWS. O banco de dados foi implementado no MySQL, também hospedado na Hostinger.

Atualmente, o site está em desenvolvimento, mas já cumpre a função principal de apresentar informações sobre mim e meus projetos. 😉

## Layout mobile
![Mobile 1](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Mobile/Mobile%20Hero.png) ![Mobile 2](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Mobile/Mobile%20About.png) ![Mobile 3](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Mobile/Mobile%20Projects.png) ![Mobile 4](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Mobile/Mobile%20Skills.png)

## Layout web
![Web 1](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Desktop/Desktop%20Hero.png)

![Web 2](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Desktop/Desktop%20About.png)

![Web 3](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Desktop/Desktop%20Projects.png)

![Web 4](https://github.com/FelipeMT21/assets/blob/main/SITE/Public/Desktop/Desktop%20Skills.png)

## Funcionalidades Implementadas
- Exibição de informações sobre mim
- Exibição de projetos realizados
- Layout responsivo para dispositivos móveis e desktops
- Integração entre o front-end em Angular e a API em Spring Boot

## Desafios e Soluções
Durante o desenvolvimento, enfrentei diversos desafios. Um dos mais significativos foi realizar o deploy do backend na EC2 da AWS. Além de estudar detalhadamente a documentação da AWS, precisei iniciar um curso sobre a plataforma para compreender como fazer o deploy da minha API. Durante esse processo, aprendi muito, principalmente sobre segurança de dados, como restringir o acesso da API a determinados IPs, torná-la escalável e evitar quedas de servidores.

Após concluir o deploy, enfrentei outro grande desafio: transformar minha API de HTTP para HTTPS sem utilizar o Route 53. Como já possuía um domínio na Hostinger, optei por integrar a AWS com a Hostinger. Esse processo exigiu um aprofundamento em DNS e na adaptação da minha API para funcionar corretamente com a Hostinger, visto que a maioria das aulas que consultei utilizava o Route 53.

## Planos Futuros
- Adicionar funcionalidades para gerenciar projetos diretamente na interface do usuário.
- Melhorar o design com animações e transições mais sofisticadas.
- Implementar suporte multilíngue (português e inglês), permitindo que o usuário escolha o idioma do site.

# Tecnologias utilizadas
## Front end
- HTML / CSS / TypeScript
- Angular
- RxJS
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Implantação em Teste
- Back end: localhost:8080/projects
- Front end: localhost:4200
- Banco de dados H2 ou MySQL  
## Implantação em produção
- Back end: EC2 AWS
- Front end web: Hostinger
- Banco de dados MySQL: Hostinger

# Como executar o projeto

## Back end
Pré-requisitos: Java 21

```bash
# Clonar o repositório
HTTPS: git clone https://github.com/FelipeMT21/projects-springboot3-jpa.git
SSH: git clone git@github.com:FelipeMT21/projects-springboot3-jpa.git

# Escolha uma IDE para editar. Utilizando IDE Eclipse:
# Entre na pasta do projeto back-end
projects-springboot3-jpa/

# Acesse a classe CorsConfig
Sinta-se à vontade para excluir os links em allowedOrigins e adicionar o link do seu front-end para liberar o acesso das requisições front-end para o back-end.

# Acesse a classe ProjectResources
Faça a mesma alteração em @CrossOrigin(origins = seu-link-frontend)

# Prepare o banco na aplicação
# H2
Vá em src/main/resources/application.properties e mude 'dev' para 'test' (isso ativará a application-test.properties).
spring.profiles.active=test

# A classe TestConfig cria os dados de teste para o banco H2.

# Executar o projeto
Clique com o botão direito na aplicação e selecione "Run As > Spring Boot App".

# Em seguida, use o link http://localhost:8080/h2-console/ e clique em "Connect" para acessar o banco ou use http://localhost:8080/projects para verificar o funcionamento do método GET.

# Recomendo utilizar o Postman para realizar as requisições.
```

## Front end web
Pré-requisitos: npm

```bash
Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.4.

# Clonar o repositório
HTTPS: git clone https://github.com/FelipeMT21/site-portifolio-final.git
SSH: git clone git@github.com:FelipeMT21/site-portifolio-final.git

# Entrar na pasta do projeto front-end web com alguma IDE
cd site-portifolio-final

# Instalar as dependências
npm install ou npm i

# Executar o projeto
Execute o comando `ng serve` para iniciar o servidor de desenvolvimento. Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente caso você faça alguma alteração nos arquivos fonte.
```

# Autor

João Felipe Martins da Silva

https://www.linkedin.com/in/jo%C3%A3o-felipe-1028aa210
