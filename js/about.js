// About section data
const aboutTiles = [
    {
        icon: '👨‍🏫',
        title: 'Top-Notch Tutors',
        description: 'We have the best tutors from the industry, bringing real-world experience and expertise to every class.'
    },
    {
        icon: '🎯',
        title: 'Placement Support',
        description: 'From resume building to mock interviews, we guide you every step of the way to land your dream job in IT.'
    },
    {
        icon: '🛠️',
        title: 'Hands-On Projects',
        description: 'Build real-world projects and a strong portfolio that showcases your skills. We believe in learning by doing.'
    },
    {
        icon: '⏰',
        title: '24/7 Doubt Support',
        description: 'Got a question at midnight? No problem. Our support team is available round-the-clock to help you out.'
    },
    {
        icon: '📚',
        title: 'Industry-Ready Curriculum',
        description: 'Our courses are crafted by professionals to match current industry demands so you learn what companies actually need.'
    },
    {
        icon: '💬',
        title: 'Expert Interaction Sessions',
        description: 'Connect with mentors from top companies in our bi-weekly live sessions. Get inspired and gain insider tips.'
    },
    {
        icon: '📅',
        title: 'Weekly Skill Boosters',
        description: 'Learn exciting extras like ethical hacking, GitHub mastery, and more in our weekly bonus sessions.'
    },
    {
        icon: '🏢',
        title: 'World-Class Facilities',
        description: 'Train in a modern lab setup with all the tools and tech you need to succeed.'
    }
];

// Function to render about tiles
function renderAboutTiles() {
    const aboutTilesContainer = document.querySelector('.about-tiles');
    if (!aboutTilesContainer) return;
    
    aboutTilesContainer.innerHTML = '';
    
    aboutTiles.forEach(tile => {
        const tileElement = document.createElement('div');
        tileElement.className = 'about-tile';
        
        tileElement.innerHTML = `
            <h2>${tile.icon}</h2>
            <h3>${tile.title}</h3>
            <p>${tile.description}</p>
        `;
        
        aboutTilesContainer.appendChild(tileElement);
    });
}

// Initialize about section
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're already in the DOM loaded event from another script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderAboutTiles);
    } else {
        renderAboutTiles();
    }
});
