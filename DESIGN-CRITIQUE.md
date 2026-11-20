# Design critique, brand critique e motion — Portfolio Nelson Lopes

> As regras que daqui resultaram estão compiladas em `AGENTS.md`, secção "Design rules". Este ficheiro fica como histórico da análise.

Escopo: v1 (`Portfolio.tsx`), v2 (`HomeV2.tsx`), About, showreel (`HeroShowreel.tsx`), tokens em `src/index.css`.
Brief de marca: sóbrio (azul `#002FA7`) com apontamentos descontraídos/divertidos (laranja `#FF6F00`).

> Nota de método: as skills do Emil Kowalski **não estão instaladas** nesta máquina. A secção de motion aplica os princípios dele (animations.dev, "Animations on the web") de memória, não a skill literal. Do showreel só vi o poster; o movimento do vídeo não foi analisado.

---

## 1. Quem és (About) e o que a marca deve dizer

- Calmo em ambientes complexos, pensa em sistemas, começa por perguntas.
- Veio do design gráfico; sonhava ser designer de automóveis; valoriza clareza sobre decoração.
- As ideias vêm do mar, de caminhadas e da piscina.
- Tese: "o melhor design é o que ninguém nota".

Leitura: azul = rigor e decisão. Laranja = o lado humano e curioso. O texto do About não tem humor nenhum, e o laranja quase não aparece, por isso o lado descontraído não chega a quem visita.

## 2. Brand critique

| # | Observação | Sugestão |
|---|---|---|
| B1 | Sistema coerente: Inter 800/900 com tracking negativo, tinta de títulos `#3F4559`, azul bem escolhido. | Manter. |
| B2 | O laranja é disciplinado (nunca em texto, variantes `accent-icon`/`accent-text`), mas tão contido que se lê como detalhe de UI, não como personalidade. | Dar-lhe um papel: **o momento humano**. Azul para estrutura e ação, laranja só onde há um piscar de olho. |
| B3 | Tom de voz institucional e consistente, mas só sério. | Uma frase com a tua voz no hero e microcopy com humor seco (404, rodapé, hover de cartões). |
| B4 | A parte pessoal do About (carros, mar, piscina) está enterrada em parágrafos longos. | Subir o sonho de designer de carros; "Beyond Design" com 2–3 fotos ou ícones e ponto laranja. |
| B5 | Nova linha de papéis ("Lead UX/UI Designer \| Product Designer \| AI Designer \| Design Systems") é longa para um eyebrow em maiúsculas com tracking aberto. | Verificar a quebra em mobile; partir em duas linhas ou separar com pontos. |
| B6 | Vários azuis de ênfase (`#001A5C`, `#002FA7`, `#3D63E0`, `#2A4CB8`) e vários cinzentos (`#5A5F73`, `#8A8FA3`, `#4A4F63`, `#A0A4B8`). | Fechar uma escala de 4 passos para azul e outra para cinza. |

## 3. Design critique (UX/UI)

**Hierarquia e layout**
- Título → subtítulo → CTA primário azul → CTA secundário "quiet" está claro. Manter.
- O About tem seis parágrafos seguidos em "How I Think". Dar respiração: um destaque por parágrafo, ou quebrar em blocos com subtítulos curtos.

**Legibilidade e acessibilidade**
- `.hero-float-caption` a 10.5px em `#8A8FA3` fica abaixo do que defines para o resto do site (AA/AAA). Subir para ≥12px e `#5A5F73`.
- Subtítulo em `#5A5F73` passa, mas é cinzento sobre cinzento nos rótulos auxiliares.
- Foco visível existe (`outline: 2px solid #002FA7`). Bom. Confirmar que o laranja nunca é a única indicação de estado.

**Consistência**
- Cartões, botões e links usam raios e sombras parecidos, mas há mais de uma família de hover (`.teaser-card`, `.teaser-card-v3`, `.hv2-*`). Convergir num só padrão.

**Conteúdo**
- Bio forte, mas o número de ideias por secção é alto; priorizar 1 mensagem por bloco.

## 4. Showreel (só poster)

- Composição limpa, muito espaço branco, sombras suaves: combina com o sóbrio.
- Domina azul-marinho e pastéis (verde, lilás). O laranja não aparece nos ecrãs.
- Ecrãs EDP/NeoBank claros e pequenos: texto ilegível. Os dois blocos verde e lilás parecem wireframes.
- Ecrã de login central elegante, mas vazio.
- Sugestões: pulso/cursor laranja como fio condutor; trocar os blocos de post-its por ecrãs finais; poster com o ecrã mais forte (chatbot escuro ou login); loop de 8–12 s sem corte brusco (a validar vendo o vídeo).

## 5. Motion e animação (princípios Emil Kowalski aplicados ao código)

Estado atual, do `index.css`:

**O que já está bem**
- Tokens de easing próprios (`--ease-out`, `--ease-in-out`, `--ease-out-back`): raro e bom.
- `prefers-reduced-motion` tratado nos reveals, marquees, tile map e flutuantes.
- Reveals de entrada com `translateY(14px)` + opacity em 450 ms ease-out: dentro do que ele recomenda.
- Showreel: só toca no ecrã (IntersectionObserver), pausa fora dele, poster com reduced-motion.
- Marquees pausam no hover.

**Problemas e recomendações**

| # | Observação (princípio) | Onde | Recomendação |
|---|---|---|---|
| M1 | **Transição global**: a regra base em `a, button, [role=button], .interactive-card` lista `color, background, border, box-shadow, transform, opacity, filter` a 0.15 s `ease`. Animar tudo é caro e causa efeitos inesperados (ex.: `transform` e `filter` herdados). Emil: nunca `transition: all`, nomear só o que muda. | `index.css:43-50` | Remover a regra global; declarar transições por componente com as propriedades certas. |
| M2 | **Easing por defeito `ease`**: para elementos que entram ou respondem ao utilizador, ease-out forte. `ease` genérico é fraco. | `--transition-fast` | Usar `--ease-out` (já tens) como padrão. |
| M3 | **Duração**: UI deve ficar < 300 ms. Estão a 450 ms (hero-reveal), 620 ms (teaser-reveal), 650 ms (hero-float-enter). Entradas de página podem ser mais longas, mas 650 ms com bounce passa a parecer lento. | `hero-float-enter`, `teaser-reveal` | Reduzir para 300–450 ms nos reveals; manter só o showreel/hero com mais cerimónia. |
| M4 | **Bounce (`ease-out-back`)** só onde o brand pede diversão. 650 ms com overshoot nos flutuantes do hero é muito. | `index.css:294` | Reduzir para ~350–400 ms e overshoot pequeno; reservar o bounce ao laranja (ponto, pulso do showreel): é o "descontraído" em movimento. |
| M5 | **Flip 3D nos teaser cards** (`rotateY(180deg)` 300 ms `ease-in-out`): charmoso, mas é o gesto mais caro e menos descobrível. Em touch o hover não existe; só há `:focus-visible` como alternativa. | `.teaser-flip` | Confirmar que está dentro de `@media (hover: hover) and (pointer: fine)`, que o conteúdo do verso tem alternativa para touch/teclado, e que `ease-in-out` não deve ser usado para movimento de entrada (usar ease-out). |
| M6 | **Pressed state**: botões devem ter `:active { transform: scale(0.97) }` (100–160 ms) para dar feedback tátil. | `.hv2-btn-primary`, `.teaser-card-v3` | Adicionar; é pequeno e dá carácter. |
| M7 | **Nunca animar de `scale(0)`**: começar de ~0.95 + opacity. | Tooltips `.tm-name` usam `translate(-50%, -4px)`: ok. Verificar quaisquer entradas de modal/popover. | Manter a regra. |
| M8 | **Transform-origin** coerente com o gatilho (popovers/menus a crescer do ponto de clique). | Nav, menus | Verificar `transform-origin` em dropdowns. |
| M9 | **Stagger**: 30–80 ms entre itens, não 100+. | `teaser-reveal`, `hero-reveal` (delays em ms inline) | Confirmar passos ≤ 80 ms; hoje não medi os delays dos cartões. |
| M10 | **Tooltips**: o primeiro tem delay, os seguintes aparecem logo. | `.tm-name` (150 ms) | Ok; garantir sem delay ao passar de um logo para outro. |
| M11 | **Marquees `linear` 26 s/36 s**: ok por serem contínuos, mas o movimento perpétuo compete com a calma do About. | `.skills-marquee`, `.cert-marquee` | Aceitável (pausam no hover e em reduced-motion). Considerar só um marquee visível por viewport. |
| M12 | **Reduced motion**: `* { animation-play-state: paused }` pára tudo, mas mantém estados parados a meio. | `index.css:346-348` | Em vez de pausar, mostrar o estado final; manter fades de opacidade (como já fazes nos reveals). |
| M13 | **Propriedades baratas**: animar `transform`/`opacity`; evitar `filter`, `box-shadow` em listas longas. | `box-shadow` em `.teaser-card-v3` hover | Animar a sombra com pseudo-elemento + opacity se houver jank. |
| M14 | **Interrompibilidade**: transições CSS são interrompíveis, keyframes não. Para hovers/cards prefere transitions. | Reveals e flip | Manter transitions; reservar keyframes para loops (marquees, float). |
| M15 | **Showreel**: `preload="metadata"` pode dar um instante de poster parado ao entrar no ecrã. Fade entre poster e primeiro frame evita o salto. | `HeroShowreel.tsx` | Considerar `preload="auto"` no hero e um fade de 200 ms ao começar a tocar. |

## 6. Motion como expressão de marca

- **Regra:** movimento azul é calmo (ease-out, 200–350 ms, pequenas distâncias); movimento laranja é o único com personalidade (leve overshoot, pulso, 1 por ecrã).
- Candidatos: ponto laranja do hero a "respirar" (scale 1 → 1.06, 3 s, só opacity/transform); sublinhado laranja que se desenha numa palavra do título; pulso/cursor laranja a percorrer os ecrãs do showreel; aspas laranja da pull quote do About a entrar com bounce curto.
- Tudo desligado ou reduzido a fade com `prefers-reduced-motion`.

## 7. Prioridades

1. Dar papel ao laranja (cor + movimento) e aplicá-lo em 3–4 sítios.
2. Frase com a tua voz no hero + microcopy com humor seco.
3. Remover a transição global (M1) e trocar `ease` por `--ease-out` (M2).
4. Encurtar reveals e reduzir o bounce dos flutuantes (M3, M4); adicionar `:active` (M6).
5. Verificar o flip em touch/teclado e o que mostra o verso (M5).
6. Showreel: pulso laranja, trocar blocos tipo wireframe, fade do poster ao vídeo (M15).
7. Contraste/tamanho dos textos auxiliares; fechar escala de azuis e cinzentos; rever a nova linha de papéis em mobile.
