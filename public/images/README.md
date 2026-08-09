# Imagens do casamento

Coloque aqui as fotos reais do casal, da família e do casamento.

## Pastas

| Pasta | Uso |
| --- | --- |
| `couple/` | Fotos de Eduardo e Amábile |
| `family/` | Fotos de Lili, Mili e família |
| `wedding/` | Detalhes do casamento, Open Graph, QR Code PIX |
| `gifts/` | Imagens opcionais da lista de presentes |

## Como ativar no site

1. Adicione o arquivo (ex.: `public/images/family/lili.jpg`)
2. Em `src/config/wedding.ts`, descomente / preencha `imageSrc`:

```ts
{
  id: "lili",
  name: "Lili",
  role: "child",
  imageSrc: "/images/family/lili.jpg",
  imageAlt: "Foto de Lili",
}
```

Enquanto `imageSrc` estiver vazio, o site mostra placeholders elegantes.

## Boas práticas

- Prefira JPG/WebP otimizados
- Evite arquivos muito pesados no mobile (ideal < 500KB por foto)
- Não use fotos genéricas de banco de imagens como se fossem do casal
