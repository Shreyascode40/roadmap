// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// JEE Preparation Phases
const jeePhases = [
    {
        phase: "Phase 1: Foundation (6 months)",
        duration: "Months 1-6",
        focus: "NCERT completion, basic concepts, theory building",
        activities: ["Complete NCERT textbooks", "Understand fundamental concepts", "Solve NCERT exemplar problems", "Take chapter-wise tests"]
    },
    {
        phase: "Phase 2: Advanced Learning (6 months)",
        duration: "Months 7-12",
        focus: "Reference books, advanced problems, conceptual depth",
        activities: ["Start reference books", "Solve previous year questions", "Practice advanced problems", "Identify weak areas"]
    },
    {
        phase: "Phase 3: Revision & Practice (4 months)",
        duration: "Months 13-16",
        focus: "Multiple revisions, mock tests, speed improvement",
        activities: ["Daily mock tests", "Complete syllabus revision", "Formula sheet preparation", "Time management practice"]
    },
    {
        phase: "Phase 4: Final Preparation (2 months)",
        duration: "Last 2 months",
        focus: "Mock tests, exam strategy, stress management",
        activities: ["Full-length mock tests (daily)", "Analyze mistakes thoroughly", "Quick revision notes", "Stay calm and confident"]
    }
];

const jeeSubjects = [
    {
        name: "Physics",
        icon: "fa-atom",
        weightage: "33%",
        chapters: 30,
        topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
        strategy: "Focus on numerical problem-solving and conceptual clarity"
    },
    {
        name: "Chemistry",
        icon: "fa-flask",
        weightage: "33%",
        chapters: 28,
        topics: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry"],
        strategy: "Balance memorization (Inorganic) with problem-solving (Physical & Organic)"
    },
    {
        name: "Mathematics",
        icon: "fa-calculator",
        weightage: "34%",
        chapters: 26,
        topics: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry", "Vectors"],
        strategy: "Practice, practice, practice! Master formulas and shortcuts"
    }
];

// NEET Subject Data
const neetSubjects = [
    {
        name: "Physics",
        icon: "fa-atom",
        questions: 45,
        marks: 180,
        weightage: "25%",
        difficulty: "Moderate to Hard",
        strategy: "Focus on NCERT concepts and numerical problem solving",
        keyTopics: ["Mechanics", "Electricity & Magnetism", "Optics", "Modern Physics"]
    },
    {
        name: "Chemistry",
        icon: "fa-flask",
        questions: 45,
        marks: 180,
        weightage: "25%",
        difficulty: "Moderate",
        strategy: "NCERT is crucial. Balance all three branches equally",
        keyTopics: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry"]
    },
    {
        name: "Biology",
        icon: "fa-dna",
        questions: 90,
        marks: 360,
        weightage: "50%",
        difficulty: "Moderate",
        strategy: "Master NCERT line by line. Biology can make or break your rank",
        keyTopics: ["Human Physiology", "Genetics", "Ecology", "Plant Physiology"]
    }
];

// Botany Topics
const botanyTopics = [
    { unit: "Plant Diversity", chapters: ["Plant Kingdom", "Biological Classification"] },
    { unit: "Plant Anatomy", chapters: ["Morphology", "Anatomy", "Structural Organization"] },
    { unit: "Plant Physiology", chapters: ["Photosynthesis", "Respiration", "Plant Growth", "Mineral Nutrition"] },
    { unit: "Reproduction", chapters: ["Sexual Reproduction in Plants", "Reproduction in Organisms"] },
    { unit: "Genetics & Evolution", chapters: ["Principles of Inheritance", "Molecular Basis of Inheritance"] }
];

// Zoology Topics
const zoologyTopics = [
    { unit: "Animal Diversity", chapters: ["Animal Kingdom", "Structural Organization"] },
    { unit: "Human Physiology", chapters: ["Digestion", "Breathing", "Circulation", "Excretion", "Locomotion"] },
    { unit: "Reproduction", chapters: ["Human Reproduction", "Reproductive Health"] },
    { unit: "Genetics", chapters: ["Heredity", "Evolution", "DNA & RNA"] },
    { unit: "Ecology", chapters: ["Organisms & Populations", "Ecosystem", "Biodiversity", "Environmental Issues"] }
];

// Mock Test Schedule
const mockPhases = [
    {
        phase: "Initial Phase (6 months before)",
        frequency: "1-2 tests per week",
        focus: "Subject-wise tests to identify weak areas"
    },
    {
        phase: "Mid Phase (3-4 months before)",
        frequency: "2-3 full tests per week",
        focus: "Full syllabus tests with time management"
    },
    {
        phase: "Final Phase (Last 2 months)",
        frequency: "1 full test daily",
        focus: "Simulate actual exam conditions, analyze thoroughly"
    }
];

// Important Dates
const jeeDates = [
    { event: "JEE Main Registration (Session 1)", date: "November 2024" },
    { event: "JEE Main Exam (Session 1)", date: "January 2025" },
    { event: "JEE Main Registration (Session 2)", date: "February 2025" },
    { event: "JEE Main Exam (Session 2)", date: "April 2025" },
    { event: "JEE Advanced Registration", date: "May 2025" },
    { event: "JEE Advanced Exam", date: "May 2025" },
    { event: "JEE Advanced Results", date: "June 2025" }
];

const neetDates = [
    { event: "NEET Application Form", date: "February 2025" },
    { event: "Last Date to Apply", date: "March 2025" },
    { event: "Admit Card Release", date: "April 2025" },
    { event: "NEET Exam Date", date: "May 5, 2025" },
    { event: "Answer Key Release", date: "May 2025" },
    { event: "Result Declaration", date: "June 2025" },
    { event: "Counselling Starts", date: "June 2025" }
];

// Success Stories
const successStories = [
    {
        name: "Raj Kumar",
        exam: "JEE Advanced",
        rank: "AIR 243",
        college: "IIT Bombay",
        quote: "Consistency and daily practice made all the difference. Never skip revision!",
        image: "👨‍🎓"
    },
    {
        name: "Priya Sharma",
        exam: "NEET",
        rank: "AIR 156",
        college: "AIIMS Delhi",
        quote: "NCERT is your best friend. I read it 5 times cover to cover for Biology.",
        image: "👩‍⚕️"
    },
    {
        name: "Arjun Patel",
        exam: "JEE Main",
        rank: "99.8 Percentile",
        college: "NIT Trichy",
        quote: "Mock tests helped me manage time perfectly. Take them seriously!",
        image: "👨‍💻"
    }
];

// Populate JEE Phases
function populateJeePhases() {
    const phasesContainer = document.getElementById('jeePhases');
    if (!phasesContainer) return;

    phasesContainer.innerHTML = jeePhases.map((phase, index) => `
        <div class="phase-card">
            <div class="phase-number">${index + 1}</div>
            <div class="phase-content">
                <h4>${phase.phase}</h4>
                <p class="phase-duration"><i class="fas fa-clock"></i> ${phase.duration}</p>
                <p class="phase-focus"><strong>Focus:</strong> ${phase.focus}</p>
                <ul class="phase-activities">
                    ${phase.activities.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Populate JEE Subjects
function populateJeeSubjects() {
    const subjectsContainer = document.getElementById('jeeSubjects');
    if (!subjectsContainer) return;

    subjectsContainer.innerHTML = jeeSubjects.map(subject => `
        <div class="subject-card">
            <div class="subject-header">
                <i class="fas ${subject.icon}"></i>
                <h4>${subject.name}</h4>
            </div>
            <div class="subject-info">
                <div class="info-item">
                    <span class="label">Weightage:</span>
                    <span class="value">${subject.weightage}</span>
                </div>
                <div class="info-item">
                    <span class="label">Chapters:</span>
                    <span class="value">${subject.chapters}</span>
                </div>
            </div>
            <div class="subject-topics">
                <h5>Key Topics:</h5>
                <div class="topics-list">
                    ${subject.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                </div>
            </div>
            <div class="subject-strategy">
                <i class="fas fa-lightbulb"></i>
                <p>${subject.strategy}</p>
            </div>
        </div>
    `).join('');
}

// Populate NEET Subjects
function populateNeetSubjects() {
    const neetContainer = document.getElementById('neetSubjects');
    if (!neetContainer) return;

    neetContainer.innerHTML = `
        <div class="neet-subjects-grid">
            ${neetSubjects.map(subject => `
                <div class="neet-subject-card ${subject.name.toLowerCase()}">
                    <div class="subject-icon">
                        <i class="fas ${subject.icon}"></i>
                    </div>
                    <h4>${subject.name}</h4>
                    <div class="subject-stats">
                        <div class="stat">
                            <div class="stat-number">${subject.questions}</div>
                            <div class="stat-label">Questions</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">${subject.marks}</div>
                            <div class="stat-label">Marks</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">${subject.weightage}</div>
                            <div class="stat-label">Weightage</div>
                        </div>
                    </div>
                    <div class="difficulty">
                        <span class="label">Difficulty:</span>
                        <span class="value">${subject.difficulty}</span>
                    </div>
                    <div class="strategy-box">
                        <i class="fas fa-star"></i>
                        <p>${subject.strategy}</p>
                    </div>
                    <div class="key-topics">
                        ${subject.keyTopics.map(topic => `<span class="topic-pill">${topic}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Populate Biology Topics
function populateBiologyTopics() {
    const botanyContainer = document.getElementById('botanyTopics');
    const zoologyContainer = document.getElementById('zoologyTopics');
    
    if (botanyContainer) {
        botanyContainer.innerHTML = botanyTopics.map(topic => `
            <div class="biology-unit">
                <h5>${topic.unit}</h5>
                <ul>
                    ${topic.chapters.map(chapter => `<li>${chapter}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }
    
    if (zoologyContainer) {
        zoologyContainer.innerHTML = zoologyTopics.map(topic => `
            <div class="biology-unit">
                <h5>${topic.unit}</h5>
                <ul>
                    ${topic.chapters.map(chapter => `<li>${chapter}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }
}

// Populate Mock Test Schedule
function populateMockTests() {
    const mockContainer = document.getElementById('mockPhases');
    if (!mockContainer) return;

    mockContainer.innerHTML = mockPhases.map((phase, index) => `
        <div class="mock-phase">
            <div class="mock-phase-number">${index + 1}</div>
            <div class="mock-phase-content">
                <h4>${phase.phase}</h4>
                <p class="mock-frequency"><i class="fas fa-calendar-alt"></i> ${phase.frequency}</p>
                <p class="mock-focus">${phase.focus}</p>
            </div>
        </div>
    `).join('');
}

// Populate Important Dates
function populateImportantDates() {
    const jeeDatesContainer = document.getElementById('jeeDates');
    const neetDatesContainer = document.getElementById('neetDates');
    
    if (jeeDatesContainer) {
        jeeDatesContainer.innerHTML = jeeDates.map(item => `
            <div class="date-item">
                <div class="date-icon"><i class="fas fa-calendar-day"></i></div>
                <div class="date-content">
                    <div class="date-event">${item.event}</div>
                    <div class="date-value">${item.date}</div>
                </div>
            </div>
        `).join('');
    }
    
    if (neetDatesContainer) {
        neetDatesContainer.innerHTML = neetDates.map(item => `
            <div class="date-item">
                <div class="date-icon"><i class="fas fa-calendar-check"></i></div>
                <div class="date-content">
                    <div class="date-event">${item.event}</div>
                    <div class="date-value">${item.date}</div>
                </div>
            </div>
        `).join('');
    }
}

// Countdown Timer for NEET 2025
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Set NEET exam date (May 5, 2025)
    const examDate = new Date('May 5, 2025 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = examDate - now;

        if (distance < 0) {
            document.querySelector('.countdown-message').textContent = 'NEET 2025 has been conducted!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Populate Success Stories
function populateSuccessStories() {
    const storiesContainer = document.getElementById('successStories');
    if (!storiesContainer) return;

    storiesContainer.innerHTML = successStories.map(story => `
        <div class="story-card">
            <div class="story-avatar">${story.image}</div>
            <h4>${story.name}</h4>
            <div class="story-details">
                <div class="story-exam">${story.exam}</div>
                <div class="story-rank">${story.rank}</div>
                <div class="story-college">${story.college}</div>
            </div>
            <blockquote class="story-quote">
                <i class="fas fa-quote-left"></i>
                <p>${story.quote}</p>
            </blockquote>
        </div>
    `).join('');
}

// Newsletter Subscription
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would normally send the email to your backend
    alert('Thank you for subscribing! You will receive exam updates and tips regularly.');
    emailInput.value = '';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Animate on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.phase-card, .subject-card, .neet-subject-card, .story-card, .exam-card');
    
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
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateJeePhases();
    populateJeeSubjects();
    populateNeetSubjects();
    populateBiologyTopics();
    populateMockTests();
    populateImportantDates();
    startCountdown();
    populateSuccessStories();
    animateOnScroll();
    
    console.log('ExamRoadmap initialized successfully!');
});