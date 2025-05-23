# Ideation Framework

A React + Vite single-page app that codifies a repeatable **Ideation Framework**. It includes:

- **Problem/Idea Space**
- **Ideal Customer Profile & Persona Mapping**
- **The Mom Test**
- **Market & Gap Analysis**

All sections are data-driven (no hard-coded content), so you can swap in any problem context.

---

## 📁 Project Structure

```plaintext
src/
├─ App.tsx                       # Root component: imports Container, Logo, and all sections
├─ main.tsx                      # Vite entrypoint
├─ index.css                     # Global styles
├─ components/
│  └─ Layout/
│     ├─ Container.tsx           # Wrapper with padding/centering
│     └─ Container.module.css
├─ data/
│  ├─ competitors.ts             # competitors[], porterForces[], swotData[], etc.
│  ├─ icpAndPersonas.ts          # personas[], segments[], journeys[], icpData
│  ├─ ideaSpace.ts               # ideaSpace[]
│  ├─ marketGaps.ts              # marketGaps[]
│  ├─ momTest.ts                 # momTestQuestions[]
│  ├─ types.ts                   # shared Rate type + rateToEmoji()
│  └─ valuePropositionCanvas.ts  # valuePropCanvas
├─ sections/
│  ├─ ICPAndPersonas/
│  │  ├─ ICPAndPersonas.tsx      # Overview + <ICPArtifacts />
│  │  └─ ICPArtifacts.tsx        # ICPOnePager, PersonaCards, SegTable, Journeys
│  ├─ IdeaSpace.tsx              # Problem/Idea Space section
│  ├─ TheMomTest/
│  │  ├─ TheMomTest.tsx          # Theory + <MomTestQuestions />
│  │  └─ MomTestQuestions.tsx    # Q&A compliance table
│  └─ MarketGapAnalysis/
│     ├─ MarketGapAnalysis.tsx   # Market Gap Analysis overview + imports
│     └─ CompetitorLandscape.tsx # Competitor, Forces, SWOT, VPC, Gaps tables
└─ vite-env.d.ts                 # Vite type declarations
```

---

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run dev server**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🎨 Styling

- Uses CSS Modules for layout (`Container.module.css`).
- Global CSS (`index.css`) defines color variables, typography, and utilities.
- Components rely on utility classes:
  - `.card`, `.card__title`, `.card__subtitle`, `.card__list`
  - `.card-grid`, `.swot-grid`, `.vpc-grid`
- Inline table styles (`style` props) for simple, self-contained tables.

---

## 🔄 Data-Driven Sections

Each section renders from a corresponding data file under `src/data`. To adapt for a new problem domain:

1. Update the arrays/objects in `src/data/*.ts`.
2. The React components automatically re-render the updated content.

---

## ❤️ Contributing

Feel free to open issues or PRs to:

- Add new frameworks or methodologies
- Improve styling or accessibility
- Enhance data interfaces or add TypeScript types

---

## 📜 License

MIT © bogaziciAI
