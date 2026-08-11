# PHASE 06 — UI ARCHITECTURE
## CLIENT: Entrelinhas Store
**Document Version:** 1.0  
**Status:** Approved / Architecture Complete  
**Authoring Roles:** Information Architect, UX Designer, UI Architect, Front-end Architect  

---

### EXECUTIVE SUMMARY

This document defines the complete UI architecture, DOM section hierarchy, grid layouts, responsive behaviors, and component specifications for the **Entrelinhas Store** landing page.

It bridges planning and implementation, ensuring that the front-end engineering phase requires **zero improvisation**. Every section has a documented justification, mapped assets, visual priority, responsive grid rules, and explicit state behaviors.

---

### 1. PAGE ARCHITECTURE OVERVIEW

The page follows a custom narrative flow derived from **Direction B ("Boutique de Bairro")**:

```
┌────────────────────────────────────────────────────────────────────────┐
| #site-header            (Sticky Navigation & Header Bar)              |
├────────────────────────────────────────────────────────────────────────┤
| #hero                   (Hero Value Proposition & Lookbook Showcase)   |
├────────────────────────────────────────────────────────────────────────┤
| #trust-bar              (4-Column Heritage & Social Proof Bar)        |
├────────────────────────────────────────────────────────────────────────┤
| #diferenciais           (The Anti-Mall Difference Comparison Matrix)   |
├────────────────────────────────────────────────────────────────────────┤
| #colecao                (Fashion Collection Lookbook Grid)             |
├────────────────────────────────────────────────────────────────────────┤
| #historia               (Confecçãodesde 1998 & Uniformes Section)      |
├────────────────────────────────────────────────────────────────────────┤
| #avaliacoes             (Verified Google Reviews & Physical Store Proof)|
├────────────────────────────────────────────────────────────────────────┤
| #como-comprar           (3-Step Conversational Buying Process)         |
├────────────────────────────────────────────────────────────────────────┤
| #localizacao            (Jardim Calux Store Location & Google Maps)   |
├────────────────────────────────────────────────────────────────────────┤
| #conversao-footer       (Final Conversion Footer & Legal Credits)      |
├────────────────────────────────────────────────────────────────────────┤
| #mobile-cta-bar         (Fixed Mobile WhatsApp Sticky Bar)             |
└────────────────────────────────────────────────────────────────────────┘
```

---

### 2. DETAILED SECTION-BY-SECTION SPECIFICATIONS

---

#### SECTION 0: HEADER NAVIGATION (`#site-header`)

* **Why it exists:** Provides brand identity, persistent navigation across sections, and immediate conversion access.
* **Content:**
  * Brand Logo: [`imgi_2_...n.jpg`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_2_263782253_696149008032883_6819736531315384033_n.jpg) (White typographic mark on dark square badge, scaled to `36px` height).
  * Nav Links: `Coleção` (`#colecao`), `Diferenciais` (`#diferenciais`), `Nossa História` (`#historia`), `Avaliações` (`#avaliacoes`), `Loja Física` (`#localizacao`).
  * Primary Action: `(11) 91480-2056` WhatsApp CTA button.
* **Layout:** Flex row (`justify-content: space-between`, `align-items: center`), max-width `1200px`, padding `16px 24px`.
* **Sticky Behavior:** Fixed top (`position: sticky`, `top: 0`, `z-index: 100`). Background transitions from transparent to `rgba(250, 248, 245, 0.92)` with `backdrop-filter: blur(8px)` and `border-bottom: 1px solid #E4E0D8` when scroll position > 60px.
* **Responsive Adaptation:**
  * **Desktop (≥1024px):** Full horizontal menu bar with button CTA.
  * **Tablet (640px–1023px):** Simplified menu, WhatsApp button visible.
  * **Mobile (<640px):** Logo on left, direct compact WhatsApp icon button on right, drawer toggle for navigation links.

---

#### SECTION 1: HERO (`#hero`)

* **Why it exists:** Captures immediate attention, states the core anti-mall value proposition, highlights inclusive sizing (*para todos os manequins*), showcases top fashion assets, and drives instant WhatsApp sales.
* **Content:**
  * Eyebrow Tag: `📍 JARDIM CALUX, SÃO BERNARDO DO CAMPO • DESDE 1998`
  * H1 Headline: *"Alfaiataria e moda casual com caimento perfeito para todos os manequins."*
  * Subhead Paragraph: *"Fujam da muvuca dos shoppings e encontrem peças incríveis, elegantes e de qualidade com preço justo. Atendimento acolhedor de quem fabrica roupas e cuida de cada detalhe há mais de 25 anos no ABC."*
  * CTAs: Primary WhatsApp Button (`Falar no WhatsApp com a Entrelinhas`) + Secondary Button (`Como Chegar na Loja`).
  * Microcopy: `⭐ 5,0 no Google • 🚚 Envio p/ todo o Brasil • 🛍️ Retirada na loja`
* **Assets:**
  * Primary Feature Image: [`imgi_27_...n.webp`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_27_655832003_17982138056977362_2636896224342573827_n.webp) (Green cardigan & tailored pants set, 1440x1800 px).
  * Overlapping Accent Card: [`imgi_43_...n.webp`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_43_654159441_18061478888372050_1433158754142304570_n.webp) (White cami + green shorts, 1440x1800 px).
* **Layout:** Asymmetrical 2-column grid (`grid-template-columns: 1fr 1fr`, gap `48px`).
* **Responsive Adaptation:**
  * **Desktop (≥1024px):** 2 columns, left column text & CTAs, right column framed image composition with 1px border.
  * **Tablet (640px–1023px):** Stacked vertical columns, text first, followed by hero image showcase.
  * **Mobile (<640px):** Single column, 30px H1 typography, full-width WhatsApp CTA button.

---

#### SECTION 2: TRUST & HERITAGE BAR (`#trust-bar`)

* **Why it exists:** Provides instant, objective proof of 26-year market existence, 5.0 Google rating, inclusive sizing, and nationwide shipping.
* **Content & Structure:**
  * Card 1: `⭐ 5,0 de Avaliação` — 100% de clientes satisfeitos no Google.
  * Card 2: `🧵 Confecção desde 1998` — 26 anos de tradição em costura em SBC.
  * Card 3: `👗 Todos os Manequins` — Modelagens para valorizar todos os corpos.
  * Card 4: `🚚 Envio p/ Todo o Brasil` — Entrega rápida ou retirada na loja.
* **Layout:** 4-column grid (`grid-template-columns: repeat(4, 1fr)`), background `#F0EEEA`, border-y `1px solid #E4E0D8`.
* **Responsive Adaptation:**
  * **Desktop:** 4 columns in 1 line.
  * **Tablet:** 2×2 grid layout.
  * **Mobile:** 2×2 grid layout with compact typography.

---

#### SECTION 3: THE ANTI-MALL DIFFERENCE (`#diferenciais`)

* **Why it exists:** Overcomes the primary customer objection by contrasting shopping mall inconvenience with Entrelinhas' boutique care and fair pricing.
* **Content:**
  * H2 Headline: *"Por que comprar na Entrelinhas Store é diferente de ir ao shopping?"*
  * Comparison Table:
    * Shopping Tradicional: Muvuca, atendimento impessoal, manequins padronizados, preços inflados, estacionamento caro.
    * Entrelinhas Store: Espaço gostosinho no Jardim Calux, atendimento atencioso dos donos, peças para todos os manequins, preço justo, tradição desde 1998.
* **Layout:** 2-column card container (`grid-template-columns: 1fr 1fr`). Left card: Neutral border (`#E4E0D8`), Right card: Warm gold border (`#C88D2B`) with soft shadow highlight.
* **Responsive Adaptation:**
  * **Desktop/Tablet:** Side-by-side 2-column comparison.
  * **Mobile:** Stacked vertical cards (Shopping Mall card first, Entrelinhas card highlighted below).

---

#### SECTION 4: FASHION COLLECTION LOOKBOOK (`#colecao`)

* **Why it exists:** Generates commercial desire by presenting high-definition photography of tailoring, casual wear, dresses, and sets.
* **Content:**
  * H2 Headline: *"Coleções pensadas para o seu dia a dia e momentos especiais."*
  * Category Tabs: `Todas as Peças`, `Alfaiataria`, `Vestidos`, `Conjuntos`, `Masculino`.
  * Grid Cards (6 Products):
    1. [`imgi_21`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_21_622121931_17952306152934669_6300467206615056046_n.webp): Vestido Canelado Verde-Água (Alfaiataria / Midi)
    2. [`imgi_19`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_19_650723327_18041086664782293_4819142909306645817_n.webp): Vestido Midi Azul Bic Casual Chic
    3. [`imgi_54`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_54_651142192_18001763666905946_2761593178580074145_n.webp): Conjunto Mostarda Crop Top & Bermuda
    4. [`imgi_44`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_44_656728418_18107341066876836_2502928653685529730_n.webp): Vestido Envelope Preto com Botões
    5. [`imgi_34`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_34_655945697_18068947346307105_2795577184004855395_n.webp): Vestido Canelado Grafite Clássico
    6. [`imgi_58`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_58_656258671_18077826107125021_7232258309354051888_n.webp): Camisa Estampada Marinho Masculina
* **Layout:** 3-column grid (`grid-template-columns: repeat(3, 1fr)`, gap `24px`). Cards use `4:5` aspect ratio (`1440x1800`).
* **Interaction:** Hovering a card triggers `translateY(-4px)` lift, shadow elevation, and reveals a quick `Consultar no WhatsApp` overlay button.
* **Responsive Adaptation:**
  * **Desktop:** 3 columns × 2 rows.
  * **Tablet:** 2 columns × 3 rows.
  * **Mobile:** Touch-friendly horizontal slider or 1-column stack.

---

#### SECTION 5: CONFECÇÃO & UNIFORMES (`#historia`)

* **Why it exists:** Highlights their 26-year manufacturing heritage (*Confecção & Estamparia desde 1998*) and drives B2B/B2C uniform quote requests.
* **Content:**
  * H2 Headline: *"Tradição em confecção, estamparia e uniformes com o melhor custo-benefício."*
  * Supporting Copy: *"Desde 1998, a Entrelinhas produz uniformes escolares e profissionais com tecidos resistentes, costura reforçada e preço justo..."*
  * Key Benefits List: Durabilidade Comprovada, Dicas de Custo-Benefício, Estamparia & Confecção Própria.
  * CTA: `Solicitar Orçamento de Uniformes`
* **Assets:** [`imgi_50_...n.jpg`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_50_503054238_1451218525875744_798213084908887322_n.jpg) (Story graphic collage showing custom boxes, ink buckets, screen frames, printing press).
* **Layout:** 2-column container (`grid-template-columns: 1fr 1fr`, gap `48px`). Left: Text & CTA, Right: Asset card `imgi_50` with 12px rounded corners and subtle shadow.
* **Responsive Adaptation:** Desktop 2 cols; Mobile 1 col (text first, image card below).

---

#### SECTION 6: REAL CUSTOMER PROOF & PHYSICAL STORE (`#avaliacoes`)

* **Why it exists:** Establishes undeniable trust through real, unedited Google reviews and physical store interior evidence.
* **Content:**
  * H2 Headline: *"Quem compra na Entrelinhas recomenda."*
  * Left Column (Physical Store Proof): Real store interior photo [`imgi_42_...n.jpg`](file:///c:/cli/Entrelinhas%20Store/imagens/imgi_42_503151858_614079210971649_957933848608757430_n.jpg) showing reception desk, 3D wooden logo wall, track lighting, and clothing racks. Caption: *"Nossa loja física na R. Arcângelo Campanella, 562 - Jardim Calux, SBC."*
  * Right Column (Verified Google Reviews):
    1. **Juliana Sabatini Dufek** (Local Guide): *"Pensa num lugar gostosinho, com muitas opções - para todos os manequins - lindas, de qualidade, preços acessíveis, e com donos super fofos e atenciosos... Fujam da muvuca infernal dos shoppings..."*
    2. **Andressa Fernandes Voga** (Local Guide): *"Os produtos bons e de qualidade além do preço justo dos uniformes e roupas."*
    3. **Leticia Paschoal**: *"Bom atendimento. Dicas na compra de uniforme para melhor custo beneficio."*
* **Layout:** 2-column split (`grid-template-columns: 1fr 1fr`, gap `48px`).
* **Responsive Adaptation:** Desktop 2 cols; Mobile 1 col (Store interior photo first, followed by vertical review cards).

---

#### SECTION 7: HOW TO BUY (`#como-comprar`)

* **Why it exists:** Removes purchasing friction by clearly explaining the 3 easy ways to buy.
* **Content:**
  * H2 Headline: *"Três formas simples de comprar suas peças favoritas:"*
  * Step 1: `🛍️ Visite nossa Loja Física` (R. Arcângelo Campanella, 562 - Jardim Calux, SBC).
  * Step 2: `📱 Atendimento no WhatsApp` (Mande mensagem para (11) 91480-2056, tire dúvidas e escolha seu tamanho).
  * Step 3: `🚚 Envio para todo o Brasil` (Receba em casa via Correios ou retire na loja).
* **Layout:** 3-column horizontal step grid (`grid-template-columns: repeat(3, 1fr)`). Background `#FAF8F5`, 1px borders `#E4E0D8`.
* **Responsive Adaptation:** Desktop 3 cols; Mobile 3 stacked cards with step numbers (1, 2, 3).

---

#### SECTION 8: LOCATION & OPERATING HOURS (`#localizacao`)

* **Why it exists:** Provides physical verification, local SEO value, and single-click route planning.
* **Content:**
  * H2 Headline: *"Venha nos visitar no Jardim Calux em São Bernardo do Campo."*
  * Store Info: Endereço (R. Arcângelo Campanella, 562 - Jardim Calux, SBC - SP), Horário (Aberto diariamente até às 17:00), WhatsApp ((11) 91480-2056), Instagram (@entrelinhas_store).
  * Map Embed: Interactive Google Maps iframe card showing location pin in Jardim Calux.
  * CTA Button: `Abrir Rota no Google Maps`
* **Layout:** 2-column split (`grid-template-columns: 1fr 1fr`, gap `32px`).
* **Responsive Adaptation:** Desktop 2 cols; Mobile 1 col (Address info first, map embed second).

---

#### SECTION 9: FINAL CONVERSION FOOTER (`#conversao-footer`)

* **Why it exists:** Final high-converting push directing visitors to open a WhatsApp consultation.
* **Content:**
  * H2 Headline: *"Pronta para renovar o guarda-roupa com roupas de qualidade e atendimento de verdade?"*
  * Subhead: *"Clique no botão abaixo e fale diretamente com a gente no WhatsApp. Estamos prontas para tirar suas dúvidas e ajudar você a encontrar o caimento perfeito."*
  * CTA Button: `📱 Falar no WhatsApp com a Entrelinhas Store`
  * Footer Legal Line: `© Confecções Entrelinhas de São Bernardo do Campo Ltda. • Desde 1998 • R. Arcângelo Campanella, 562 - Jardim Calux, SBC`
* **Layout:** Centered column container on deep charcoal canvas (`#181716`) with white text and WhatsApp Teal CTA.

---

#### COMPONENT: FIXED MOBILE CONVERSION BAR (`#mobile-cta-bar`)

* **Why it exists:** Ensures mobile users always have a 1-tap path to WhatsApp regardless of scroll depth.
* **Behavior:** Visible only on screens <640px. Fixed to screen bottom (`position: fixed`, `bottom: 0`, `z-index: 99`).
* **Structure:** Flex container with `Falar no WhatsApp` button (`background: #128C7E`, `height: 48px`, `border-radius: 8px`).

---

UI ARCHITECTURE COMPLETE — READY FOR IMPLEMENTATION
