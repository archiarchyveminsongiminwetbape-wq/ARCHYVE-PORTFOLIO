# 📋 Guide de Configuration du Portfolio

## 🚀 Démarrage rapide

### 1. Installation des dépendances
```bash
npm install
```

### 2. Démarrer le serveur de développement
```bash
npm start
```

L'application s'ouvrira automatiquement à `http://localhost:3000`

### 3. Build pour la production
```bash
npm run build
```

## 📝 Personnalisation du portfolio

### 1. Ajouter/Modifier les projets

Éditez le fichier `src/data/projects.ts` :

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Votre Projet",
    description: "Description courte",
    longDescription: "Description détaillée",
    image: "https://lien-vers-image.com/image.jpg",
    tags: ["React", "TypeScript"],
    links: {
      website: "https://example.com",
      github: "https://github.com/example",
      demo: "https://demo.example.com"
    },
    featured: true
  }
];
```

### 2. Modifier les informations personnelles

**Header/Logo** → `src/components/Header.tsx`
- Modifiez `MonPortfolio` par votre nom

**À propos** → `src/components/About.tsx`
- Changez le texte et la photo

**Statistiques** → `src/components/About.tsx`
- Adaptez les chiffres à votre expérience

**Compétences** → `src/data/projects.ts`
- Mettez à jour le tableau `skills`

**Contact** → `src/components/Contact.tsx`
- Remplacez `your.email@example.com` par votre email

### 3. Ajouter vos réseaux sociaux

Dans `src/data/projects.ts`, modifiez `socialLinks` :

```typescript
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/votre-username", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/votre-profile", icon: "linkedin" },
  // Ajoutez d'autres réseaux...
];
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans les fichiers CSS :
- **Dégradé principal** : `#667eea` → `#764ba2`
- **Fond** : `#f8f9ff`
- **Texte** : `#222`

Cherchez et remplacez ces codes hexadécimaux pour changer le thème.

### Polices
Modifiez le `font-family` dans `src/App.css` pour changer les polices.

## 🖼️ Images et médias

### Ajouter des images
1. Placez vos images dans le dossier `public/images/`
2. Importez-les dans vos composants :
```tsx
<img src="/images/mon-image.jpg" alt="Description" />
```

Ou utilisez des URLs externes (Unsplash, Pexels, etc.)

## 🚀 Déploiement sur Vercel

### Option 1 : Interface Web (Recommandé)
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Connectez votre dépôt GitHub
4. Cliquez sur "Deploy"

### Option 2 : CLI Vercel
```bash
npm i -g vercel
vercel
```

### Après le déploiement
- Votre site sera accessible à une URL Vercel
- Vous pouvez ajouter un domaine personnalisé dans les paramètres Vercel

-## 📱 Responsive

Le portfolio est entièrement responsive :
-- Desktop (1200px+)
-- Tablet (768px - 1199px)
-- Mobile (< 768px)

Testez sur mobile avant de déployer !

## 🔧 Fichiers importants

```
portfolio-manuel/
├── src/
│   ├── components/        # Tous les composants
│   ├── data/             # Données (projets, compétences)
│   ├── App.tsx           # Composant principal
│   ├── index.tsx         # Point d'entrée
│   └── *.css             # Styles
├── public/               # Fichiers statiques
├── package.json          # Dépendances
├── vercel.json          # Configuration Vercel
└── README.md            # Documentation
```

## 🆘 Dépannage

### Port déjà utilisé
```bash
# Utilisez un autre port
PORT=3001 npm start
```

### Erreurs TypeScript
```bash
# Réinstallez les dépendances
rm -rf node_modules package-lock.json
npm install
```

### Problèmes de déploiement Vercel
- Vérifiez que `npm run build` fonctionne localement
- Consultez les logs dans le dashboard Vercel
- Vérifiez les variables d'environnement

## ✨ Prochaines améliorations

- [ ] Ajouter un blog
- [ ] Intégrer EmailJS pour les formulaires
- [ ] Ajouter des animations Framer Motion
- [ ] Implémenter le dark mode
- [ ] Ajouter une section "Témoignages"

## 📄 Licence

MIT - Libre d'utilisation

## 💡 Besoin d'aide ?

Consultez la [documentation React](https://react.dev)
ou [Vercel Docs](https://vercel.com/docs)
