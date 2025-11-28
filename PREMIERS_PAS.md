🚀 PREMIERS PAS - Commencez MAINTENANT

═══════════════════════════════════════════════════════════════

ÉTAPE 1️⃣ : INSTALLATION (10-15 minutes)

Ouvrez PowerShell/Terminal et exécutez :

cd "c:\Users\hp\Desktop\ARCHYVE PORTFOLIO\portfolio-manuel"
npm install

⏳ Attendez... (télécharge ~800 MB de dépendances)

✅ Quand vous voyez : "added X packages"
→ C'est bon ! Passez à l'étape 2.


ÉTAPE 2️⃣ : DÉMARRER EN LOCAL (30 secondes)

npm start

✅ Attend quelques secondes...
✅ Puis s'ouvre automatiquement : http://localhost:3000
✅ Vous voyez votre portfolio par défaut

Bravo ! Vous avez un portfolio en local ! 🎉


ÉTAPE 3️⃣ : PERSONNALISER VOS PROJETS (30-60 minutes)

1. Ouvrez le fichier : src/data/projects.ts
   
2. Vous verrez le tableau "projects" avec 4 projets d'exemple
   
3. MODIFIEZ ou REMPLACEZ par VOS projets :

   Exemple complet :
   ────────────────
   {
     id: 1,
     title: "Mon Projet Incroyable",
     description: "Une courte description (1-2 lignes)",
     longDescription: "Une description plus longue (paragraphe complet)",
     image: "https://images.unsplash.com/photo-XXX",
     tags: ["React", "TypeScript", "Tailwind"],
     links: {
       website: "https://mon-site.com",
       github: "https://github.com/moi/monprojet",
       demo: "https://mon-demo.vercel.app"
     },
     featured: true  // true = affiche en vedette
   }

4. Besoin d'images ?
   → https://unsplash.com (gratuit)
   → Cherchez → Copiez l'URL de l'image
   → Collez dans 'image: "..."'

5. Sauvegardez (Ctrl+S)


ÉTAPE 4️⃣ : METTRE À JOUR VOS INFOS (10-20 minutes)

Allez dans : src/components/Contact.tsx

Ligne ~75, cherchez :
   const mailtoLink = `mailto:your.email@example.com?subject=...`;

Remplacez : your.email@example.com → VOTRE EMAIL


Allez dans : src/components/Header.tsx

Ligne ~14, cherchez :
   MonPortfolio

Remplacez par : VOTRE NOM


Allez dans : src/data/projects.ts

Cherchez : export const socialLinks = [

Remplacez les URLs :
   - GitHub : https://github.com/VOTRENOM
   - LinkedIn : https://linkedin.com/in/VOTRENOM
   - Twitter : https://twitter.com/VOTRENOM
   - Email : mailto:votre.email@example.com


ÉTAPE 5️⃣ : TESTER EN LOCAL (2 minutes)

Retournez à : http://localhost:3000

F5 ou Ctrl+R pour rafraîchir

✅ Vous devez voir :
   - Vos projets affichés
   - Vos infos personnelles
   - Votre email dans le formulaire
   - Vos réseaux sociaux

⚠️ Si vous avez des erreurs rouges :
   → Vérifiez la syntaxe (virgules, guillemets)
   → Consultez la console (F12)


ÉTAPE 6️⃣ : TESTER SUR MOBILE (2 minutes)

Appuyez sur F12 (Outils de développement)

Cliquez sur l'icône "Mode adaptatif" (ou Ctrl+Shift+M)

Sélectionnez iPhone ou un appareil mobile

Vérifiez :
✓ Le texte est lisible
✓ Les images s'affichent
✓ Le menu hamburger fonctionne
✓ Les boutons sont cliquables


ÉTAPE 7️⃣ : BUILD POUR LA PRODUCTION (5 minutes)

Dans le terminal, exécutez :

npm run build

✅ Cela crée un dossier 'build/' optimisé

⚠️ S'il y a des erreurs :
   → Vérifiez src/data/projects.ts
   → Vérifiez les imports
   → Consultez SETUP_GUIDE.md


ÉTAPE 8️⃣ : DÉPLOYER SUR VERCEL (5 minutes)

Option A : Interface Web (Recommandé)
──────────────────────────────────

1. Allez sur https://vercel.com

2. Cliquez "Sign Up" (créez un compte)

3. Connectez votre GitHub

4. Cliquez "New Project"

5. Sélectionnez ce dépôt

6. Vercel détecte automatiquement React

7. Cliquez "Deploy"

⏳ Attendez 1-2 minutes...

✅ Votre site est en ligne ! 🎉

URL : https://portfolio-manuel.vercel.app
      (remplacez "portfolio-manuel" par votre repo name)


Option B : CLI Vercel
──────────────────────

npm install -g vercel
vercel login
vercel --prod

Suivez les instructions.


ÉTAPE 9️⃣ : VÉRIFIER EN LIGNE (2 minutes)

Accédez à votre URL Vercel

Testez :
✓ Page s'affiche correctement
✓ Images chargent
✓ Liens fonctionnent
✓ Menu fonctionne
✓ Responsive OK

Si problème → Vérifiez les logs Vercel


ÉTAPE 🔟 : PARTAGER AU MONDE ! (∞ minutes)

Copiez votre URL :
https://portfolio-manuel.vercel.app

Partagez sur :
- ✅ LinkedIn (partager dans posts)
- ✅ Twitter/X (partager le lien)
- ✅ GitHub (dans votre bio)
- ✅ Email (signature)
- ✅ CV (rubrique "Portfolio")
- ✅ WhatsApp (à vos amis dev)
- ✅ Discord (à votre serveur)


═══════════════════════════════════════════════════════════════

⏱️ TEMPS TOTAL : ~60 minutes maximum


✅ CE QUE VOUS AVEZ FAIT

[████░░░░░░] Installation (15 min)
[████████░░] Démarrage local (30 sec)
[████████████████░░] Personnalisation (60 min)
[████░░░░░░] Test local (5 min)
[████░░░░░░] Build (5 min)
[████░░░░░░] Déploiement (5 min)
[████░░░░░░] Vérification (5 min)
[████░░░░░░] Partage (∞ min)

Résultat : Un portfolio professionnel en ligne ! 🚀


🆘 SI VOUS ÊTES BLOQUÉ

Erreur : "npm: not found"
→ Installez Node.js depuis https://nodejs.org

Erreur : "Port 3000 already in use"
→ PORT=3001 npm start

Erreur : "Cannot find module"
→ npm install --legacy-peer-deps

Erreur : "Image not found"
→ Vérifiez l'URL de l'image (copiez-collez)

Erreur : "Build failed"
→ npm run build (test local)
→ Vérifiez src/data/projects.ts
→ Vérifiez que npm install a réussi

Erreur : "Vercel deployment failed"
→ Consultez les logs Vercel (cliquez sur le déploiement)
→ Vérifiez que npm run build fonctionne localement

Autre problème :
→ Lisez SETUP_GUIDE.md (Troubleshooting)
→ Consultez QUICKSTART.txt


📞 RESSOURCES D'AIDE

Documentation :
- React : https://react.dev
- Vercel : https://vercel.com/docs
- MDN : https://developer.mozilla.org

Communauté :
- Stack Overflow : https://stackoverflow.com
- GitHub Discussions : https://github.com/discussions
- Discord Servers : Cherchez "JavaScript", "React"

Images :
- Unsplash : https://unsplash.com
- Pexels : https://pexels.com
- Pixabay : https://pixabay.com

Outils :
- Git : https://git-scm.com
- VS Code : https://code.visualstudio.com
- Postman : https://postman.com


💡 ASTUCES

1. Gardez le terminal ouvert avec npm start
   → Vous verrez les erreurs en temps réel

2. Testez sur mobile AVANT de déployer
   → F12 → Mode adaptatif

3. Vérifiez chaque lien avant de déployer
   → Cliquez sur tous les boutons

4. Prenez des captures d'écran du résultat
   → Utile pour vos posts LinkedIn !

5. Gardez votre portfolio à jour
   → Ajoutez vos nouveaux projets régulièrement

6. Demandez des retours
   → À vos amis dev, à votre famille
   → Améliorez en fonction des feedbacks


🎯 RÉSUMÉ RAPIDE

1. npm install (10 min)
2. Modifiez src/data/projects.ts (30 min)
3. npm start (vérifier)
4. npm run build (tester)
5. vercel --prod (déployer)
6. Partagez l'URL ! 🎉


═══════════════════════════════════════════════════════════════

Vous avez maintenant un portfolio professionnel 
complet, moderne et gratuit ! 🚀

Prêt à démarrer ? Exécutez :

cd "c:\Users\hp\Desktop\ARCHYVE PORTFOLIO\portfolio-manuel"
npm install

Bonne chance ! 🌍

═══════════════════════════════════════════════════════════════

Questions ? Consultez les autres guides :
- README.md (Guide rapide)
- SETUP_GUIDE.md (Installation détaillée)
- PERSONNALISATION.md (Comment adapter)
- QUICKSTART.txt (Résumé visuel)

Portfolio Manuel v1.0
28 novembre 2025
