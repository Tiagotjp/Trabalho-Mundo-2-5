# RPG0012 - Vamos colocar o framework para acessar um banco!

Servidor baseado em Express e Mongoose, acessando o banco de dados
MongoDB, e front-ends baseados em React JS, Next JS e Angular.

## Objetivos da prática

A partir dos objetivos listados abaixo, no final do projeto, você terá criado um
servidor baseado em Express e Mongoogse, com acesso ao banco de dados
MongoDB, além de utilizar diversas tecnologias para implementar o front-end,
tornando-se capacitado para lidar com plataformas de desenvolvimento variadas,
e satisfazendo às necessidades de um mercado cada vez mais heterogêneo:

* Utilizar o banco de dados MongoDB para a criação de repositório NoSQL
* Implementar servidor baseado em Express e Mongoose
* Implementar biblioteca cliente de acesso em Java Script
* Utilizar front-ends baseados em React JS, Next JS e Angular

## Materiais necessários para a prática

* Computador com acesso à internet;
* Editor de código Visual Studio Code;
* Banco de dados MongoDB e ferramenta Compass;
* Ambiente de desenvolvimento NodeJS;
* Navegador de internet instalado no computador.
  
## Desenvolvimento da prática

### 👉 1º Procedimento | Criando o Servidor com Express e Mogoose

* Crie o banco de dados livraria, e a coleção livros, no MongoDB Compass,
através da opção Create Database, como na imagem seguinte:

Resultado Esperado:

![0001111](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/d1901632-8bac-4fce-bb5b-fb25340ded45)

* Crie o aplicativo livros-servidor, baseado em Node JS, com Express e Mongoose:
  
* Em "livro-schema.js", importar a conexão efetuada na variável banco e definir
a estrutura do banco, na variável LivroSchema, instanciando um objeto do
tipo banco.Schema, e passando a estrutura no formato JSON.

Resultado Esperado: 

![0002222](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/7d2fa419-7918-4fcc-b245-c14784e1a962)

* Configurar o sistema de CORS, definindo uma variável cors, que receberá a
biblioteca de mesmo nome, antes de instanciar app, e utilizá-la pelo app logo
após instanciar, através do método use, mantendo a configuração padrão,
onde temos acesso a partir de qualquer porta ou endereço.

Resultado Esperado: 

![rte56](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/f4626497-eb46-474c-abc8-c4e9c599c0f3)


* Execute o servidor com npm start, e teste as chamadas através do Postman ou
do Boomerang, lembrando que apenas o método GET pode ser verificado através
do navegador:

![00003333](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/ac192781-29ca-4488-bc0b-84ef1f51f379)

![000444](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/acde5476-c876-4f41-806b-0cb56f0dbf12)

## 👉 2º Procedimento | Alteração dos Projetos Clientes

* Crie um diretório denominado clientes, e copiar para dentro dele os projetos
livros-react, livros-next e livros-angular;

* Definir a interface LivroMongo, para compatibilizar o tipo de Livro às
chamadas para o servidor, contendo os atributos apresentados a seguir:


![00005555](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/593f8758-842e-46cc-92e2-da567a9f7e47)


* Com o projeto livro-servidor em execução, iniciar a execução da nova versão de
livros-react com npm start, e testar as funcionalidades através de um navegador,
acessando o endereço http://localhost:3000

![0006666](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/60a77e15-e03d-4c06-ae50-4a09ea02c4a9)


### Observação

É importante analisar a grande similaridade com o código utilizado na classe
LivroLista, na nova versão de livros-react, diferenciando-se apenas pelo uso de
tipos, devido à adoção do Type Script.

* Com o projeto livro-servidor em execução, iniciar a execução da nova versão de
livros-next via comando npm run dev, e testar as funcionalidades através de um
navegador, acessando o endereço http://localhost:3000
![000007777](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/6f2e035c-6a0d-40c8-9051-9955682901c0)

* Definir a interface LivroMongo, para compatibilizar o tipo de Livro às
chamadas para o servidor, contendo os atributos apresentados a seguir:

![000088888](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/188d720a-6049-4e07-995c-1ebaed9c6b84)

### Observação

Os três métodos podem ser simplesmente copiados da nova versão de
ControleLivros, na versão alterada de livros-react, pois não há nenhuma diferença
em termos de código-fonte.


* Com o projeto livro-servidor em execução, inicie a execução da nova versão de
livros-angular via comando ng serve, e teste as funcionalidades através de um
navegador, acessando o endereço http://localhost:4200

![00009999](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/26d30123-bd68-436a-a04d-a8c9f666fd63)

Resultados esperados da prática

* É importante que o código seja organizado;
* Explore as funcionalidades do Visual Studio Code para facilitar o
desenvolvimento da prática;
* Nessa missão, é esperado que você demonstre habilidades básicas para:
*construção de servidores com base em Express e Mongoose
* integrar diferentes tipos de front-end ao back-end baseado em protocolo
HTTP

![iiiiiiiiiii](https://github.com/Tiagotjp/Trabalho-Mundo-2-5/assets/132152335/bb6d8bde-2393-45b3-87c4-0a0298862514)


