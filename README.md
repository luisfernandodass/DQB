# DolarQuoteBook

## Passo a passo para rodar localmente

1. Instale na sua máquina o Angular CLI, TypeScript e o npm
2. Rode `build:mfe-buy || ng build --prod --project mfe-buy --single-bundle --output-hashing none`
3. Rode `build:mfe-sell || ng build --prod --project mfe-sell --single-bundle --output-hashing none`
4. Dentro do app Angular (dolarQuoteBook), rode `npx live-server ./dist`, este comando gera um servidor para os mfes, geralmente na porta: **http://127.0.0.1:8080/**
5. Rode `npm run start || ng serve`, agora o app está rodando na sua máquina, geralmente na porta: **http://localhost:4200/**
