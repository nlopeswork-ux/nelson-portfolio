Phase 2 (AI-native concept) screens aren't published yet — the case study
currently shows a static "concept in progress" placeholder with a link to
/contact instead of a carousel.

When these screens are ready, drop them here with these filenames and swap
the placeholder block in src/pages/CaseStudyNeoBank.tsx back for:

  <PrototypeCarousel images={phase2Images} aspectRatio="mobile" />

(re-add the phase2Images array — see CaseStudyNeoBank.tsx git history for
the original list — and restore the filenames below):

- 01-landing-greeting.png
- 02-typing-state.png
- 03-balance-check-flow-1.png
- 04-balance-check-flow-2.png
- 05-menu-recent-chat.png
- 06-banking-hub-fallback.png

Aspect ratio: 390:844 (phone frame).
