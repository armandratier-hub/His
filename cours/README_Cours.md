# 📚 Cours d'Histoire de France - Guide d'utilisation

Ce dossier contient **tous les cours structurés** pour le site **Histoire de France**, organisés par **niveau, thème, séquence et chapitre**.

---

## 🗂️ Structure des cours

```
cours/
├── 📁 CP/
│   └── 📁 Theme_1_Prehistoire/
│       ├── 📄 Theme_1_Prehistoire.md          # Résumé du thème
│       ├── 📄 Sequence_1_Les_premiers_hommes.md
│       ├── 📄 Sequence_2_La_vie_a_la_prehistoire.md
│       └── 📄 Sequence_3_L_art_prehistorique.md
│
├── 📁 CE1/
│   └── 📁 Theme_1_Gaulois/
│       ├── 📄 Theme_1_Gaulois.md
│       ├── 📄 Sequence_1_La_societe_gauloise.md
│       └── 📄 Sequence_2_Vercingetorix_et_les_Romains.md
│
├── 📁 CE2/
│   ├── 📁 Theme_1_Clovis_et_Merovingiens/
│   ├── 📁 Theme_2_Charlemagne/
│   └── 📁 Theme_3_Chateaux_forts/
│
├── 📁 CM1/
│   ├── 📁 Theme_1_Capetiens/
│   ├── 📁 Theme_2_Croisades/
│   └── 📁 Theme_3_Guerre_de_Cent_Ans/
│
├── 📁 CM2/
│   ├── 📁 Theme_1_Renaissance/
│   ├── 📁 Theme_2_Grandes_decouvertes/
│   └── 📁 Theme_3_Louis_XIV/
│
└── 📁 College/
    └── 📁 6eme/
        ├── 📁 Theme_1_Antiquite/
        │   ├── 📄 Theme_1_Antiquite.md
        │   ├── 📄 Sequence_1_La_Mesopotamie.md
        │   ├── 📄 Sequence_2_L_Egypte_des_pharaons.md
        │   ├── 📄 Sequence_3_La_Grece_antique.md
        │   └── 📄 Sequence_4_Rome_de_la_Republique_a_l_Empire.md
        └── 📁 Theme_2_Christianisme/
            └── 📄 Theme_2_Christianisme.md
```

---

## 📄 Formats des fichiers

### 1️⃣ **Fichiers Markdown (`.md`)**
- **Contenu** : Cours structurés avec :
  - **Titres et sous-titres** (ex: `# Thème 1`, `## Séquence 1`).
  - **Textes explicatifs** (paragraphe, listes, tableaux).
  - **Activités** (exercices, jeux, coloriages).
  - **Évaluations** (quiz, QCM).
  - **Ressources complémentaires** (liens vers vidéos, livres, sites web).
  - **Lexique** (définitions des mots clés).

- **Avantages** :
  - Facile à **lire et modifier** (avec un éditeur de texte ou un logiciel comme Typora).
  - Peut être **converti en PDF** (voir ci-dessous).
  - Compatible avec **GitHub** (affichage direct sur le site).

---

### 2️⃣ **Fichiers PDF (`.pdf`)** *(à générer)*
- **Contenu** : Version imprimable des cours Markdown.
- **Utilisation** :
  - **Téléchargement** depuis le site.
  - **Impression** pour les élèves ou les enseignants.
  - **Partage** (par email, clé USB, etc.).

---

## 🔧 Comment générer des PDF à partir des fichiers Markdown ?

### **Méthode 1 : Utiliser Typora (recommandé)**
1. **Télécharge [Typora](https://typora.io/)** (gratuit pour les écoles).
2. **Ouvre un fichier `.md`** dans Typora.
3. **Exporte en PDF** :
   - Clique sur **Fichier → Exporter → PDF**. 
   - Choisis un **thème** (ex: "GitHub" ou "Academic").
   - Clique sur **Exporter**. 
4. **Enregistre le PDF** dans le même dossier que le `.md`.

**✅ Avantages** :
- Simple et rapide.
- Design professionnel.
- Prise en charge des images et tableaux.

---

### **Méthode 2 : Utiliser Pandoc (pour les utilisateurs avancés)**
1. **Installe [Pandoc](https://pandoc.org/)**.
2. **Ouvre un terminal** (ou invite de commandes).
3. **Exécute la commande** :
   ```bash
   pandoc Theme_1_Prehistoire.md -o Theme_1_Prehistoire.pdf --pdf-engine=xelatex
   ```
4. **Le PDF sera généré** dans le même dossier.

**✅ Avantages** :
- Personnalisation avancée (CSS, templates).
- Conversion par lots (plusieurs fichiers à la fois).

---

### **Méthode 3 : Utiliser un convertisseur en ligne**
1. Va sur un site comme :
   - [Markdown to PDF](https://www.markdowntopdf.com/)
   - [CloudConvert](https://cloudconvert.com/md-to-pdf)
2. **Télécharge ton fichier `.md`**.
3. **Convertis-le en PDF**.
4. **Télécharge le PDF** généré.

**⚠️ Attention** :
- Vérifie la **confidentialité** des données (ne pas utiliser pour des fichiers sensibles).
- Certains sites limitent la **taille des fichiers**.

---

## 📥 Comment ajouter les PDF au site ?

1. **Génère les PDF** (avec Typora, Pandoc ou un convertisseur en ligne).
2. **Place-les dans le même dossier** que les fichiers `.md` :
   ```
cours/CP/Theme_1_Prehistoire/
├── Theme_1_Prehistoire.md
├── Theme_1_Prehistoire.pdf
├── Sequence_1_Les_premiers_hommes.md
└── Sequence_1_Les_premiers_hommes.pdf
```
3. **Ajoute un lien de téléchargement** dans les pages HTML :
   ```html
   <a href="cours/CP/Theme_1_Prehistoire/Theme_1_Prehistoire.pdf" 
      class="btn btn-primary" 
      download>
      <i class="fas fa-file-pdf"></i> Télécharger le cours en PDF
   </a>
   ```

---

## 📌 Conseils pour rédiger les cours

### **Structure type d’un cours**
1. **Titre** (ex: `# Thème 1 : La Préhistoire`).
2. **Introduction** (contexte, objectifs).
3. **Leçons** (sous-parties avec `##` ou `###`).
4. **Activités** (exercices, jeux, projets).
5. **Évaluation** (quiz, QCM, questions ouvertes).
6. **Ressources complémentaires** (liens, livres, vidéos).
7. **Lexique** (définitions des mots clés).

---

### **Bonnes pratiques**
- **Utilise des images libres de droits** (ex: [Wikimedia Commons](https://commons.wikimedia.org/)).
- **Cite tes sources** (ex: "Source : Musée de l’Homme").
- **Adapte le langage** au niveau des élèves (CP ≠ Terminale).
- **Ajoute des illustrations** pour rendre le cours plus visuel.
- **Inclue des activités interactives** (quiz, memory, coloriages).

---

## 🎯 Exemple de cours complet (CP - Préhistoire)

### **Fichier** : `cours/CP/Theme_1_Prehistoire/Theme_1_Prehistoire.md`
**Contenu** :
```markdown
# 🏰 Thème 1 : La Préhistoire
**Niveau : CP** | **Durée : 3 séances**

## Introduction
La Préhistoire est la première période de l’Histoire...

## Séquence 1 : Les premiers hommes
- Homo Habilis, Homo Erectus, Homo Sapiens.
- Activité : Dessine Lucy.

## Séquence 2 : La vie à la Préhistoire
- Habitat, alimentation, outils.
- Activité : Jeu de rôle "Chasseur-Cueilleur".

## Séquence 3 : L’art préhistorique
- Peintures rupestres, gravures, sculptures.
- Activité : Coloriage de Lascaux.

## Évaluation
Quiz : 5 questions sur la Préhistoire.

## Ressources
- Vidéo : C’est pas sorcier - La Préhistoire.
- Livre : La Préhistoire pour les enfants.
```

**PDF généré** : `Theme_1_Prehistoire.pdf` (téléchargeable depuis le site).

---

## 🔗 Liens utiles

### **Outils pour rédiger en Markdown**
- [Typora](https://typora.io/) (éditeur WYSIWYG).
- [Visual Studio Code](https://code.visualstudio.com/) + extension **Markdown Preview Enhanced**.
- [StackEdit](https://stackedit.io/) (éditeur en ligne).

### **Banques d’images libres de droits**
- [Wikimedia Commons](https://commons.wikimedia.org/) (recherche par mot-clé).
- [Pixabay](https://pixabay.com/) (illustrations, photos).
- [Unsplash](https://unsplash.com/) (photos haute qualité).

### **Outils pour générer des PDF**
- [Typora](https://typora.io/) (recommandé).
- [Pandoc](https://pandoc.org/) (pour les utilisateurs avancés).
- [Markdown to PDF](https://www.markdowntopdf.com/) (en ligne).

---

## 📢 Comment contribuer ?

1. **Fork** ce dépôt.
2. **Crée une branche** pour tes modifications (ex: `feature/ajout-cours-5eme`).
3. **Ajoute tes cours** dans le dossier `cours/` (en `.md` ou `.pdf`).
4. **Ouvre une Pull Request** avec une description claire.

### **Règles à respecter** :
- **Respecte la structure** (Thème → Séquence → Chapitre).
- **Utilise des images libres de droits**.
- **Cite tes sources**.
- **Adapte le langage** au niveau des élèves.

---

## 📜 Licence
Tous les cours sont sous licence **CC-BY-SA 4.0** (comme le reste du projet).
- Tu peux **partager** et **adapter** les cours.
- Tu dois **citer l’auteur** et **partager à l’identique**.

Voir le fichier [LICENSE](../../LICENSE) pour plus de détails.
