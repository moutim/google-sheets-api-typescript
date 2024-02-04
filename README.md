# Google Sheets API - Manipulação de Planilhas 📊🔧

Este projeto proporciona a manipulação eficiente de planilhas do Google por meio da Google Sheets API. Focado na gestão de dados de estudantes, oferece funcionalidades cruciais para buscar informações, adicionar novos estudantes e calcular médias com base nos dados fornecidos.

## Documentação e deploy

O deploy da aplicação foi feita no Render (geralmente o servidor leva 1-2 minutos pra ligar).

Acesse a planilha e faça uma requisição na documentação para ver os dados sendo inseridos em tempo real!
[Link da planilha](https://docs.google.com/spreadsheets/d/1FNNI45t6LVj7AMTtqXBHEYhh85fA69J4SO-PmrA40pc/edit#gid=0)

A documentação dessa API foi feita por meio do Swagger. 
[Documentação completa](https://google-sheets-api-4cr8.onrender.com/documentation/)

![image](https://github.com/moutim/case-psel-tunts-rocks/assets/88093439/a254beb8-6331-40d9-b691-92ff59c94669)

## Funcionalidades da API 🚀

### 1. Dados dos Estudantes (Endpoint: `/read/students`)
   - Recupera informações dos estudantes inseridos na planilha.

   Exemplo de resposta:
   ```json
   {
       "id": 1,
       "name": "Eduardo",
       "studyArea": "Engenharia de Software",
       "absences": 8,
       "test1": 35,
       "test2": 63,
       "test3": 61,
       "status": "Exame Final",
       "finalApprovalScore": 18
   }
   ```

### 2. Adição de Novos Estudantes (Endpoint: `/create/students`)
   - Permite a inclusão de novos registros na planilha e atualiza instantaneamente.

   Exemplo de resposta:
   ```json
   {
       "message": "Student created successfully."
   }
   ```

### 3. Cálculo de Média e Situação (Endpoint: `/calculate/average`)
   - Realiza o cálculo automático da média e determina a situação de cada estudante com base nos dados da planilha.

   Exemplo de resposta:
   ```json
   {
       "message": "Grade average updated successfully!"
   }
   ```

## Tecnologias Utilizadas 🛠️

- **TypeScript:** Linguagem de programação para desenvolvimento seguro e escalável.
- **Express:** Framework web para construir aplicativos robustos e escaláveis.
- **Swagger:** Facilita a documentação da API e interação com seus endpoints.
- **Mocha, Chai e Sinon:** Conjunto de ferramentas para testes unitários e mocks.
- **Google APIs:** Integração com a API do Google Sheets para manipulação eficiente de planilhas.

## Testes na Camada de Service ⚙️

Os testes foram adicionados na camada de serviço (Service) da API para garantir a correta execução das regras de negócio.

```bash
npm run test
```

 ## Rodando localmente
  Requisitos:
  * Possuir Node.JS instalado;

```bash
npm run dev
```
Acesse a API localmente em [http://localhost:5000/documentation](http://localhost:5000) após executar o comando acima.
