# Imagens do casamento

Coloque aqui as fotos reais do casal, da família e do casamento.

## Pastas

| Pasta | Uso |
| --- | --- |
| `couple/` | Fotos de Eduardo e Amábile |
| `family/` | Fotos de Lili, Mili e família |
| `wedding/` | Detalhes do casamento, Open Graph, QR Code PIX |
| `gifts/` | Imagens da lista de presentes (humor / itens simbólicos) |

## Como ativar no site

1. Adicione o arquivo (ex.: `public/images/family/lili.png`)
2. Em `src/config/wedding.ts`, preencha `imageSrc` (casal em `couple.imageSrc`; pets em `family[]`).

Fotos atuais:

| Arquivo | Uso |
| --- | --- |
| `couple/eduardo-amabile.jpg` | Hero + seção Família |
| `family/lili.jpg` | Lili |
| `family/mili.jpg` | Mili |
| `wedding/venue-exterior.jpg` | Paróquia Nossa Senhora da Salete (CC BY-SA 3.0, Alcimar Callegari) |
| `wedding/og.jpg` | Open Graph |

Enquanto `imageSrc` estiver vazio, o site mostra placeholders elegantes.

## Boas práticas

- Prefira JPG/WebP otimizados
- Evite arquivos muito pesados no mobile (ideal < 500KB por foto)
- Não use fotos genéricas de banco de imagens como se fossem do casal
