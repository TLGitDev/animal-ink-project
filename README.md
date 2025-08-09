# animal-ink-project

Monorepo microfrontend: Next.js (shell) + MFE React+Vite (lecteur de musique) exposé en Web Components.

## Structure du projet

- **apps/shell** - Application Next.js principale (coquille)
- **apps/mfe-music-player** - Micro-frontend lecteur de musique avec React + Vite

## Fonctionnalités

- **Shell Next.js** : Interface principale avec navigation et intégration des MFEs
- **MFE Music Player** : Lecteur de musique moderne avec contrôles audio
- **Architecture modulaire** : Intégration via composants Web personnalisés
- **Design responsive** : Interface adaptée à tous les écrans
- **Mode sombre** : Support du thème sombre/clair

## Scripts disponibles

### Monorepo (racine)
```bash
npm run dev              # Démarre le shell ET le MFE en parallèle
npm run dev:shell        # Démarre seulement le shell Next.js
npm run dev:music-player # Démarre seulement le MFE music player
npm run build            # Build de production pour toutes les applications
npm run install:all      # Installe toutes les dépendances
npm run clean            # Nettoie tous les node_modules et builds
```

### Shell (Next.js)
```bash
cd apps/shell
npm run dev      # Démarre le serveur de développement (port 3000)
npm run build    # Build de production
npm run start    # Démarre le serveur de production
```

### MFE Music Player
```bash
cd apps/mfe-music-player
npm run dev      # Démarre le serveur de développement Vite (port 5173)
npm run build    # Build de production
npm run preview  # Prévisualise le build
```

## Démarrage rapide

### 1. Installation des dépendances
```bash
# Installer toutes les dépendances du monorepo
npm run install:all
```

### 2. Démarrage en mode développement
```bash
# Option 1: Démarrer tout en parallèle (recommandé)
npm run dev

# Option 2: Démarrer séparément
npm run dev:shell        # Terminal 1
npm run dev:music-player # Terminal 2
```

### 3. Accès aux applications
- **Shell Next.js** : http://localhost:3000
- **MFE Music Player** : http://localhost:5173

## Architecture technique

### Shell Next.js
- **Framework** : Next.js 15 avec App Router
- **UI** : React 19 + TypeScript + Tailwind CSS
- **Fonctionnalités** : Intégration des MFEs, navigation, layout responsive

### MFE Music Player
- **Framework** : React 19 + Vite
- **Composant Web** : Exposé via `customElements.define('music-player')`
- **Fonctionnalités** : Contrôles audio, playlist, gestion du volume
- **Intégration** : Chargement dynamique dans le shell

### Communication entre applications
- **Chargement** : Scripts chargés dynamiquement depuis le shell
- **Isolation** : Composants Web avec Shadow DOM
- **CORS** : Configuration Vite pour permettre l'intégration

## Développement

### Ajouter un nouveau MFE
1. Créer un nouveau dossier dans `apps/`
2. Configurer l'application (React + Vite recommandé)
3. Exposer le composant via `customElements.define()`
4. Intégrer dans le shell via un nouveau wrapper

### Modifier le shell
- Les composants sont dans `src/components/`
- Les pages sont dans `src/app/`
- Configuration Next.js dans `next.config.ts`

### Modifier le MFE music player
- Composant principal dans `src/App.tsx`
- Styles dans `src/App.css`
- Point d'entrée dans `src/main.tsx`
- Configuration Vite dans `vite.config.ts`

## Technologies utilisées

- **Shell** : Next.js 15, React 19, TypeScript, Tailwind CSS
- **MFE Music Player** : React 19, Vite, TypeScript, CSS Modules
- **Outils** : Concurrently (monorepo), ESLint, PostCSS
- **Architecture** : Micro-frontends, Composants Web, Shadow DOM

## Résolution des problèmes

### MFE ne se charge pas
1. Vérifier que le MFE est démarré (`npm run dev:music-player`)
2. Vérifier la console du navigateur pour les erreurs CORS
3. S'assurer que le port 5173 est accessible

### Erreurs de build
1. Nettoyer les builds : `npm run clean`
2. Réinstaller les dépendances : `npm run install:all`
3. Vérifier les versions de Node.js (>= 18 recommandé)

### Problèmes d'intégration
1. Vérifier la configuration CORS dans `vite.config.ts`
2. S'assurer que le composant Web est correctement défini
3. Vérifier la console pour les erreurs JavaScript
