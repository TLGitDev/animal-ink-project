# MFE Fasting Tracker

Un micro frontend pour le suivi de sessions de jeûne intermittent.

## Fonctionnalités

- **Démarrage/Arrêt de sessions** : Commencer et arrêter facilement des sessions de jeûne
- **Minuteur en temps réel** : Affichage du temps écoulé depuis le début du jeûne
- **Historique des sessions** : Stockage local des sessions précédentes avec dates et durées
- **Interface responsive** : Adaptation automatique aux différentes tailles d'écran
- **Persistance des données** : Sauvegarde automatique dans le localStorage

## Structure

```
src/
├── main.tsx                 # Point d'entrée et définition du web component
├── fasting-tracker/
│   ├── App.tsx             # Composant principal de l'application
│   └── base.css            # Styles CSS de base
```

## Utilisation

### Développement

```bash
npm install
npm run dev
```

L'application sera accessible sur `http://localhost:5181`

### Build

```bash
npm run build
```

Génère le fichier `mfe-fasting-tracker.es.js` dans le dossier `dist/`

### Intégration dans le shell

Le MFE peut être intégré dans l'application shell principale en utilisant le web component `<mfe-fasting-tracker>`.

## Technologies

- **React 19** avec TypeScript
- **Vite** pour le build et le développement
- **CSS Grid** pour la mise en page responsive
- **localStorage** pour la persistance des données
- **Web Components** pour l'encapsulation

## Port

Ce MFE utilise le port **5181** pour éviter les conflits avec les autres MFE existants.
