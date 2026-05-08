/**
 * Portfolio Interactive Script
 * Muhammad Zubair – AI Developer Portfolio
 * EmailJS + AI Chatbot integrated
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.getElementById(href.substring(1));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // LinkedIn buttons
    document.querySelectorAll('.hire, .primary-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const parentLink = this.closest('a');
            if (!parentLink || !parentLink.href.includes('linkedin')) {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/muhammad-zubair-meo', '_blank');
            }
        });
    });

    // Active nav highlight on scroll
    const sections = ['home', 'education', 'projects', 'certifications', 'experience', 'contact'];
    const navItems = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 100;
        for (const id of sections) {
            const section = document.getElementById(id);
            if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                current = id;
                break;
            }
        }
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            item.style.color = (href && href.substring(1) === current) ? '#00ff95' : '#d1d5db';
        });
    });

    // ========== PROJECTS ==========
    const projects = [
        { title: "House Price Prediction", tech: "Python · Scikit-learn · Pandas · Flask", desc: "Regression model with 89% R² score, deployed as web API.", feedback: "Accurate predictions helped our real estate team price properties faster.", client: "Sara Khan, Property Analyst", icon: "chart-line" },
        { title: "Market Trend Analysis", tech: "Python · TensorFlow · LSTM · Tableau", desc: "Time-series forecasting using LSTM neural networks with interactive dashboards.", feedback: "The trend insights gave us a competitive edge.", client: "Ali Raza, Investment Advisor", icon: "chart-bar" },
        { title: "Online Banking System", tech: "C++ · OOP · File Handling · SQLite", desc: "Console app with authentication, transfers, and transaction history.", feedback: "Reliable and fast. Great foundation for modern banking APIs.", client: "Fatima Zafar, Fintech Intern", icon: "university" },
        { title: "Smart Calculator", tech: "HTML5 · CSS3 · JavaScript · Python", desc: "Scientific calculator with history log and dark mode.", feedback: "Clean UI and accurate calculations. Loved the history feature!", client: "Bilal Ahmed, Teacher", icon: "calculator" },
        { title: "AI Resume Screener", tech: "Python · SpaCy · Streamlit", desc: "NLP tool that extracts skills and matches candidates to job descriptions.", feedback: "Cut our HR workload dramatically. Highly accurate.", client: "Hina Tariq, HR Manager", icon: "file-alt" },
        { title: "E‑commerce Dashboard", tech: "React · Node.js · MongoDB · Chart.js", desc: "Dashboard for product management, sales analytics, and real-time charts.", feedback: "Transformed our data into actionable insights. The team loved the UI.", client: "Usman Chaudhry, Founder", icon: "shopping-cart" }
    ];
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(p => `
            <div class="project-card">
                <div class="project-icon"><i class="fas fa-${p.icon}"></i></div>
                <h3>${p.title}</h3>
                <p class="project-tech">${p.tech}</p>
                <p class="project-description">${p.desc}</p>
                <div class="client-feedback"><i class="fas fa-quote-left"></i><span> "${p.feedback}"</span><strong>- ${p.client}</strong></div>
                <div class="project-links"><a href="#" class="project-btn"><i class="fab fa-github"></i> Code</a><a href="#" class="project-btn"><i class="fas fa-external-link-alt"></i> Demo</a></div>
                <div class="card-glow"></div>
            </div>
        `).join('');
    }

    // ========== CERTIFICATIONS with UNIQUE ICONS ==========
    const certificates = [
        { name: "Claude 101", org: "Anthropic", year: "2026", img: "images/claude101.jpg", icon: "robot" },
        { name: "Wordpress", org: "DigiSkills.pk", year: "2026", img: "images/wordpress.jpg", icon: "wordpress" },
        { name: "Digital Literacy", org: "DigiSkills.pk", year: "2026", img: "images/digital_literacy.jpg", icon: "desktop" },
        { name: "Freelancing", org: "DigiSkills.pk", year: "2025", img: "images/freelancing.jpg", icon: "handshake" },
        { name: "Data Analytics & Business Intelligence", org: "DigiSkills.pk", year: "2025", img: "images/data_analytics.jpg", icon: "chart-line" },
        { name: "Lookup And Text Functions", org: "United Latino Students Association", year: "2025", img: "images/lookup_text.jpg", icon: "search" },
        { name: "Creating A Budget with Excel", org: "United Latino Students Association", year: "2025", img: "images/budget_excel.jpg", icon: "dollar-sign" },
        { name: "Conditional Formatting in Excel", org: "United Latino Students Association", year: "2025", img: "images/conditional_formatting.jpg", icon: "filter" },
        { name: "Charts In MS Excel", org: "United Latino Students Association", year: "2025", img: "images/charts_excel.jpg", icon: "chart-pie" },
        { name: "Finding,Sorting,Filtering in Excel", org: "United Latino Students Association", year: "2025", img: "images/sort_filter_excel.jpg", icon: "filter" },
        { name: "Computer Short Course", org: "College of IT Shujabad", year: "2024", img: "images/computer_short_course.jpg", icon: "laptop" }
    ];
    const certGrid = document.getElementById('certGrid');
    if (certGrid) {
        certificates.forEach((c, i) => {
            const card = document.createElement('div');
            card.className = 'cert-card';
            card.setAttribute('data-index', i);
            card.innerHTML = `<div class="cert-icon"><i class="fas fa-${c.icon}"></i></div><h3>${c.name}</h3><div class="cert-org">${c.org}</div><div class="cert-year">${c.year}</div>`;
            certGrid.appendChild(card);
        });
    }
    // Certificate modal (unchanged)
    const certModal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalOrg = document.getElementById('modalOrg');
    const modalYear = document.getElementById('modalYear');
    const downloadBtn = document.getElementById('downloadBtn');
    const closeCert = document.getElementById('closeModalBtn');
    const overlay = document.querySelector('.modal-overlay');
    function openCert(index) {
        const c = certificates[index];
        modalTitle.textContent = c.name;
        modalOrg.textContent = c.org;
        modalYear.textContent = `Year: ${c.year}`;
        modalImg.src = c.img;
        downloadBtn.href = c.img;
        downloadBtn.download = `${c.name.replace(/\s+/g, '_')}_certificate.jpg`;
        certModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    function closeCertModal() {
        certModal.style.display = 'none';
        document.body.style.overflow = '';
    }
    if (certGrid) {
        certGrid.addEventListener('click', e => {
            const card = e.target.closest('.cert-card');
            if (card) openCert(card.getAttribute('data-index'));
        });
    }
    if (closeCert) closeCert.addEventListener('click', closeCertModal);
    if (overlay) overlay.addEventListener('click', closeCertModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && certModal.style.display === 'flex') closeCertModal(); });

    // ========== EXPERIENCE ==========
    const experiences = [
        { title: "Computer Operator", company: "Iqra Cotton Industry", date: "Oct 2023 – Nov 2024", desc: "Managed Excel sheets for inventory, payroll, and reporting. Automated data entry, reducing errors by 20%.", img: "images/iqra_cotton.jpg", icon: "industry" },
        { title: "Computer Operator", company: "Volka Food International", date: "Jan 2025 – Present", desc: "Proficient in MS Excel, TimeTrax, and SAP S/4HANA for supply chain and HR data management.", img: "images/volka_food.jpg", icon: "utensils" },
        { title: "Python Developer Intern", company: "HexSoftware (Remote)", date: "Apr 2026 – May 2026", desc: "Developed backend modules, automated scripts, and contributed to API integration.", img: "images/hexsoftware.jpg", icon: "laptop-code" },
        { title: "Crypto Trader & Blockchain Enthusiast", company: "Self‑directed", date: "Since 2023", desc: "Active crypto trading with strong knowledge of blockchain, smart contracts, and DeFi.", img: "images/crypto_trading.jpg", icon: "bitcoin" },
        { title: "Member – Data Science Society", company: "MNSUAM", date: "Joined Sep 2024", desc: "Collaborate on data‑driven projects and build professional networks.", img: "images/datascience_society.jpg", icon: "chart-line" },
        { title: "Member – Coding Hawks Society", company: "MNSUAM", date: "Joined Sep 2024", desc: "Participate in coding competitions, hackathons, and peer‑learning sessions.", img: "images/codinghawks.jpg", icon: "code" }
    ];
    const expGrid = document.getElementById('experienceGrid');
    if (expGrid) {
        expGrid.innerHTML = experiences.map((e, i) => `
            <div class="exp-card" data-exp-index="${i}">
                <div class="exp-icon"><i class="fab fa-${e.icon}"></i></div>
                <div class="exp-content">
                    <h3>${e.title}</h3>
                    <div class="exp-company">${e.company}</div>
                    <div class="exp-date"><i class="far fa-calendar-alt"></i> ${e.date}</div>
                    <p class="exp-description">${e.desc}</p>
                </div>
                <div class="card-glow"></div>
            </div>
        `).join('');
    }
    // Experience modal logic
    const expModal = document.getElementById('expModal');
    const expImg = document.getElementById('expModalImage');
    const expTitle = document.getElementById('expModalTitle');
    const expCompany = document.getElementById('expModalCompany');
    const expDate = document.getElementById('expModalDate');
    const expDesc = document.getElementById('expModalDesc');
    const closeExp = document.querySelector('.exp-modal-close');
    const expOverlay = document.querySelector('.exp-modal-overlay');
    function openExp(index) {
        const e = experiences[index];
        expTitle.textContent = e.title;
        expCompany.textContent = e.company;
        expDate.textContent = e.date;
        expDesc.textContent = e.desc;
        expImg.src = e.img;
        expModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    function closeExpModal() {
        expModal.style.display = 'none';
        document.body.style.overflow = '';
    }
    if (expGrid) {
        expGrid.addEventListener('click', e => {
            const card = e.target.closest('.exp-card');
            if (card) openExp(card.getAttribute('data-exp-index'));
        });
    }
    if (closeExp) closeExp.addEventListener('click', closeExpModal);
    if (expOverlay) expOverlay.addEventListener('click', closeExpModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && expModal.style.display === 'flex') closeExpModal(); });

    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.home-content, .profile-frame, .status-badge, .location').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========== EMAILJS CONTACT FORM ==========
    if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.onload = () => {
            emailjs.init('8q_h69q2jlx0ZgVi7');
        };
        document.head.appendChild(script);
    }
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
            submitBtn.disabled = true;
            const templateParams = { from_name: name, from_email: email, phone: phone, message: message, to_email: 'mzubairsaeedmeo@gmail.com' };
            emailjs.send('service_tnep8hs', 'template_3u0kj66', templateParams)
                .then(() => { alert('✅ Message sent successfully! I will get back to you soon.'); contactForm.reset(); })
                .catch(() => alert('❌ Oops! Something went wrong. Please try again later.'))
                .finally(() => { submitBtn.innerHTML = originalText; submitBtn.disabled = false; });
        });
    }

    // ========== AI CHATBOT ==========
    const chatToggle = document.getElementById('chatToggle');
    const chatContainer = document.getElementById('chatContainer');
    const chatClose = document.getElementById('chatClose');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const suggestions = document.querySelectorAll('.suggestion');

    const knowledge = {
        skills: "Zubair's skills include: AI/ML (Python, TensorFlow, Scikit-learn), Web Development (HTML, CSS, JS, React), C++, Excel, SAP S/4HANA, TimeTrax, Blockchain, Crypto trading, Data Analysis.",
        projects: "Featured projects: House Price Prediction, Market Trend Analysis, Online Banking System (C++), Smart Calculator, AI Resume Screener, E‑commerce Dashboard. All have client feedback.",
        education: "School: Govt High School Shujabad (993/1100, 90.3%). College: Iqra Education System (848/1200). University: MNS University of Agriculture, Multan – BS IT, ongoing, GPA 3.60/4.00.",
        experience: "Work: Computer Operator at Iqra Cotton Industry (Oct 2023–Nov 2024) and Volka Food International (Jan 2025–present). Intern: Python Developer at HexSoftware (Apr–May 2026). Also Crypto trader since 2023 and member of Data Science Society & Coding Hawks at MNSUAM.",
        certifications: "Certifications: Claude 101 (Anthropic, 2026), WordPress, Digital Literacy, Freelancing, Data Analytics (DigiSkills.pk), several Excel certs from United Latino Students Association, and Computer Short Course from College of IT Shujabad.",
        contact: "You can contact Zubair via the contact form on this website, email at mzubairsaeedmeo@gmail.com, or LinkedIn (linkedin.com/in/muhammad-zubair-meo).",
        hire: "To hire Zubair, click the 'Hire Me' button in the navbar or use the contact form. He's available for AI/ML, web development, data science, and Python roles."
    };

    function getBotReply(question) {
        const q = question.toLowerCase();
        if (q.match(/skill|tech|know|language|framework|tool|excel|python|react|ml|ai/)) return knowledge.skills;
        if (q.match(/project|build|created|made|portfolio|demo/)) return knowledge.projects;
        if (q.match(/education|study|school|college|university|degree|gpa|bsit/)) return knowledge.education;
        if (q.match(/experience|work|job|intern|operator|internship|volka|iqra|hexsoftware|crypto|society|member/)) return knowledge.experience;
        if (q.match(/certificate|certification|course|digiskills|anthropic|excel cert/)) return knowledge.certifications;
        if (q.match(/contact|email|reach|linkedin|get in touch/)) return knowledge.contact;
        if (q.match(/hire|available|work with|collaborate|freelance|job/)) return knowledge.hire;
        return "I'm sorry, I don't have information about that. You can ask about Zubair's skills, projects, education, experience, certifications, or how to hire him.";
    }

    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        msgDiv.innerHTML = `<i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i><div class="message-text">${text}</div>`;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserInput() {
        const text = chatInput.value.trim();
        if (!text) return;
        addMessage(text, true);
        chatInput.value = '';
        setTimeout(() => { addMessage(getBotReply(text), false); }, 400);
    }

    chatToggle.addEventListener('click', () => chatContainer.classList.toggle('open'));
    chatClose.addEventListener('click', () => chatContainer.classList.remove('open'));
    chatSend.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleUserInput(); });
    suggestions.forEach(suggestion => {
        suggestion.addEventListener('click', () => {
            chatInput.value = suggestion.getAttribute('data-question');
            handleUserInput();
        });
    });

    console.log('%c🚀 Muhammad Zubair Portfolio | AI Developer', 'color: #00ff95; font-size: 16px;');
});
