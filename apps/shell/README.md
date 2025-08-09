# Shell (Next.js)

Shell Next.js pour Animal Ink. Intègre le MFE MusicPlayer comme Web Component et consomme la bibliothèque UI partagée.

## Développement
```bash
npm run dev         # démarre le shell en dev (port 3000)
```
- La page d’accueil affiche une grille de boutons (MFE). Le clic charge le MFE dans le `<main>` (header/footer restent visibles).

## Intégration du MFE
- En développement, le wrapper charge `http://localhost:5173/src/main.tsx` (Vite dev server du MFE)
- En production, le wrapper charge `/mfe/music-player.es.js` (bundle ES copié dans `public/mfe/` au build)

## Déploiement Vercel (un seul projet)
- Root Directory: `apps/shell`
- Build Command (exécuté à la racine): `npm run build:vercel`
- Output Directory: (vide)
- `build:vercel` build l’UI, build le MFE, copie le bundle MFE dans `public/mfe/`, puis build le shell

## UI partagée
- Importer via `@animal-ink/ui`:
```tsx
import { Button } from '@animal-ink/ui';
```
- La lib est dans `packages/ui` (build TypeScript vers `dist`).

## Scripts utiles
```bash
npm run build    # build Next.js
npm run start    # production server
npm run lint     # lint
```
