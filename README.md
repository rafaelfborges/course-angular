# Minha Lista de Filmes

Projeto desenvolvido no curso de Angular Intermediário da [Digital Innovation One](https://digitalinnovation.one/). Constiste em um sistema de filmes, com a possibilidade de cadastros, edições, listagem e visualização dos cursos de outros usuários.

<details>
  <summary>Clique para ver uma preview do projeto.</summary>
  
  ## Preview
  1. Tela de listagem de filmes
  ![Minha Lista de Filmes - Home](/demo/preview-home.png)

2. Tela de cadastro de filmes
   ![Minha Lista de Filmes - Cadastro](/demo/preview-cadastro.png)

3. Filtros de pesquisa
   ![Minha Lista de Filmes - Pesquisa](/demo/preview-pesquisa.png)
   </details>

## Instalação

```sh
$ git clone https://github.com/rafaelfborges/course-angular.git
$ yarn install
```

## Simulando o Back-end

Esse projeto utiliza o JSON Server para simular um backend. Para instalar e executar, digite:

```sh
$ yarn global add json-serve
$ json-server --watch db.json
```

Um servidor será inicializado na url `http://localhost:3000/`, após a inicialização sera possível realizar requisições http.

## Executando a aplicação

```sh
$ ng serve
```

## Build

Execute `ng build` para gerar o compilado do projeto. O projeto vai ser criado dentro do diretório `dist/`. Adicionar `--prod` junto comando de build para gerar minificado e pronto para o ambiente de produção.
