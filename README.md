# 🍕 Tostata — Precificação Inteligente

App web estático para gestão de fichas técnicas, insumos, precificação e vendas da pizzaria Tostata.

## Funcionalidades

- **Dashboard** — KPIs gerais do cardápio (custo médio, margem, CMV)
- **Fichas Técnicas** — Catálogo de produtos com busca, filtros por categoria e modal de detalhes
- **Insumos e Estoque** — Cadastro de ingredientes, controle de estoque, registro de compras
- **Precificador** — Criação/edição de produtos com seleção de insumos, cálculo automático de custos, margem e CMV. Gerenciamento dinâmico de categorias
- **Vendas** — Registro de vendas, comissão da casa (30%), gráfico por período (seleção De/Até), exportação CSV, gerenciamento de vendedores

## Tecnologia

HTML + CSS + JavaScript puro. Sem dependências externas, sem build step. Dados persistidos em `localStorage`.

## Deploy

Ativar GitHub Pages em **Settings → Pages → Deploy from branch `main`, pasta `/`**.

## Desenvolvimento Local

Abra `index.html` no navegador. Nenhum servidor necessário.
