# Projeto Node.js Express – Estrutura Modular

## Descrição

Este projeto é um exemplo de API RESTful desenvolvida em Node.js utilizando o framework Express, com organização modular para facilitar a escalabilidade e manutenção. O foco é a gestão de produtos, mas a estrutura permite fácil expansão para outros módulos, como clientes.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **dotenv** (variáveis de ambiente)
- **JavaScript (ES Modules)**

---

## Estrutura de Pastas

```
aula03/
│
├── index.js                # Ponto de entrada da aplicação
├── package.json
├── .gitignore
├── README.md
│
├── docs/                   # Documentação e convenções do projeto
│   └── convencoes.md
│
└── src/
    ├── config/
    │   └── database.js     # Simulação de banco de dados (array em memória)
    │
    └── modules/
        ├── cliente/        # (Futuro) Módulo para clientes
        └── produto/
            ├── controllers/
            │   └── produto.controller.js
            ├── models/
            │   └── produto.model.js
            └── routes/
                └── produto.route.js
```

---

## Organização do Projeto

- **Modularização:** Cada entidade (produto, cliente, etc.) possui sua própria pasta com controllers, models e rotas.
- **Configuração:** Arquivos de configuração e simulação de banco de dados ficam em `src/config`.
- **Documentação:** Padrões e convenções estão em `docs/convencoes.md`.

---

## Convenções

- Siga as convenções de nomenclatura descritas em `docs/convencoes.md` para arquivos, variáveis, classes e constantes.
- Utilize variáveis de ambiente para configurações sensíveis.

---

## Como Subir o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/ErickShaco/UC5-BackEnd.git
   cd UC5-BackEnd/aula03
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz de `aula03` (se necessário).
   - Exemplo:
     ```
     PORT=3000
     ```

4. **Inicie o servidor:**
   ```sh
   node index.js
   ```
   Ou, se usar scripts no `package.json`:
   ```sh
   npm start
   ```

5. **Acesse a API:**
   - Por padrão, estará disponível em `http://localhost:3000`

---

## Expansão

- Para adicionar novos módulos (ex: clientes), crie as pastas `controllers`, `models` e `routes` dentro de `src/modules/cliente`.
- Siga o padrão já estabelecido no módulo de produtos.

---

## Licença

Este projeto está licenciado sob os termos do ISC License.
