# 🎨 Portfolio Manuel - Guide de Personnalisation

Ce guide vous montre **exactement** comment personnaliser chaque partie de votre portfolio.

---

## 1️⃣ PROJETS - `src/data/projects.ts`

### Structure d'un Projet

```typescript
{
  id: 1,                    // Numéro unique (1, 2, 3...)
  title: "Titre du Projet", // Titre principal
  description: "Courte description (1-2 lignes)",
  longDescription: "Description plus longue (paragraphe complet)",
  image: "https://images.unsplash.com/photo-...",  // URL de l'image
  tags: ["React", "TypeScript"],  // Technos utilisées
  links: {
    website: "https://...",  // Site en prod (optionnel)
    github: "https://...",   // Lien GitHub (optionnel)
    demo: "https://..."      // Démo live (optionnel)
  },
  featured: true  // true = affiché en vedette, false = dans "tous les projets"
}
```

### Exemple Réel

```typescript
{
  id: 1,
  title: "E-commerce Platform",
  description: "Une plateforme e-commerce complète avec React et TypeScript",
  longDescription: "Plateforme e-commerce moderne avec authentification utilisateur, panier, système de paiement intégré Stripe, et gestion d'inventaire en temps réel avec Firebase.",
  image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop",
  tags: ["React", "TypeScript", "Stripe", "Node.js", "MongoDB"],
  links: {
    website: "https://mon-ecommerce.com",
    github: "https://github.com/monusername/ecommerce",
    demo: "https://mon-ecommerce.vercel.app"
  },
  featured: true
}
```

### 📸 Où Trouver des Images Gratuites

| Site | Avantages | URL |
|------|-----------|-----|
| **Unsplash** | 10M+ photos libres | [unsplash.com](https://unsplash.com) |
| **Pexels** | Qualité HD | [pexels.com](https://pexels.com) |
| **Pixabay** | Gratuit + CC0 | [pixabay.com](https://pixabay.com) |
| **Lorem Picsum** | Placeholder images | [picsum.photos](https://picsum.photos) |

### Exemple d'URLs Unsplash

```
https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop
https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop
```

### ✅ Checklist Projets

- [ ] Titre clair et descriptif
- [ ] Description courte (1-2 lignes max)
- [ ] Description longue détaillée
- [ ] Image de qualité 500x300px min
- [ ] Tags pertinents (3-5)
- [ ] Liens corrects (testez-les !)
- [ ] Projets favoris marqués `featured: true`

---

## 2️⃣ COMPÉTENCES - `src/data/projects.ts`

### Structure

```typescript
export const skills = [
  { 
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"]
  },
  { 
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  // Ajoutez d'autres catégories...
];
```

### Exemple Complet

```typescript
export const skills = [
  { 
    category: "Frontend", 
    items: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"] 
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "Django", "MongoDB"] 
  },
  { 
    category: "Bases de Données", 
    items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"] 
  },
  { 
    category: "Outils & Services", 
    items: ["Git", "GitHub", "Docker", "Vercel", "AWS", "VS Code"] 
  }
];
```

---

## 3️⃣ RÉSEAUX SOCIAUX - `src/data/projects.ts`

### Structure

```typescript
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/votrenom", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/votrenom", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/votrenom", icon: "twitter" },
  { name: "Email", url: "mailto:votre.email@example.com", icon: "email" }
];
```

### Où Trouver vos URLs

**GitHub** :
```
https://github.com/VOTRE_USERNAME
```

**LinkedIn** :
1. Allez sur votre profil LinkedIn
2. Cliquez "Copier le lien du profil"
3. Vous avez l'URL

**Twitter/X** :
```
https://twitter.com/VOTRE_HANDLE
```

**Email** :
```
mailto:votre.email@example.com
```

---

## 4️⃣ INFORMATIONS PERSONNELLES

### Header - `src/components/Header.tsx`

**Avant** :
```tsx
<a href="#accueil" className="nav-logo" onClick={closeMenu}>
  <span className="logo-icon">🚀</span>
  MonPortfolio
</a>
```

**Après** :
```tsx
<a href="#accueil" className="nav-logo" onClick={closeMenu}>
  <span className="logo-icon">💻</span>
  Jean Dupont
</a>
```

### À Propos - `src/components/About.tsx`

**Texte principal** (ligne ~20) :
```tsx
<p className="about-paragraph">
  Bienvenue ! Je suis Jean Dupont, développeur Full-Stack passionné par la création d'applications web modernes et performantes. Avec 5 ans d'expérience, j'aide les startups et entreprises à transformer leurs idées en produits numériques de qualité.
</p>
```

**Statistiques** (lignes ~35-45) :
```tsx
<div className="stat">
  <h3 className="stat-number">50+</h3>
  <p className="stat-label">Projets complétés</p>
</div>
<div className="stat">
  <h3 className="stat-number">30+</h3>
  <p className="stat-label">Clients satisfaits</p>
</div>
<div className="stat">
  <h3 className="stat-number">5+</h3>
  <p className="stat-label">Années d'expérience</p>
</div>
```

**Photo** (ligne ~14) :
```tsx
<img 
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  alt="À propos"
  className="about-img"
/>
```

### Contact - `src/components/Contact.tsx`

**Email** (ligne ~75) :
```tsx
const mailtoLink = `mailto:votre.email@example.com?subject=...`;
```

**Détails contact** (lignes ~110-125) :
```tsx
<div className="detail-item">
  <h4>Email</h4>
  <a href="mailto:votre.email@example.com">votre.email@example.com</a>
</div>
<div className="detail-item">
  <h4>Localisation</h4>
  <p>Toulouse, France</p>
</div>
```

---

## 5️⃣ COULEURS - Tous les `.css`

### Couleurs Actuelles

| Élément | Couleur | Utilisation |
|---------|---------|-------------|
| Primaire | `#667eea` | Boutons, texte important |
| Secondaire | `#764ba2` | Dégradés, accents |
| Fond | `#f8f9ff` | Fond des sections |
| Texte | `#222` | Texte principal |
| Blanc | `#ffffff` | Texte sur fonds foncés |

### Comment Changer

1. Ouvrez un fichier `.css`
2. Utilisez Ctrl+H (Find & Replace)
3. Cherchez : `#667eea`
4. Remplacez par : Votre couleur (ex: `#0066ff`)
5. Faites la même chose pour `#764ba2`

### Générateurs de Couleurs

- [Coolors.co](https://coolors.co) - Pallettes professionnelles
- [Gradient Generator](https://cssgradient.io) - Dégradés personnalisés
- [Color Hunt](https://colorhunt.co) - Palettes prédéfinies

### Exemple de Changement

```css
/* AVANT */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* APRÈS (exemple avec bleu) */
background: linear-gradient(135deg, #0066ff 0%, #0044cc 100%);
```

---

## 6️⃣ POLICES - `src/App.css`

### Changements de Polices

Dans `App.css` ligne ~11 :

```css
/* AVANT */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;

/* APRÈS (exemple avec Poppins) */
font-family: 'Poppins', 'Segoe UI', 'Roboto', sans-serif;
```

### Ajouter une Police Google Fonts

1. Allez sur [fonts.google.com](https://fonts.google.com)
2. Cherchez une police (ex: "Poppins")
3. Cliquez "Select this style"
4. Copiez le `<link>` fourni
5. Collez-le dans `public/index.html` (dans `<head>`)
6. Utilisez-la dans votre CSS

---

## 7️⃣ EXEMPLE COMPLET DE PERSONNALISATION

### Avant (Par Défaut)

```typescript
// src/data/projects.ts
{
  id: 1,
  title: "E-commerce Platform",
  description: "Une plateforme e-commerce complète avec React et TypeScript",
  // ... image générique, liens d'exemple
}
```

### Après (Personnalisé)

```typescript
{
  id: 1,
  title: "Plateforme de Réservation d'Hôtel",
  description: "App web de réservation d'hôtel avec calendrier interactif",
  longDescription: "Application web développée en React et Node.js permettant la recherche, la comparaison et la réservation d'hôtels. Incluant système de paiement Stripe, avis clients, et panel d'administration pour les propriétaires.",
  image: "https://images.unsplash.com/photo-1565182999555-cf6da9c3a969?w=500&h=300&fit=crop",
  tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
  links: {
    website: "https://hotelbook.fr",
    github: "https://github.com/jeandup/hotel-booking",
    demo: "https://hotelbook.vercel.app"
  },
  featured: true
}
```

---

## ✅ CHECKLIST PERSONNALISATION

### Informations de Base
- [ ] Nom/Logo dans Header
- [ ] Photo d'avatar mise à jour
- [ ] Email de contact correct
- [ ] Bio/À Propos personnalisée
- [ ] Réseaux sociaux liés

### Projets
- [ ] 3-5 meilleurs projets ajoutés
- [ ] Titres descriptifs
- [ ] Descriptions détaillées
- [ ] Images de qualité
- [ ] Tags techniques corrects
- [ ] Tous les liens fonctionnent

### Compétences
- [ ] Compétences réelles listées
- [ ] Catégories pertinentes
- [ ] Rien de faux/gonflé

<!-- Section "Design" supprimée sur demande -->

### Avant Déploiement
- [ ] `npm start` fonctionne
- [ ] Aucune erreur console
- [ ] Testé sur mobile (375px min)
- [ ] Liens internes fonctionnent
- [ ] Formulaire contact fonctionne
- [ ] Réseaux sociaux accessibles

---

## 🚀 Prêt !

Une fois cette checklist complétée, vous êtes prêt pour :

1. `npm run build`
2. `npm install -g vercel`
3. `vercel --prod`

Et votre portfolio sera en ligne ! 🎉

---

**Besoin d'aide ? Vérifiez SETUP_GUIDE.md** 📚
