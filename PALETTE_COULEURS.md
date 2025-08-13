# Nouvelle Palette de Couleurs - Animal Ink Project

## Vue d'ensemble

Le projet a été mis à jour avec une nouvelle palette de couleurs élégante basée sur des tons **dorés**, **noirs** et **rouges**, créant une identité visuelle plus sophistiquée et moderne.

## Palette de Couleurs

### Couleurs Principales

#### 🟡 **Doré (Gold)**
- **Doré classique** : `#D4AF37` - Couleur principale pour les éléments importants
- **Doré vif** : `#FFD700` - Couleur d'accent et de survol
- **Doré foncé** : `#B8860B` - Couleur secondaire pour les boutons

#### ⚫ **Noir (Black)**
- **Noir profond** : `#0A0A0A` - Arrière-plan principal
- **Noir charbon** : `#1A1A1A` - Surfaces et cartes
- **Noir graphite** : `#2D2D2D` - Éléments de profondeur

#### 🔴 **Rouge (Red)**
- **Rouge vif** : `#DC2626` - Boutons d'action et accents
- **Rouge foncé** : `#B91C1C` - États de survol
- **Rouge accent** : `#EF4444` - Éléments interactifs

### Couleurs d'Accent

#### ⚪ **Blanc cassé** : `#F5F5F5` - Texte principal et contrastes
#### 🔘 **Gris métallique** : `#6B7280` - Bordures et éléments secondaires
#### 🔘 **Gris clair** : `#9CA3AF` - Texte secondaire et placeholders

## Application dans le Projet

### 1. **Shell Next.js** (`apps/shell/`)
- **Arrière-plan** : Gradient noir vers doré (`from-black via-gray-900 to-yellow-900`)
- **Cartes MFE** : Bordures dorées (`border-yellow-600/20`)
- **Titres** : Couleur dorée (`text-yellow-600 dark:text-yellow-400`)
- **Boutons de retour** : Alternance rouge/doré selon le contexte

### 2. **Lecteur de Musique** (`apps/mfe-music-player/`)
- **Arrière-plan** : Gradient noir (`#0A0A0A → #1A1A1A → #2D2D2D`)
- **Titre principal** : Doré (`#D4AF37`)
- **Bouton play** : Rouge (`#DC2626`)
- **Contrôles** : Bordures et accents dorés
- **Survols** : Transitions vers doré vif (`#FFD700`)

### 3. **Tracker de Jeûne** (`apps/mfe-fasting-tracker/`)
- **Arrière-plan** : Gradient noir avec accents dorés
- **Cartes** : Bordures et fonds dorés subtils
- **Boutons** : Doré principal avec rouge pour l'arrêt
- **Indicateurs** : Doré pour les éléments actifs

### 4. **UI Partagée** (`packages/ui/`)
- **Bouton primaire** : Doré (`bg-yellow-600`)
- **Bouton secondaire** : Rouge (`bg-red-600`)

## Variables CSS

Le projet utilise maintenant des variables CSS personnalisées dans `globals.css` :

```css
:root {
  --background: #0A0A0A;
  --foreground: #F5F5F5;
  --primary: #D4AF37;
  --primary-hover: #FFD700;
  --secondary: #DC2626;
  --secondary-hover: #EF4444;
  --accent: #B8860B;
  --surface: #1A1A1A;
  --surface-hover: #2D2D2D;
  --border: #6B7280;
  --text-muted: #9CA3AF;
}
```

## Thème Clair/Sombre

### Mode Sombre (par défaut)
- Arrière-plan noir profond
- Texte blanc cassé
- Accents dorés et rouges

### Mode Clair
- Arrière-plan blanc cassé
- Texte noir profond
- Accents dorés et rouges maintenus

## Cohérence Visuelle

La nouvelle palette assure une **cohérence visuelle** à travers tous les micro-frontends :
- **Hiérarchie claire** avec le doré pour les éléments importants
- **Actions claires** avec le rouge pour les boutons critiques
- **Profondeur** avec les différents niveaux de noir
- **Accessibilité** maintenue avec des contrastes appropriés

## Avantages de la Nouvelle Palette

1. **Élégance** : Tons dorés sophistiqués et professionnels
2. **Lisibilité** : Contrastes optimisés pour une meilleure accessibilité
3. **Cohérence** : Identité visuelle unifiée à travers tous les composants
4. **Modernité** : Design contemporain avec des couleurs tendance
5. **Flexibilité** : Palette adaptable aux modes clair/sombre
