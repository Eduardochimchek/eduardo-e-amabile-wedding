# Eduardo & Amábile | Casamento

Site oficial do casamento de **Eduardo Chimchek Jeronimo** & **Amábile Lacombe Borges**.

Um espaço elegante para compartilhar nossa história, celebrar o casamento e facilitar confirmação de presença e presentes.

> 💙 *Algumas histórias começam quando duas pessoas se conhecem. A nossa começou muito antes de imaginarmos.*

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Deploy recomendado: [Vercel](https://vercel.com/) (plano gratuito)

## Começando

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Ambiente de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint |

## Onde editar informações

Tudo o que é conteúdo editável fica centralizado:

| Arquivo | O que configura |
| --- | --- |
| `src/config/wedding.ts` | Nomes, data, local, horário, família, PIX, SEO, textos |
| `src/data/story.ts` | Capítulos da história e timeline |
| `src/data/gifts.ts` | Lista de presentes (valores, ativar/desativar) |
| `src/app/globals.css` | Design tokens (cores, espaçamento, tipografia) |

### Data do casamento

A data `13/03` está em `src/config/wedding.ts`. O **ano** só deve ser preenchido quando estiver confirmado (`date.year`).

### Local, horário e traje

Campos opcionais em `weddingConfig.details`. Se estiverem vazios, o site **não inventa** informações: mostra apenas o que estiver configurado.

### PIX / pagamento

Em `weddingConfig.payment`:

1. Defina `enabled: true`
2. Preencha apenas dados **públicos** da chave PIX (`pix.key`, `beneficiaryName`, etc.)
3. Opcionalmente adicione um QR Code em `public/images/wedding/` e referencie em `pix.qrCodeSrc`

Nunca coloque tokens, senhas ou credenciais bancárias no frontend ou no Git.

## Imagens

Estrutura preparada em `public/images/`:

```
public/images/
  couple/
  family/
  wedding/
  gifts/
```

Veja `public/images/README.md` para o passo a passo. Até haver fotos reais, o site usa placeholders elegantes.

## RSVP

O formulário envia para `POST /api/rsvp`.

- Sem backend configurado: o site informa com clareza que a integração ainda será conectada (não finge sucesso).
- Para ativar: configure `RSVP_WEBHOOK_URL` (veja `.env.example`) na Vercel.
- Proteções: honeypot, validação/clamp server-side e rate limit em memória por instância.
- Limitação: o rate limit em memória **não é global** entre todas as instâncias serverless da Vercel. Para proteção mais robusta no futuro, use um serviço externo gratuito (ex.: Upstash).

## Variáveis de ambiente

Copie o exemplo:

```bash
cp .env.example .env.local
```

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, Open Graph, sitemap, robots) |
| `RSVP_WEBHOOK_URL` | Webhook que recebe o JSON do RSVP |

Arquivos `.env*` locais estão no `.gitignore` (exceto `.env.example`).

## Testes

```bash
npm test
```

Smoke tests leves (Node nativo) para validação de RSVP e descrição da família.

## Identidade visual

Design tokens oficiais:

- Azul royal `#1E3A8A`
- Azul médio `#4F7DBA`
- Azul serenity `#8FAFC5`
- Azul profundo `#2F485D`
- Branco quente `#F7F4EE`
- Verde sálvia `#7D8A70`
- Champagne `#D8C6A5`
- Dourado suave `#C5A66A`

Tipografia:

- Títulos: **Cormorant Garamond**
- Interface: **Montserrat**

## Deploy na Vercel

1. Importe o repositório no [Vercel](https://vercel.com/new)
2. Framework: Next.js (detectado automaticamente)
3. Configure `RSVP_WEBHOOK_URL` se for usar RSVP
4. Deploy

```bash
npm run build
```

deve passar localmente antes do deploy.

## Estrutura

```
src/
  app/           # rotas, layout, metadata, API RSVP
  components/    # seções da página e UI
  config/        # configuração central do casamento
  data/          # história, timeline, presentes
  hooks/         # utilitários client (reveal)
  lib/           # helpers
  types/         # tipagem TypeScript
public/images/   # fotos reais (quando disponíveis)
```

## Segurança

- Sem API keys no frontend
- Sem secrets no Git
- PIX apenas com dados públicos
- `.env` ignorado pelo Git

## Licença

MIT. Veja [LICENSE](./LICENSE).
