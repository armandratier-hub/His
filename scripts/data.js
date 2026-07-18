// ============================================
// Histoire de France - Données pour les activités
// ============================================

// Données pour les quiz
const quizzes = {
    // Quiz pour le Cycle 1 (CP-CE2)
    "quiz-gaulois": {
        title: "Quiz sur les Gaulois",
        description: "Teste tes connaissances sur les Gaulois et les Romains !",
        questions: [
            {
                question: "Quel est le nom du chef gaulois qui a uni les tribus contre les Romains ?",
                options: ["Astérix", "Vercingétorix", "Obélix", "Panoramix"],
                correct: 1,
                explanation: "Vercingétorix a uni les tribus gauloises contre Jules César en 52 av. J.-C. lors de la bataille d'Alésia."
            },
            {
                question: "Comment s'appelle le village d'Astérix ?",
                options: ["Lutèce", "Asterixville", "Un village sans nom", "Massilia"],
                correct: 2,
                explanation: "Le village d'Astérix n'a pas de nom précis dans les bandes dessinées !"
            },
            {
                question: "Quel animal sacré les Gaulois craignaient-ils de voir tomber dans leur chaudron ?",
                options: ["Un sanglier", "Un coq", "Un ciel", "Une feuille"],
                correct: 0,
                explanation: "Les Gaulois craignaient que le ciel ne leur tombe sur la tête ! (C'est une expression célèbre.)"
            },
            {
                question: "Quel peuple a vaincu les Gaulois en 52 av. J.-C. ?",
                options: ["Les Grecs", "Les Romains", "Les Égyptiens", "Les Vikings"],
                correct: 1,
                explanation: "Les Romains, dirigés par Jules César, ont vaincu les Gaulois à Alésia."
            },
            {
                question: "Quel est le nom du druide dans Astérix ?",
                options: ["Panoramix", "Assurancetourix", "Abracourcix", "Idéfix"],
                correct: 0,
                explanation: "Panoramix est le druide qui prépare la potion magique."
            }
        ]
    },
    
    // Quiz pour le Cycle 2 (CE2-CM2)
    "quiz-renaissance": {
        title: "Quiz sur la Renaissance",
        description: "Découvre les grands noms et inventions de la Renaissance !",
        questions: [
            {
                question: "Qui a peint la Joconde ?",
                options: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Donatello"],
                correct: 1,
                explanation: "Léonard de Vinci a peint la Joconde (ou Mona Lisa) entre 1503 et 1506."
            },
            {
                question: "Quel roi français a construit le château de Chambord ?",
                options: ["Louis XIV", "François Ier", "Henri IV", "Charles Quint"],
                correct: 1,
                explanation: "François Ier a lancé la construction de Chambord en 1519."
            },
            {
                question: "Quelle invention a révolutionné l'imprimerie au XVe siècle ?",
                options: ["La machine à vapeur", "Les caractères mobiles", "L'électricité", "Le téléphone"],
                correct: 1,
                explanation: "Gutenberg a inventé les caractères mobiles en métal vers 1450."
            },
            {
                question: "Quel explorateur a découvert l'Amérique en 1492 ?",
                options: ["Christophe Colomb", "Magellan", "Vespucci", "Cartier"],
                correct: 0,
                explanation: "Christophe Colomb a atteint les Bahamas en 1492, pensant avoir trouvé une route vers les Indes."
            },
            {
                question: "Quel mouvement artistique a marqué la Renaissance ?",
                options: ["L'art gothique", "L'humanisme", "Le romantisme", "Le cubisme"],
                correct: 1,
                explanation: "L'humanisme place l'homme au centre des préoccupations, une idée clé de la Renaissance."
            }
        ]
    },
    
    // Quiz pour le Cycle 3 (6ème-3ème)
    "quiz-revolution": {
        title: "Quiz sur la Révolution française",
        description: "Teste tes connaissances sur les événements de 1789 à 1799 !",
        questions: [
            {
                question: "En quelle année a eu lieu la prise de la Bastille ?",
                options: ["1788", "1789", "1790", "1791"],
                correct: 1,
                explanation: "La prise de la Bastille a eu lieu le 14 juillet 1789, marquant le début de la Révolution française."
            },
            {
                question: "Quel document a été adopté le 26 août 1789 ?",
                options: ["La Constitution", "La Déclaration des Droits de l'Homme et du Citoyen", "Le Code Napoléon", "La Marseillaise"],
                correct: 1,
                explanation: "La Déclaration des Droits de l'Homme et du Citoyen a été adoptée le 26 août 1789."
            },
            {
                question: "Qui était le roi de France au début de la Révolution ?",
                options: ["Louis XIV", "Louis XVI", "Napoléon", "Charles X"],
                correct: 1,
                explanation: "Louis XVI était roi de France de 1774 à 1792, date de son exécution."
            },
            {
                question: "Quel groupe politique était le plus radical pendant la Terreur ?",
                options: ["Les Girondins", "Les Jacobins", "Les Royalistes", "Les Montagnards"],
                correct: 3,
                explanation: "Les Montagnards, dirigés par Robespierre, ont mené la Terreur en 1793-1794."
            },
            {
                question: "Quel chant est devenu l'hymne national français ?",
                options: ["La Marseillaise", "Le Chant du départ", "La Carmagnole", "Ah ! ça ira"],
                correct: 0,
                explanation: "La Marseillaise, écrite en 1792 par Rouget de Lisle, est devenue l'hymne national."
            }
        ]
    }
};

// Données pour les jeux de memory
const memoryGames = {
    "memory-prehistoire": {
        title: "Memory de la Préhistoire",
        description: "Retrouve les paires d'images de la Préhistoire !",
        cards: [
            { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mammoth_by_Ghedo.jpg/320px-Mammoth_by_Ghedo.jpg", name: "Mammouth" },
            { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mammoth_by_Ghedo.jpg/320px-Mammoth_by_Ghedo.jpg", name: "Mammouth" },
            { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cave_painting_of_a_bison.jpg/320px-Cave_painting_of_a_bison.jpg", name: "Bison" },
            { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cave_painting_of_a_bison.jpg/320px-Cave_painting_of_a_bison.jpg", name: "Bison" },
            { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Neanderthal_man_forehead.jpg/320px-Neanderthal_man_forehead.jpg", name: "Homme de Néandertal" },
            { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Neanderthal_man_forehead.jpg/320px-Neanderthal_man_forehead.jpg", name: "Homme de Néandertal" },
            { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Stone_Age_tools.jpg/320px-Stone_Age_tools.jpg", name: "Outils en pierre" },
            { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Stone_Age_tools.jpg/320px-Stone_Age_tools.jpg", name: "Outils en pierre" },
            { id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flint_hand_axe.jpg/320px-Flint_hand_axe.jpg", name: "Hache en silex" },
            { id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flint_hand_axe.jpg/320px-Flint_hand_axe.jpg", name: "Hache en silex" },
            { id: 6, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Lascaux_painting.jpg/320px-Lascaux_painting.jpg", name: "Peinture de Lascaux" },
            { id: 6, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Lascaux_painting.jpg/320px-Lascaux_painting.jpg", name: "Peinture de Lascaux" }
        ]
    },
    
    "memory-moyen-age": {
        title: "Memory du Moyen Âge",
        description: "Retrouve les paires d'images du Moyen Âge !",
        cards: [
            { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Chateau_de_Pierrefonds.jpg/320px-Chateau_de_Pierrefonds.jpg", name: "Château fort" },
            { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Chateau_de_Pierrefonds.jpg/320px-Chateau_de_Pierrefonds.jpg", name: "Château fort" },
            { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chevalier_médiéval.jpg/320px-Chevalier_médiéval.jpg", name: "Chevalier" },
            { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chevalier_médiéval.jpg/320px-Chevalier_médiéval.jpg", name: "Chevalier" },
            { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Blason_France.svg/320px-Blason_France.svg.png", name: "Blason" },
            { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Blason_France.svg/320px-Blason_France.svg.png", name: "Blason" },
            { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Charlemagne_denier.jpg/320px-Charlemagne_denier.jpg", name: "Charlemagne" },
            { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Charlemagne_denier.jpg/320px-Charlemagne_denier.jpg", name: "Charlemagne" },
            { id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cathédrale_Notre-Dame_de_Paris.jpg/320px-Cathédrale_Notre-Dame_de_Paris.jpg", name: "Cathédrale" },
            { id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cathédrale_Notre-Dame_de_Paris.jpg/320px-Cathédrale_Notre-Dame_de_Paris.jpg", name: "Cathédrale" },
            { id: 6, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tapestry_of_Bayeux_Scene1.jpg/320px-Tapestry_of_Bayeux_Scene1.jpg", name: "Tapisserie de Bayeux" },
            { id: 6, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tapestry_of_Bayeux_Scene1.jpg/320px-Tapestry_of_Bayeux_Scene1.jpg", name: "Tapisserie de Bayeux" }
        ]
    }
};

// Données pour les timelines
const timelines = {
    "timeline-moyen-age": {
        title: "Timeline du Moyen Âge",
        description: "Place les événements dans l'ordre chronologique !",
        events: [
            { id: 1, date: "476", title: "Chute de l'Empire romain d'Occident", description: "Fin de l'Antiquité et début du Moyen Âge." },
            { id: 2, date: "496", title: "Baptême de Clovis", description: "Clovis, roi des Francs, se convertit au christianisme." },
            { id: 3, date: "800", title: "Couronnement de Charlemagne", description: "Charlemagne est couronné empereur d'Occident par le pape Léon III." },
            { id: 4, date: "987", title: "Avènement d'Hugues Capet", description: "Début de la dynastie capétienne en France." },
            { id: 5, date: "1066", title: "Bataille d'Hastings", description: "Guillaume le Conquérant envahit l'Angleterre." },
            { id: 6, date: "1096", title: "Début des croisades", description: "Première croisade pour libérer Jérusalem." },
            { id: 7, date: "1180", title: "Règne de Philippe Auguste", description: "Renforcement du pouvoir royal en France." },
            { id: 8, date: "1214", title: "Bataille de Bouvines", description: "Victoire de Philippe Auguste contre une coalition européenne." },
            { id: 9, date: "1337", title: "Début de la guerre de Cent Ans", description: "Conflit entre la France et l'Angleterre." },
            { id: 10, date: "1429", title: "Jeanne d'Arc libère Orléans", description: "Jeanne d'Arc aide à libérer la ville d'Orléans." },
            { id: 11, date: "1453", title: "Fin de la guerre de Cent Ans", description: "Victoire française à Castillon." },
            { id: 12, date: "1492", title: "Fin du Moyen Âge", description: "Chute de Constantinople et découverte de l'Amérique." }
        ]
    },
    
    "frise-revolution": {
        title: "Frise de la Révolution française",
        description: "Place les événements de 1789 à 1799 dans l'ordre.",
        events: [
            { id: 1, date: "1789", title: "Prise de la Bastille", description: "14 juillet 1789 : début de la Révolution." },
            { id: 2, date: "1789", title: "Déclaration des Droits de l'Homme", description: "26 août 1789 : adoption par l'Assemblée nationale." },
            { id: 3, date: "1791", title: "Fuite de Louis XVI à Varennes", description: "20 juin 1791 : tentative de fuite du roi." },
            { id: 4, date: "1792", title: "Proclamation de la République", description: "21 septembre 1792 : fin de la monarchie." },
            { id: 5, date: "1793", title: "Exécution de Louis XVI", description: "21 janvier 1793 : Louis XVI est guillotiné." },
            { id: 6, date: "1793-1794", title: "La Terreur", description: "Période de répression menée par Robespierre." },
            { id: 7, date: "1794", title: "Chute de Robespierre", description: "28 juillet 1794 (9 Thermidor) : fin de la Terreur." },
            { id: 8, date: "1795", title: "Directoire", description: "Nouveau régime politique après la Terreur." },
            { id: 9, date: "1799", title: "Coup d'État de Napoléon", description: "18 Brumaire : Napoléon prend le pouvoir." }
        ]
    }
};

// Données pour les cartes interactives
const interactiveMaps = {
    "carte-france-rois": {
        title: "Carte de France des Rois",
        description: "Découvre où régnaient les rois de France.",
        regions: [
            { id: "paris", name: "Paris", description: "Capitale des rois de France depuis le Xe siècle.", x: 50, y: 50 },
            { id: "reims", name: "Reims", description: "Lieu de sacre des rois de France (ex: Clovis, Charlemagne).", x: 70, y: 30 },
            { id: "versailles", name: "Versailles", description: "Résidence de Louis XIV, le Roi-Soleil.", x: 45, y: 45 },
            { id: "orleans", name: "Orléans", description: "Ville libérée par Jeanne d'Arc en 1429.", x: 40, y: 60 },
            { id: "tours", name: "Tours", description: "Résidence des rois de France à la Renaissance.", x: 30, y: 70 },
            { id: "lyon", name: "Lyon", description: "Ville importante sous les Romains et au Moyen Âge.", x: 60, y: 80 },
            { id: "bordeaux", name: "Bordeaux", description: "Ville sous domination anglaise pendant la guerre de Cent Ans.", x: 20, y: 85 }
        ]
    },
    
    "carte-europe-1914": {
        title: "Carte de l'Europe en 1914",
        description: "Comprendre les alliances avant la Première Guerre mondiale.",
        regions: [
            { id: "france", name: "France", description: "Membre de la Triple-Entente (avec Royaume-Uni et Russie).", x: 30, y: 60 },
            { id: "uk", name: "Royaume-Uni", description: "Membre de la Triple-Entente.", x: 20, y: 40 },
            { id: "russia", name: "Russie", description: "Membre de la Triple-Entente.", x: 80, y: 30 },
            { id: "germany", name: "Allemagne", description: "Membre de la Triple-Alliance (avec Autriche-Hongrie et Italie).", x: 50, y: 50 },
            { id: "austria", name: "Autriche-Hongrie", description: "Membre de la Triple-Alliance.", x: 60, y: 60 },
            { id: "italy", name: "Italie", description: "Membre de la Triple-Alliance (mais rejoindra les Alliés en 1915).", x: 50, y: 70 }
        ]
    }
};

// Données pour les jeux de rôle (Cycle 2)
const rolePlayingGames = {
    "jeu-chevalier": {
        title: "Deviens un chevalier !",
        description: "Choisis ton équipement et pars à l'aventure.",
        scenario: "Tu es un jeune écuyer au Moyen Âge. Le roi t'a confié une mission : protéger le royaume des envahisseurs. Avant de partir, tu dois choisir ton équipement.",
        options: [
            {
                id: 1,
                title: "Épée et bouclier",
                description: "L'équipement classique du chevalier. Parfait pour le combat rapproché.",
                result: "Tu es maintenant un chevalier redoutable au combat ! Les envahisseurs n'ont qu'à bien se tenir."
            },
            {
                id: 2,
                title: "Arc et flèches",
                description: "Idéal pour attaquer de loin. Tu peux toucher l'ennemi avant qu'il ne t'atteigne.",
                result: "Tu deviens un archer redouté. Tes flèches atteignent toujours leur cible !"
            },
            {
                id: 3,
                title: "Armure lourde",
                description: "Une armure solide qui te protège, mais qui te ralentit.",
                result: "Tu es presque invincible, mais tu avances lentement. Heureusement, tes ennemis ont du mal à te toucher !"
            },
            {
                id: 4,
                title: "Cheval de guerre",
                description: "Un destrier puissant pour charger l'ennemi.",
                result: "Avec ton cheval, tu es rapide et redoutable. Les envahisseurs fuient à ton approche !"
            }
        ]
    },
    
    "jeu-explorateur": {
        title: "Deviens un explorateur de la Renaissance !",
        description: "Choisis ta destination et pars à la découverte du monde.",
        scenario: "Tu es un explorateur au XVe siècle. Les rois d'Europe financent des expéditions pour découvrir de nouvelles terres. Où veux-tu aller ?",
        options: [
            {
                id: 1,
                title: "Traverser l'Atlantique",
                description: "Comme Christophe Colomb, pars à la recherche d'une route vers les Indes.",
                result: "Tu as découvert un nouveau continent ! Les rois d'Espagne sont fiers de toi."
            },
            {
                id: 2,
                title: "Contourner l'Afrique",
                description: "Comme Vasco de Gama, trouve une route maritime vers les Indes.",
                result: "Tu as réussi à atteindre les Indes par la mer ! Les épices rapportées feront la richesse de ton pays."
            },
            {
                id: 3,
                title: "Explorer l'Amérique du Sud",
                description: "Comme Amerigo Vespucci, pars à la découverte des nouvelles terres.",
                result: "Tu as cartographié de nouvelles régions et rencontré des peuples inconnus en Europe. Ton nom restera dans l'Histoire !"
            },
            {
                id: 4,
                title: "Trouver le passage du Nord-Ouest",
                description: "Tente de trouver une route vers l'Asie par le nord du continent américain.",
                result: "Le passage est bloqué par les glaces... Mais tu as découvert de nouvelles terres et des peuples inuits."
            }
        ]
    }
};

// Données pour les débats (Cycle 3)
const debates = {
    "debats-histoire": {
        title: "Débats historiques",
        description: "Réfléchis et argumenter sur des questions historiques.",
        topics: [
            {
                id: 1,
                question: "La Terreur était-elle nécessaire pendant la Révolution française ?",
                side1: {
                    title: "Oui",
                    arguments: [
                        "La Terreur a permis de défendre la Révolution contre ses ennemis (royalistes, étrangers).",
                        "Elle a éliminé les contre-révolutionnaires qui voulaient rétablir l'Ancien Régime.",
                        "Dans un contexte de guerre (guerre civile et extérieure), des mesures exceptionnelles étaient nécessaires."
                    ]
                },
                side2: {
                    title: "Non",
                    arguments: [
                        "La Terreur a violé les principes mêmes de la Révolution (liberté, égalité, droits de l'homme).",
                        "Des milliers de personnes innocentes ont été exécutées sans procès équitable.",
                        "Elle a instauré un climat de peur et de délation, contraire aux valeurs démocratiques."
                    ]
                }
            },
            {
                id: 2,
                question: "Napoléon était-il un héros ou un tyran ?",
                side1: {
                    title: "Un héros",
                    arguments: [
                        "Il a rétabli l'ordre après la Révolution et évité une guerre civile.",
                        "Il a modernisé la France (Code civil, banques, écoles, routes).",
                        "Il a défendu la France contre les monarchies européennes qui voulaient restaurer l'Ancien Régime."
                    ]
                },
                side2: {
                    title: "Un tyran",
                    arguments: [
                        "Il a instauré une dictature et supprimé les libertés (presse, opposition).",
                        "Il a rétablit l'esclavage en 1802, trahissant les idéaux révolutionnaires.",
                        "Ses guerres ont causé la mort de millions de personnes en Europe."
                    ]
                }
            },
            {
                id: 3,
                question: "La colonisation était-elle bénéfique pour les pays colonisés ?",
                side1: {
                    title: "Oui",
                    arguments: [
                        "Elle a apporté des infrastructures (routes, hôpitaux, écoles) dans les colonies.",
                        "Elle a permis une modernisation économique et technologique.",
                        "Certains pays ont pu se développer grâce aux investissements coloniaux."
                    ]
                },
                side2: {
                    title: "Non",
                    arguments: [
                        "Elle a exploité les ressources et les populations locales au profit des métropoles.",
                        "Elle a imposé une domination culturelle et politique, niant les identités locales.",
                        "Elle a créé des inégalités durables et des conflits post-coloniaux."
                    ]
                }
            }
        ]
    }
};

// Données pour l'analyse de documents (Cycle 3)
const documentAnalyses = {
    "analyse-document": {
        title: "Analyse de documents historiques",
        description: "Étudie des textes historiques et réponds aux questions.",
        documents: [
            {
                id: 1,
                title: "Extrait de la Déclaration des Droits de l'Homme et du Citoyen (1789)",
                text: `"Les représentants du peuple français, constitués en Assemblée nationale, considérant que l'ignorance, l'oubli ou le mépris des droits de l'homme sont les seules causes des malheurs publics et de la corruption des gouvernements, ont résolu d'exposer, dans une déclaration solennelle, les droits naturels, inaliénables et sacrés de l'homme, afin que cette déclaration, constamment présente à tous les membres du corps social, leur rappelle sans cesse leurs droits et leurs devoirs..."`,
                questions: [
                    "Quel est l'objectif principal de ce texte ?",
                    "Qui a écrit ce texte et dans quel contexte ?",
                    "Quels sont les 'droits naturels' mentionnés dans la Déclaration ?",
                    "Pourquoi ce texte est-il considéré comme universel ?"
                ]
            },
            {
                id: 2,
                title: "Discours de Robespierre sur la Terreur (1794)",
                text: `"La Terreur n'est autre chose que la justice prompte, sévère, inflexible ; elle est donc une émanation de la vertu ; elle est moins un principe particulier qu'une conséquence du principe général de la démocratie appliqué à nos besoins les plus pressants... Le gouvernement de la Révolution est le despotisme de la liberté contre la tyrannie."`,
                questions: [
                    "Comment Robespierre justifie-t-il la Terreur ?",
                    "Quel lien fait-il entre la Terreur et la vertu ?",
                    "Pourquoi ce discours est-il controversé ?",
                    "Quels sont les 'besoins pressants' évoqués par Robespierre ?"
                ]
            },
            {
                id: 3,
                title: "Appel du 18 Juin 1940 - Général de Gaulle",
                text: `"Les chefs qui, depuis de nombreuses années, sont à la tête des armées françaises, ont formé un gouvernement. Ce gouvernement, allégant la défaite de nos armées, s'est mis en rapport avec l'ennemi pour cesser le combat. Certes, nous avons été, nous sommes, submergés par la force mécanique, terrestre et aérienne, de l'ennemi... Mais le dernier mot est-il dit ? L'espérance doit-elle disparaître ? La défaite est-elle définitive ? Non !"`,
                questions: [
                    "Dans quel contexte historique ce discours a-t-il été prononcé ?",
                    "Quel message principal de Gaulle veut-il faire passer ?",
                    "Pourquoi ce discours est-il considéré comme un acte de résistance ?",
                    "Quelles valeurs ce texte met-il en avant ?"
                ]
            }
        ]
    }
};

// Données pour les coloriages (Cycle 1)
const coloringPages = {
    "coloriage-prehistoire": {
        title: "Coloriage : La Préhistoire",
        description: "Colorie les animaux et les scènes de la Préhistoire !",
        images: [
            { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mammoth_by_Ghedo.jpg/800px-Mammoth_by_Ghedo.jpg", name: "Mammouth" },
            { id: 2, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cave_painting_of_a_bison.jpg/800px-Cave_painting_of_a_bison.jpg", name: "Bison des cavernes" },
            { id: 3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Neanderthal_man_forehead.jpg/800px-Neanderthal_man_forehead.jpg", name: "Homme de Néandertal" }
        ]
    },
    
    "coloriage-moyen-age": {
        title: "Coloriage : Le Moyen Âge",
        description: "Colorie les châteaux, les chevaliers et les blasons !",
        images: [
            { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Chateau_de_Pierrefonds.jpg/800px-Chateau_de_Pierrefonds.jpg", name: "Château fort" },
            { id: 2, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chevalier_médiéval.jpg/800px-Chevalier_médiéval.jpg", name: "Chevalier" },
            { id: 3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Blason_France.svg/800px-Blason_France.svg.png", name: "Blason de France" }
        ]
    }
};

// Exporter les données pour les utiliser dans main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quizzes,
        memoryGames,
        timelines,
        interactiveMaps,
        rolePlayingGames,
        debates,
        documentAnalyses,
        coloringPages
    };
}
