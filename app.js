// Data for the application
const appData = {
    headerBanner: {
        text: "New-learner offer | Courses from E£2959.99. Click button to see savings.",
        timer: "Ends in 5h 56m 33s",
        buttonText: "Click to redeem"
    },
    
    header: {
        logo: "udemy",
        categories: "Explore",
        searchPlaceholder: "Search for anything",
        navLinks: [
            { text: "Plans & pricing", type: "normal" },
            { text: "Udemy Business", type: "business" },
            { text: "Teach on Udemy", type: "normal" }
        ]
    },
    
    hero: {
        title: "Jump into learning – for less",
        description: "If you're new to Udemy, we've got good news: For a limited time, courses start at just E£2959.99 for new learners!",
        buttonText: "Sign up now"
    },
    
    skills: {
        title: "Learn essential career and life skills",
        description: "Udemy helps you build in-demand skills fast and advance your career in a changing job market.",
        skillsList: [
            "Generative AI",
            "IT Certifications", 
            "Data Science"
        ]
    },
    
    aiEra: {
        title: "Reimagine your career in the AI era",
        description: "Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.",
        features: [
            { text: "Learn AI and more", checked: true },
            { text: "Prep for a certification", checked: true },
            { text: "Practice with AI coaching", checked: true},
            { text: "Advance your career", checked: true }
        ],
        price: "Starting at E£2040.00/month"
    },
    
    courses: {
        title: "Skills to transform your career and life",
        description: "From critical skills to technical topics, Udemy supports your professional development.",
        skills: [
            "Artificial Intelligence (AI)",
            "Python", 
            "Microsoft Excel",
            "AI Agents & Agentic AI",
            "Digital Marketing",
            "Amazon AWS"
        ],
        courses: [
            {
                id: 1,
                title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
                instructor: "360 Careers",
                badge: "bestseller",
                rating: 4.6,
                ratingCount: 801,
                price: "E£349.99"
            },
            {
                id: 2,
                title: "Intro to AI Agents and Agentic AI",
                instructor: "360 Careers", 
                badge: "bestseller",
                rating: 4.4,
                ratingCount: 895,
                price: "E£349.99"
            },
            {
                id: 3,
                title: "Artificial Intelligence (AI) Foundations for Developers",
                instructor: "Rahul Rajat Singh",
                badge: "highest-rated",
                rating: 5.0,
                ratingCount: 21,
                price: "E£349.99"
            },
            {
                id: 4,
                title: "The Complete Guide To AI Powered Salesforce Development",
                instructor: "Matt Gerry",
                badge: "hot-new",
                rating: 4.8,
                ratingCount: 74,
                price: "E£349.99"
            }
        ]
    },
    
    trustedCompanies: {
        title: "Trusted by over 17,000 companies and millions of learners around the world",
        companies: [
            "SAMSUNG",
            "vimeo", 
            "R&G",
            "Hewlett Packard Enterprise",
            "citi"
        ]
    }
};

// Header Banner Component
function HeaderBanner() {
    return (
        <div className="header-banner">
            <div className="banner-content">
                <span>{appData.headerBanner.text}</span>
                <span className="timer">{appData.headerBanner.timer}</span>
                <button className="redeem-btn">{appData.headerBanner.buttonText}</button>
            </div>
        </div>
    );
}

// Header Component
function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="#" className="logo">{appData.header.logo}</a>
                <button className="categories-btn">{appData.header.categories}</button>
                
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder={appData.header.searchPlaceholder}
                    />
                </div>
                
                <div className="nav-links">
                    {appData.header.navLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href="#" 
                            className={`nav-link ${link.type === 'business' ? 'udemy-business' : ''}`}
                        >
                            {link.text}
                        </a>
                    ))}
                    <button className="login-btn">Log in</button>
                    <button className="signup-btn">Sign up</button>
                    <button className="language-btn">🌐</button>
                </div>
            </nav>
        </header>
    );
}

// Hero Section Component
function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{appData.hero.title}</h1>
                <p>{appData.hero.description}</p>
                <button className="cta-button">{appData.hero.buttonText}</button>
            </div>
        </section>
    );
}

// Skills Section Component
function SkillsSection() {
    return (
        <section className="skills-section">
            <h2>{appData.skills.title}</h2>
            <p>{appData.skills.description}</p>
            <div className="skills-list">
                {appData.skills.skillsList.map((skill, index) => (
                    <div key={index} className="skill-item">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

// AI Era Section Component
function AiEraSection() {
    return (
        <section className="ai-era-section">
            <h2>{appData.aiEra.title}</h2>
            <p>{appData.aiEra.description}</p>
            
            <div className="ai-features">
                {appData.aiEra.features.map((feature, index) => (
                    <div key={index} className="ai-feature">
                        <div className="feature-checkbox">
                            <input 
                                type="checkbox" 
                                checked={feature.checked} 
                                readOnly 
                            />
                            <span>{feature.text}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="learn-more-section">
                <button className="cta-button">Learn more</button>
                <div className="price">{appData.aiEra.price}</div>
            </div>
        </section>
    );
}

// Course Card Component
function CourseCard({ course }) {
    const getBadgeClass = (badge) => {
        switch(badge) {
            case 'bestseller': return 'bestseller';
            case 'highest-rated': return 'highest-rated';
            case 'hot-new': return 'hot-new';
            default: return '';
        }
    };

    const getBadgeText = (badge) => {
        switch(badge) {
            case 'bestseller': return 'Bestseller';
            case 'highest-rated': return 'Highest Rated';
            case 'hot-new': return 'Hot & New';
            default: return '';
        }
    };

    return (
        <div className="course-card">
            <div className="course-image">
                Course Preview
            </div>
            <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>
                <div className="course-meta">
                    <span className={getBadgeClass(course.badge)}>
                        {getBadgeText(course.badge)}
                    </span>
                    <span className="rating">{course.rating}</span>
                    <span className="rating-count">({course.ratingCount})</span>
                </div>
                <div className="course-price">{course.price}</div>
            </div>
        </div>
    );
}

// Courses Section Component
function CoursesSection() {
    return (
        <section className="courses-section">
            <h2 className="section-title">{appData.courses.title}</h2>
            <p>{appData.courses.description}</p>
            
            <div className="skills-tabs">
                {appData.courses.skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className={`skill-tab ${index === 0 ? 'active' : ''}`}
                    >
                        {skill}
                    </div>
                ))}
            </div>
            
            <div className="courses-grid">
                {appData.courses.courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            
            <a href="#" className="show-all">
                Show all Artificial Intelligence (AI) courses →
            </a>
        </section>
    );
}

// Trusted Companies Component
function TrustedCompanies() {
    return (
        <section className="trusted-companies">
            <h2>{appData.trustedCompanies.title}</h2>
            <div className="companies-grid">
                {appData.trustedCompanies.companies.map((company, index) => (
                    <div key={index} className="company-logo">
                        {company}
                    </div>
                ))}
            </div>
        </section>
    );
}

// Main App Component
function App() {
    return (
        <div>
            <HeaderBanner />
            <Header />
            <Hero />
            <SkillsSection />
            <AiEraSection />
            <CoursesSection />
            <TrustedCompanies />
        </div>
    );
}

// Render the application
ReactDOM.render(<App />, document.getElementById('root'));