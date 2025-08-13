# 🎯 Guide d'Adaptation Template Site Vitrine

## 📋 Instructions pour Claude Code

Quand un nouveau client arrive, utilisez ce guide pour adapter rapidement le template à ses besoins.

---

## 🔧 Processus d'Adaptation

### 1. **Informations Client Requises**

Demandez au client de fournir :

#### 📝 **Informations de Base**
- **Nom de l'entreprise** : 
- **Secteur d'activité** : 
- **Ville/Région** : 
- **Slogan/Accroche** : 
- **Description courte** (2-3 lignes) : 

#### 🎨 **Identité Visuelle**
- **Couleurs principales** (2-3 couleurs max) : 
- **Logo** (si disponible) : 
- **Style souhaité** : Moderne / Classique / Créatif / Corporate

#### 📞 **Coordonnées**
- **Adresse complète** : 
- **Téléphone** : 
- **Email** : 
- **Site web** (si existant) : 
- **Réseaux sociaux** : 

#### 🛠️ **Services/Produits**
- **Service 1** : Nom + Description courte
- **Service 2** : Nom + Description courte  
- **Service 3** : Nom + Description courte
- **Service principal** (à mettre en avant) : 

#### 💰 **Tarifs** (optionnel)
- **Offre 1** : Nom + Prix + Description
- **Offre 2** : Nom + Prix + Description
- **Offre 3** : Nom + Prix + Description

#### 👥 **Témoignages** (optionnel)
- **Client 1** : Prénom + Témoignage court
- **Client 2** : Prénom + Témoignage court
- **Client 3** : Prénom + Témoignage court

---

## 🚀 Étapes d'Adaptation

### **Étape 1 : Copier le Template**
```bash
cp -r club-plongee-saint-leu nouveau-client-[nom]
cd nouveau-client-[nom]
```

### **Étape 2 : Personnalisation Rapide**

#### 🎨 **Variables CSS à Modifier** (dans `<style>`)
```css
:root {
    --primary: #[couleur-principale];     /* Ex: #e74c3c pour rouge */
    --secondary: #[couleur-secondaire];   /* Ex: #c0392b pour rouge foncé */
    --accent: #[couleur-accent];          /* Ex: #f39c12 pour orange */
}
```

#### 📝 **Textes à Remplacer**

1. **Title & Meta** :
   - `<title>` : "[Nom Entreprise] | [Slogan]"
   - `meta description` : Description SEO adaptée
   - `meta keywords` : Mots-clés du secteur

2. **Navigation** :
   - Logo/Nom entreprise
   - Liens menu si nécessaire

3. **Hero Section** :
   - H1 : Titre accrocheur
   - Paragraphe : Description de l'entreprise
   - Boutons CTA

4. **Services** :
   - Remplacer les 3 services
   - Adapter les icônes FontAwesome
   - Personnaliser les descriptions

5. **À Propos** :
   - Titre et texte de présentation
   - Adapter les 4 features

6. **Tarifs** :
   - Adapter les catégories
   - Modifier prix et descriptions
   - Ajuster les inclusions

7. **Contact** :
   - Coordonnées complètes
   - Horaires d'ouverture

#### 🖼️ **Images à Remplacer**

**Option 1 : Images Client**
- Remplacer par les photos fournies par le client

**Option 2 : Générer avec IA**
```bash
# Utiliser Replicate Flux Pro 1.1 pour générer :
# - Image hero (secteur d'activité)
# - 4-6 images galerie
# - Image à propos
```

**Prompts IA par Secteur :**

- **Restaurant** : "Professional food photography, elegant restaurant interior, delicious dishes, warm lighting"
- **Immobilier** : "Modern real estate office, beautiful properties, professional agent, luxury homes"
- **Salon beauté** : "Modern beauty salon, professional treatments, relaxing atmosphere, elegant interior"
- **Cabinet médical** : "Modern medical office, professional healthcare, clean environment, medical equipment"

#### 🎯 **Adaptations Sectorielles**

**Restaurant :**
- Services : Cuisine, Traiteur, Événements
- Couleurs : Rouge/Orange/Doré
- Icônes : fas fa-utensils, fas fa-wine-glass, fas fa-birthday-cake

**Immobilier :**
- Services : Vente, Location, Estimation
- Couleurs : Bleu/Vert/Doré
- Icônes : fas fa-home, fas fa-key, fas fa-chart-line

**Salon Beauté :**
- Services : Coiffure, Soins, Manucure
- Couleurs : Rose/Violet/Doré
- Icônes : fas fa-cut, fas fa-spa, fas fa-hand-sparkles

**Cabinet Médical :**
- Services : Consultation, Urgences, Prévention
- Couleurs : Bleu/Blanc/Vert
- Icônes : fas fa-stethoscope, fas fa-heartbeat, fas fa-user-md

### **Étape 3 : Optimisation SEO**

1. **Sitemap.xml** : Adapter l'URL du site
2. **Schema.org** : Modifier les données LocalBusiness
3. **Meta tags** : Personnaliser pour le secteur
4. **Alt text** : Adapter aux nouvelles images

### **Étape 4 : Test & Livraison**

1. **Tester** toutes les fonctionnalités
2. **Vérifier** le responsive
3. **Valider** le mode nuit
4. **Contrôler** les liens et formulaires

---

## 📋 Checklist de Livraison

- [ ] Toutes les informations client intégrées
- [ ] Couleurs et style adaptés
- [ ] Images remplacées/générées
- [ ] Services personnalisés
- [ ] Tarifs adaptés (si fournis)
- [ ] Coordonnées mises à jour
- [ ] SEO optimisé pour le secteur
- [ ] Tests responsive OK
- [ ] Mode nuit fonctionnel
- [ ] Formulaire de contact testé

---

## 🎨 Palette de Couleurs par Secteur

### Restaurant
```css
--primary: #e74c3c;    /* Rouge appétissant */
--secondary: #c0392b;  /* Rouge foncé */
--accent: #f39c12;     /* Orange chaleureux */
```

### Immobilier
```css
--primary: #2ecc71;    /* Vert confiance */
--secondary: #27ae60;  /* Vert foncé */
--accent: #f1c40f;     /* Jaune doré */
```

### Salon Beauté
```css
--primary: #e91e63;    /* Rose élégant */
--secondary: #ad1457;  /* Rose foncé */
--accent: #9c27b0;     /* Violet raffiné */
```

### Cabinet Médical
```css
--primary: #3498db;    /* Bleu médical */
--secondary: #2980b9;  /* Bleu foncé */
--accent: #1abc9c;     /* Vert santé */
```

### Tech/SaaS
```css
--primary: #9b59b6;    /* Violet tech */
--secondary: #8e44ad;  /* Violet foncé */
--accent: #e67e22;     /* Orange innovation */
```

---

## 💡 Conseils d'Adaptation

### ✅ **À Faire**
- Garder la structure HTML existante
- Adapter uniquement le contenu et les couleurs
- Conserver les animations et interactions
- Maintenir l'optimisation SEO
- Tester sur mobile et desktop

### ❌ **À Éviter**
- Modifier la structure CSS complexe
- Supprimer les fonctionnalités (mode nuit, galerie, etc.)
- Oublier de tester le responsive
- Négliger l'optimisation SEO
- Surcharger avec trop de couleurs

---

## 🚀 Livraison Client

### **Fichiers à Fournir :**
1. **Dossier complet** du site adapté
2. **README.md** avec instructions d'hébergement
3. **Guide d'utilisation** du mode nuit et fonctionnalités
4. **Fichiers sources** des images (si générées)

### **Instructions Hébergement :**
- Compatible avec tout hébergeur web
- Fonctionne avec Netlify, Vercel, GitHub Pages
- Aucune base de données requise
- Optimisé pour les performances

---

## 📞 Support Post-Livraison

### **Modifications Simples** (incluses)
- Changement de textes
- Modification des coordonnées
- Ajustement des couleurs
- Remplacement d'images

### **Modifications Avancées** (facturation supplémentaire)
- Ajout de nouvelles sections
- Intégration de systèmes tiers
- Modifications structurelles importantes
- Développements spécifiques

---

*Template créé par Rovo Dev - Site Vitrine Premium Multiniche*