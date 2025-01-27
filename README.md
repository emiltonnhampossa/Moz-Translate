# Moz Translate

Moz Translate é uma biblioteca e ferramenta CLI projetada para facilitar traduções entre Português, Inglês e Changana. Você também pode adicionar novas traduções usando um CLI simples e usar um servidor Fastify para hospedar sua API de tradução localmente.

---

## Funcionalidades

- Traduções pré-definidas entre Português, Inglês e Changana.
- CLI para adicionar novas traduções diretamente no arquivo de dados.
- Servidor Fastify para expor a API de tradução.

---

## Requisitos

- Node.js (v18 ou superior)
- TypeScript
- NPM ou Yarn

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/moz-translate.git
   cd moz-translate
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Compile o TypeScript (opcional, para gerar arquivos em `dist/`):
   ```bash
   npm run build
   ```

---

## Uso

### CLI

O CLI permite adicionar novas traduções ao arquivo JSON. Para rodar o CLI, use o seguinte comando:

```bash
npx ts-node src/cli/cli.ts
```

#### Exemplo:

1. Ao executar o comando acima, siga as instruções no terminal para:
   - Inserir uma palavra em Português.
   - Inserir a tradução correspondente em Changana.
   - Inserir a tradução correspondente em Inglês.

2. A nova tradução será salva automaticamente no arquivo `data/translations.json`.

---

### Servidor Fastify

Você pode iniciar um servidor local para expor a API de tradução.

1. Para rodar o servidor:
   ```bash
   npx ts-node src/server/server.ts
   ```

2. O servidor será iniciado (por padrão) em `http://localhost:3000`.

#### Rotas Disponíveis

- **GET `/translate`**: Busca uma tradução.
  - Parâmetros de consulta:
    - `word`: A palavra que deseja traduzir.
    - `lang`: O idioma de destino (`changana` ou `english`).
  
  **Exemplo:**
  ```bash
  curl "http://localhost:3000/translate?word=olá&lang=changana"
  ```

  **Resposta:**
  ```json
  {
    "word": "olá",
    "translation": "xabonga"
  }
  ```

---

## Estrutura do Projeto

```plaintext
moz-translate/
├── src/
│   ├── cli/
│   │   └── cli.ts        # CLI para adicionar traduções
│   ├── server/
│   │   └── server.ts     # Servidor Fastify
│   ├── core/
│   │   └── translation.ts # Lógica principal de tradução
│   └── data/
│       └── translations.json # Base de dados das traduções
├── package.json          # Configurações do projeto
├── tsconfig.json         # Configurações do TypeScript
└── README.md             # Documentação
```

---

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch para sua funcionalidade ou correção:
   ```bash
   git checkout -b minha-contribuicao
   ```
3. Faça suas modificações e commite:
   ```bash
   git commit -m "Adiciona nova funcionalidade X"
   ```
4. Envie para seu fork:
   ```bash
   git push origin minha-contribuicao
   ```
5. Abra um Pull Request neste repositório.

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

