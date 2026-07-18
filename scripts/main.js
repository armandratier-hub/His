// ============================================
// Histoire de France - Script principal
// ============================================

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le thème
    initTheme();
    
    // Initialiser la navigation mobile
    initNavigation();
    
    // Initialiser les modales pour les activités
    initModals();
    
    // Initialiser les activités (quiz, memory, timeline, etc.)
    initActivities();
    
    // Ajouter des effets de scroll
    initScrollEffects();
});

// ============================================
// Thème (mode sombre/clair)
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Vérifier le thème préféré dans le localStorage ou le système
    const currentTheme = localStorage.getItem('theme') || 
                         (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Appliquer le thème
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Mettre à jour l'icône du bouton
    updateThemeIcon(currentTheme);
    
    // Écouter le clic sur le bouton de thème
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    // Écouter les changements de préférence système
    prefersDarkScheme.addEventListener('change', e => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// ============================================
// Navigation mobile
// ============================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Fermer le menu si on clique sur un lien
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Mettre en surbrillance le lien actif dans la navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// Modales pour les activités
// ============================================
let currentActivity = null;

function initModals() {
    const modal = document.getElementById('activityModal');
    const closeModal = document.getElementById('closeModal');
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Fermer la modale en cliquant à l'extérieur
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Fonction pour ouvrir une activité dans une modale
function openActivity(activityId) {
    const modal = document.getElementById('activityModal');
    const activityContent = document.getElementById('activityContent');
    
    // Réinitialiser le contenu
    activityContent.innerHTML = '';
    
    // Déterminer le type d'activité et afficher le contenu correspondant
    if (activityId.startsWith('memory-')) {
        activityContent.appendChild(createMemoryGame(activityId));
    } else if (activityId.startsWith('quiz-')) {
        activityContent.appendChild(createQuiz(activityId));
    } else if (activityId.startsWith('timeline-')) {
        activityContent.appendChild(createTimelineActivity(activityId));
    } else if (activityId.startsWith('carte-')) {
        activityContent.appendChild(createInteractiveMap(activityId));
    } else if (activityId.startsWith('debats-')) {
        activityContent.appendChild(createDebate(activityId));
    } else if (activityId.startsWith('analyse-')) {
        activityContent.appendChild(createDocumentAnalysis(activityId));
    } else if (activityId.startsWith('jeu-')) {
        activityContent.appendChild(createRolePlayingGame(activityId));
    } else if (activityId.startsWith('coloriage-')) {
        activityContent.appendChild(createColoringPage(activityId));
    } else {
        activityContent.innerHTML = `<p>Activité non trouvée.</p>`;
    }
    
    // Afficher la modale
    modal.classList.add('active');
    
    // Stocker l'activité actuelle
    currentActivity = activityId;
}

// ============================================
// Activités : Memory
// ============================================
function createMemoryGame(gameId) {
    const gameData = memoryGames[gameId];
    if (!gameData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = gameData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = gameData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Grille de cartes
    const gameGrid = document.createElement('div');
    gameGrid.className = 'memory-game';
    
    // Mélanger les cartes
    const shuffledCards = [...gameData.cards].sort(() => Math.random() - 0.5);
    
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let pairsFound = 0;
    
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.name = card.name;
        
        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.name;
        img.style.display = 'none';
        
        cardElement.appendChild(img);
        gameGrid.appendChild(cardElement);
        
        // Ajouter l'événement de clic
        cardElement.addEventListener('click', flipCard);
    });
    
    container.appendChild(gameGrid);
    
    // Logique du jeu Memory
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        
        this.classList.add('flipped');
        this.querySelector('img').style.display = 'block';
        
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        
        secondCard = this;
        checkForMatch();
    }
    
    function checkForMatch() {
        const isMatch = firstCard.dataset.name === secondCard.dataset.name;
        
        if (isMatch) {
            disableCards();
            pairsFound++;
            if (pairsFound === gameData.cards.length / 2) {
                setTimeout(() => {
                    alert(`Félicitations ! Tu as trouvé toutes les paires en ${moves} coups !`);
                    resetGame();
                }, 500);
            }
        } else {
            unflipCards();
        }
    }
    
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }
    
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.querySelector('img').style.display = 'none';
            secondCard.querySelector('img').style.display = 'none';
            resetBoard();
        }, 1000);
    }
    
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    
    let moves = 0;
    
    // Compter les coups
    function incrementMoves() {
        moves++;
    }
    
    // Réinitialiser le jeu
    function resetGame() {
        moves = 0;
        pairsFound = 0;
        const cards = gameGrid.querySelectorAll('.memory-card');
        cards.forEach(card => {
            card.classList.remove('flipped');
            card.querySelector('img').style.display = 'none';
            card.addEventListener('click', flipCard);
        });
        
        // Mélanger à nouveau
        const newShuffledCards = [...gameData.cards].sort(() => Math.random() - 0.5);
        cards.forEach((card, index) => {
            card.dataset.name = newShuffledCards[index].name;
            card.querySelector('img').src = newShuffledCards[index].image;
        });
    }
    
    // Bouton pour rejouer
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Rejouer';
    replayButton.className = 'btn btn-primary';
    replayButton.style.marginTop = '1rem';
    replayButton.addEventListener('click', resetGame);
    container.appendChild(replayButton);
    
    return container;
}

// ============================================
// Activités : Quiz
// ============================================
function createQuiz(quizId) {
    const quizData = quizzes[quizId];
    if (!quizData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container quiz-container';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = quizData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = quizData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Variables pour le quiz
    let currentQuestion = 0;
    let score = 0;
    const questions = quizData.questions;
    
    // Fonction pour afficher une question
    function showQuestion() {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'quiz-question-container';
        
        const questionText = document.createElement('h3');
        questionText.textContent = questions[currentQuestion].question;
        questionText.className = 'quiz-question';
        questionContainer.appendChild(questionText);
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'quiz-options';
        
        questions[currentQuestion].options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.textContent = option;
            optionElement.className = 'quiz-option';
            optionElement.dataset.index = index;
            optionElement.addEventListener('click', () => selectOption(optionElement, index));
            optionsContainer.appendChild(optionElement);
        });
        
        questionContainer.appendChild(optionsContainer);
        container.appendChild(questionContainer);
        
        // Bouton Suivant (masqué au début)
        const nextButton = document.createElement('button');
        nextButton.textContent = currentQuestion < questions.length - 1 ? 'Suivant' : 'Terminer';
        nextButton.className = 'btn btn-primary';
        nextButton.style.marginTop = '1rem';
        nextButton.style.display = 'none';
        nextButton.id = 'nextButton';
        nextButton.addEventListener('click', nextQuestion);
        container.appendChild(nextButton);
    }
    
    // Fonction pour sélectionner une option
    function selectOption(optionElement, index) {
        const options = container.querySelectorAll('.quiz-option');
        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            opt.style.pointerEvents = 'none';
        });
        
        optionElement.classList.add('selected');
        
        const isCorrect = index === questions[currentQuestion].correct;
        if (isCorrect) {
            score++;
            optionElement.classList.add('correct');
        } else {
            optionElement.classList.add('incorrect');
            // Montrer la bonne réponse
            const correctOption = container.querySelector(`.quiz-option[data-index="${questions[currentQuestion].correct}"]`);
            if (correctOption) {
                correctOption.classList.add('correct');
            }
        }
        
        // Afficher le feedback
        const feedback = document.createElement('div');
        feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.textContent = isCorrect ? 'Bravo !' : `Non, la bonne réponse était : ${questions[currentQuestion].options[questions[currentQuestion].correct]}`;
        container.appendChild(feedback);
        
        // Afficher le bouton Suivant
        const nextButton = document.getElementById('nextButton');
        if (nextButton) {
            nextButton.style.display = 'block';
        }
    }
    
    // Fonction pour passer à la question suivante
    function nextQuestion() {
        // Supprimer la question actuelle
        const questionContainer = container.querySelector('.quiz-question-container');
        const feedback = container.querySelector('.quiz-feedback');
        const nextButton = document.getElementById('nextButton');
        
        if (questionContainer) {
            container.removeChild(questionContainer);
        }
        if (feedback) {
            container.removeChild(feedback);
        }
        if (nextButton) {
            container.removeChild(nextButton);
        }
        
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            // Afficher le score final
            const scoreContainer = document.createElement('div');
            scoreContainer.className = 'quiz-score';
            scoreContainer.innerHTML = `
                <h3>Félicitations !</h3>
                <p>Tu as obtenu <strong>${score}/${questions.length}</strong> bonnes réponses.</p>
                <p>${getScoreMessage(score, questions.length)}</p>
            `;
            container.appendChild(scoreContainer);
            
            // Bouton pour rejouer
            const replayButton = document.createElement('button');
            replayButton.textContent = 'Rejouer';
            replayButton.className = 'btn btn-primary';
            replayButton.style.marginTop = '1rem';
            replayButton.addEventListener('click', () => {
                currentQuestion = 0;
                score = 0;
                container.innerHTML = '';
                container.appendChild(title.cloneNode(true));
                container.appendChild(description.cloneNode(true));
                showQuestion();
            });
            container.appendChild(replayButton);
        }
    }
    
    // Fonction pour obtenir un message en fonction du score
    function getScoreMessage(score, total) {
        const percentage = (score / total) * 100;
        if (percentage === 100) {
            return "Parfait ! Tu es un vrai expert ! 🎉";
        } else if (percentage >= 80) {
            return "Excellent travail ! 👍";
        } else if (percentage >= 60) {
            return "Bien joué ! Tu peux faire encore mieux.";
        } else if (percentage >= 40) {
            return "Pas mal, mais révise un peu ! 📚";
        } else {
            return "Ne te décourage pas, essaie encore ! 💪";
        }
    }
    
    // Démarrer le quiz
    showQuestion();
    
    return container;
}

// ============================================
// Activités : Timeline
// ============================================
function createTimelineActivity(timelineId) {
    const timelineData = timelines[timelineId];
    if (!timelineData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = timelineData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = timelineData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Conteneur pour la timeline
    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';
    
    // Mélanger les événements
    const shuffledEvents = [...timelineData.events].sort(() => Math.random() - 0.5);
    
    // Créer les éléments de la timeline
    shuffledEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        eventElement.dataset.id = event.id;
        eventElement.dataset.date = event.date;
        eventElement.draggable = true;
        
        eventElement.innerHTML = `
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-title">${event.title}</div>
            <div class="timeline-description">${event.description}</div>
        `;
        
        timelineContainer.appendChild(eventElement);
    });
    
    container.appendChild(timelineContainer);
    
    // Conteneur pour la zone de dépôt
    const dropZone = document.createElement('div');
    dropZone.className = 'timeline-drop-zone';
    dropZone.innerHTML = '<p>Glisse-dépose les événements ici pour les trier par date.</p>';
    container.appendChild(dropZone);
    
    // Logique de glisser-déposer
    let draggedItem = null;
    
    // Ajouter les événements de glisser-déposer
    const timelineItems = timelineContainer.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            e.dataTransfer.setData('text/plain', item.dataset.id);
            setTimeout(() => {
                item.style.opacity = '0.4';
            }, 0);
        });
        
        item.addEventListener('dragend', () => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, 0);
        });
    });
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('active');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('active');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('active');
        
        const itemId = e.dataTransfer.getData('text/plain');
        const item = document.querySelector(`.timeline-item[data-id="${itemId}"]`);
        if (item) {
            dropZone.appendChild(item);
            item.draggable = false;
        }
        
        // Vérifier si tous les événements sont placés
        if (dropZone.children.length === timelineItems.length) {
            checkTimelineOrder();
        }
    });
    
    // Fonction pour vérifier l'ordre de la timeline
    function checkTimelineOrder() {
        const droppedItems = Array.from(dropZone.children);
        const originalEvents = [...timelineData.events].sort((a, b) => parseInt(a.date) - parseInt(b.date));
        
        let allCorrect = true;
        droppedItems.forEach((item, index) => {
            const eventId = parseInt(item.dataset.id);
            const originalEvent = originalEvents.find(e => e.id === eventId);
            if (!originalEvent || originalEvent.id !== originalEvents[index].id) {
                allCorrect = false;
            }
        });
        
        if (allCorrect) {
            setTimeout(() => {
                alert('Félicitations ! Tu as placé tous les événements dans le bon ordre ! 🎉');
            }, 500);
        } else {
            setTimeout(() => {
                alert('Presque ! Vérifie l\'ordre des événements.');
            }, 500);
        }
    }
    
    // Bouton pour réinitialiser
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Réinitialiser';
    resetButton.className = 'btn btn-secondary';
    resetButton.style.marginTop = '1rem';
    resetButton.addEventListener('click', () => {
        // Réattacher les items à la timeline
        const items = Array.from(dropZone.children);
        items.forEach(item => {
            timelineContainer.appendChild(item);
            item.draggable = true;
        });
        dropZone.innerHTML = '<p>Glisse-dépose les événements ici pour les trier par date.</p>';
    });
    container.appendChild(resetButton);
    
    return container;
}

// ============================================
// Activités : Carte interactive
// ============================================
function createInteractiveMap(mapId) {
    const mapData = interactiveMaps[mapId];
    if (!mapData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = mapData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = mapData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Conteneur pour la carte
    const mapContainer = document.createElement('div');
    mapContainer.className = 'interactive-map';
    mapContainer.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/France_location_map-Regions_and_departements-2016.svg/1200px-France_location_map-Regions_and_departements-2016.svg.png')`;
    mapContainer.style.backgroundSize = 'cover';
    mapContainer.style.backgroundPosition = 'center';
    
    // Ajouter les régions cliquables
    mapData.regions.forEach(region => {
        const regionElement = document.createElement('div');
        regionElement.className = 'map-region';
        regionElement.style.left = `${region.x}%`;
        regionElement.style.top = `${region.y}%`;
        regionElement.style.width = '20px';
        regionElement.style.height = '20px';
        regionElement.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        regionElement.style.borderRadius = '50%';
        regionElement.style.transform = 'translate(-50%, -50%)';
        regionElement.style.cursor = 'pointer';
        regionElement.title = region.name;
        
        regionElement.addEventListener('click', () => {
            showRegionInfo(region);
        });
        
        mapContainer.appendChild(regionElement);
    });
    
    container.appendChild(mapContainer);
    
    // Conteneur pour les infos de la région
    const infoContainer = document.createElement('div');
    infoContainer.className = 'map-info-container';
    infoContainer.style.marginTop = '1rem';
    container.appendChild(infoContainer);
    
    // Fonction pour afficher les infos d'une région
    function showRegionInfo(region) {
        infoContainer.innerHTML = `
            <div class="map-info">
                <h3>${region.name}</h3>
                <p>${region.description}</p>
            </div>
        `;
    }
    
    return container;
}

// ============================================
// Activités : Débats (Cycle 3)
// ============================================
function createDebate(debateId) {
    const debateData = debates[debateId];
    if (!debateData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container debate-container';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = debateData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = debateData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Sélecteur de sujet
    const topicSelect = document.createElement('select');
    topicSelect.className = 'debate-topic-select';
    topicSelect.style.marginBottom = '1.5rem';
    topicSelect.style.padding = '0.5rem';
    topicSelect.style.borderRadius = '5px';
    topicSelect.style.border = '1px solid #ccc';
    
    debateData.topics.forEach((topic, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = topic.question;
        topicSelect.appendChild(option);
    });
    
    container.appendChild(topicSelect);
    
    // Conteneur pour le débat
    const debateContent = document.createElement('div');
    debateContent.className = 'debate-content';
    container.appendChild(debateContent);
    
    // Afficher le premier débat par défaut
    showDebate(0);
    
    // Écouter les changements de sélection
    topicSelect.addEventListener('change', () => {
        showDebate(parseInt(topicSelect.value));
    });
    
    // Fonction pour afficher un débat
    function showDebate(topicIndex) {
        const topic = debateData.topics[topicIndex];
        debateContent.innerHTML = `
            <h3 class="debate-topic">${topic.question}</h3>
            <div class="debate-arguments">
                <div class="debate-side">
                    <h4>${topic.side1.title}</h4>
                    <ul>
                        ${topic.side1.arguments.map(arg => `<li>${arg}</li>`).join('')}
                    </ul>
                </div>
                <div class="debate-side">
                    <h4>${topic.side2.title}</h4>
                    <ul>
                        ${topic.side2.arguments.map(arg => `<li>${arg}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <p style="margin-top: 1.5rem; text-align: center; color: var(--text-light);">
                <strong>À toi de réfléchir :</strong> Quel côté te semble le plus convaincant ? Pourquoi ?
            </p>
        `;
    }
    
    return container;
}

// ============================================
// Activités : Analyse de documents (Cycle 3)
// ============================================
function createDocumentAnalysis(activityId) {
    const analysisData = documentAnalyses[activityId];
    if (!analysisData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container document-analysis';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = analysisData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = analysisData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Sélecteur de document
    const documentSelect = document.createElement('select');
    documentSelect.className = 'document-select';
    documentSelect.style.marginBottom = '1.5rem';
    documentSelect.style.padding = '0.5rem';
    documentSelect.style.borderRadius = '5px';
    documentSelect.style.border = '1px solid #ccc';
    
    analysisData.documents.forEach((doc, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = doc.title;
        documentSelect.appendChild(option);
    });
    
    container.appendChild(documentSelect);
    
    // Conteneur pour le document
    const documentContent = document.createElement('div');
    documentContent.className = 'document-content';
    container.appendChild(documentContent);
    
    // Afficher le premier document par défaut
    showDocument(0);
    
    // Écouter les changements de sélection
    documentSelect.addEventListener('change', () => {
        showDocument(parseInt(documentSelect.value));
    });
    
    // Fonction pour afficher un document
    function showDocument(docIndex) {
        const doc = analysisData.documents[docIndex];
        documentContent.innerHTML = `
            <h3 class="document-title">${doc.title}</h3>
            <div class="document-text">${doc.text}</div>
            <div class="document-questions">
                <h4>Questions pour l'analyse :</h4>
                <ul>
                    ${doc.questions.map(q => `<li>${q}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    return container;
}

// ============================================
// Activités : Jeu de rôle (Cycle 2)
// ============================================
function createRolePlayingGame(gameId) {
    const gameData = rolePlayingGames[gameId];
    if (!gameData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = gameData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = gameData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Scénario
    const scenario = document.createElement('div');
    scenario.className = 'rpg-scenario';
    scenario.textContent = gameData.scenario;
    container.appendChild(scenario);
    
    // Options
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'rpg-options';
    
    gameData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'rpg-option';
        optionElement.innerHTML = `
            <h4>${option.title}</h4>
            <p>${option.description}</p>
        `;
        optionElement.addEventListener('click', () => {
            selectOption(optionElement, option);
        });
        optionsContainer.appendChild(optionElement);
    });
    
    container.appendChild(optionsContainer);
    
    // Conteneur pour le résultat
    const resultContainer = document.createElement('div');
    resultContainer.className = 'rpg-result';
    resultContainer.style.marginTop = '1.5rem';
    resultContainer.style.padding = '1rem';
    resultContainer.style.borderRadius = '5px';
    resultContainer.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
    resultContainer.style.display = 'none';
    container.appendChild(resultContainer);
    
    // Fonction pour sélectionner une option
    function selectOption(optionElement, option) {
        // Désactiver toutes les options
        const options = container.querySelectorAll('.rpg-option');
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.style.opacity = '0.6';
        });
        
        // Afficher le résultat
        resultContainer.textContent = option.result;
        resultContainer.style.display = 'block';
        
        // Bouton pour rejouer
        const replayButton = document.createElement('button');
        replayButton.textContent = 'Rejouer';
        replayButton.className = 'btn btn-primary';
        replayButton.style.marginTop = '1rem';
        replayButton.addEventListener('click', () => {
            options.forEach(opt => {
                opt.style.pointerEvents = '';
                opt.style.opacity = '';
            });
            resultContainer.style.display = 'none';
            container.removeChild(replayButton);
        });
        container.appendChild(replayButton);
    }
    
    return container;
}

// ============================================
// Activités : Coloriage (Cycle 1)
// ============================================
function createColoringPage(pageId) {
    const pageData = coloringPages[pageId];
    if (!pageData) {
        return document.createElement('div');
    }
    
    const container = document.createElement('div');
    container.className = 'activity-container coloring-page';
    
    // Titre et description
    const title = document.createElement('h2');
    title.textContent = pageData.title;
    title.className = 'activity-title';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = pageData.description;
    description.className = 'activity-description';
    container.appendChild(description);
    
    // Sélecteur d'image
    const imageSelect = document.createElement('select');
    imageSelect.className = 'coloring-image-select';
    imageSelect.style.marginBottom = '1.5rem';
    imageSelect.style.padding = '0.5rem';
    imageSelect.style.borderRadius = '5px';
    imageSelect.style.border = '1px solid #ccc';
    
    pageData.images.forEach((image, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = image.name;
        imageSelect.appendChild(option);
    });
    
    container.appendChild(imageSelect);
    
    // Conteneur pour l'image
    const imageContainer = document.createElement('div');
    imageContainer.className = 'coloring-image-container';
    imageContainer.style.textAlign = 'center';
    container.appendChild(imageContainer);
    
    // Conteneur pour les outils
    const toolsContainer = document.createElement('div');
    toolsContainer.className = 'coloring-tools';
    container.appendChild(toolsContainer);
    
    // Afficher la première image par défaut
    showImage(0);
    
    // Écouter les changements de sélection
    imageSelect.addEventListener('change', () => {
        showImage(parseInt(imageSelect.value));
    });
    
    // Fonction pour afficher une image
    function showImage(imageIndex) {
        const image = pageData.images[imageIndex];
        imageContainer.innerHTML = `
            <img src="${image.url}" alt="${image.name}" class="coloring-image" id="coloringImage">
        `;
        
        // Initialiser les outils de coloriage
        initColoringTools(image.url);
    }
    
    // Fonction pour initialiser les outils de coloriage
    function initColoringTools(imageUrl) {
        toolsContainer.innerHTML = '';
        
        // Couleurs prédéfinies
        const colors = [
            '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
            '#00FFFF', '#FFA500', '#800080', '#008000', '#800000',
            '#000000', '#FFFFFF', '#C0C0C0', '#808080', '#FFC0CB'
        ];
        
        colors.forEach(color => {
            const colorPicker = document.createElement('div');
            colorPicker.className = 'color-picker';
            colorPicker.style.backgroundColor = color;
            colorPicker.addEventListener('click', () => {
                // Retirer la classe active de tous les pickers
                document.querySelectorAll('.color-picker').forEach(picker => {
                    picker.classList.remove('active');
                });
                // Ajouter la classe active au picker cliqué
                colorPicker.classList.add('active');
            });
            toolsContainer.appendChild(colorPicker);
        });
        
        // Bouton pour télécharger l'image
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Télécharger';
        downloadButton.className = 'btn btn-primary';
        downloadButton.style.marginTop = '1rem';
        downloadButton.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = `${pageData.images[imageSelect.value].name}.jpg`;
            link.click();
        });
        container.appendChild(downloadButton);
    }
    
    return container;
}

// ============================================
// Effets de scroll
// ============================================
function initScrollEffects() {
    // Animations au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observer les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Observer les cartes
    const cards = document.querySelectorAll('.period-card, .activity-card, .ressource-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// ============================================
// Fonctions utilitaires
// ============================================

// Fonction pour charger dynamiquement des pages
function loadPage(pageUrl) {
    window.location.href = pageUrl;
}

// Exporter les fonctions pour les utiliser dans d'autres scripts
if (typeof window !== 'undefined') {
    window.openActivity = openActivity;
    window.loadPage = loadPage;
}
