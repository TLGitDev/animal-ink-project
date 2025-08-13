# animal-ink-project

Monorepo microfrontend: Next.js (shell) + MFE React+Vite (lecteur de musique et tracker de jeûne) exposé en Web Components + UI partagée.

https://animal-ink-project.vercel.app/

## Structure du projet

- **apps/shell** - Application Next.js principale (coquille)
- **apps/mfe-music-player** - Micro-frontend lecteur de musique avec React + Vite
- **apps/mfe-fasting-tracker** - Micro-frontend tracker de jeûne avec React + Vite
- **packages/ui** - Bibliothèque de composants React partagés (`@animal-ink/ui`)

## Fonctionnalités

- **Shell Next.js** : Interface principale avec navigation et intégration des MFEs
- **MFE Music Player** : Lecteur de musique moderne avec contrôles audio
- **MFE Fasting Tracker** : Suivi des périodes de jeûne et objectifs de santé
- **UI partagée** : Boutons et futurs composants communs entre apps
- **Architecture modulaire** : Intégration via Web Components
- **Design responsive** : Interface adaptée à tous les écrans

## Scripts disponibles

### Monorepo (racine)
```bash
npm run dev               # Démarre le shell ET les MFEs en parallèle
npm run build             # Build UI + Shell + MFEs
npm run build:vercel      # Build UI, MFEs (bundle ES), copie dans shell/public/mfe/, build shell
npm run install:all       # Installe toutes les dépendances
npm run clean             # Nettoie node_modules et builds
```

### Shell (Next.js)
```bash
cd apps/shell
npm run dev      # Dev (port 3000)
npm run build    # Build de production
npm run start    # Serveur de production
```

### MFE Music Player
```bash
cd apps/mfe-music-player
npm run dev      # Dev Vite (port 5173)
npm run build    # Build (bundle ES pour intégration)
```

### MFE Fasting Tracker
```bash
cd apps/mfe-fasting-tracker
npm run dev      # Dev Vite (port 5174)
npm run build    # Build (bundle ES pour intégration)
```

### UI partagée
```bash
cd packages/ui
npm run build    # Build TypeScript vers dist
```

## Démarrage rapide

1) Installer les dépendances
```bash
npm run install:all
```

2) Démarrer en dev
```bash
npm run dev
```

3) Accès
- Shell: http://localhost:3000
- MFE Music Player: http://localhost:5173
- MFE Fasting Tracker: http://localhost:5174

## Déploiement Vercel (un seul projet)
- Paramètres projet:
  - Root Directory: `apps/shell`
  - Build Command: `npm run build:vercel`
  - Output Directory: (vide, Next.js)
- Le script `build:vercel`:
  - Build `packages/ui`
  - Build `apps/mfe-music-player` → `dist/music-player.es.js`
  - Copie le bundle MFE → `apps/shell/public/mfe/music-player.es.js`
  - Build `apps/shell`
- Le shell charge le MFE en prod via `/mfe/music-player.es.js` (même origine, pas de CORS)

## Utilisation de l'UI partagée
```tsx
import { Button } from '@animal-ink/ui';
```

## Notes techniques
- Web Component `<music-player>` assemblé en bundle ES (React embarqué)
- Wrapper côté shell charge dynamiquement le bundle:
  - Dev: `http://localhost:5173/src/main.tsx`
  - Prod: `/mfe/music-player.es.js`
- Pas de CORS en prod (same-origin)

## Résolution de problèmes
- MFE ne s’affiche pas en prod:
  - Vérifier que `/mfe/music-player.es.js` est servi (onglet Network)
  - Rebuild Vercel (script `build:vercel` doit bien copier le fichier)
- Erreurs de build Vercel:
  - Vérifier install dev deps: Build Command et logs (vite doit être installé)
  - Nettoyer les lockfiles en double si besoin
