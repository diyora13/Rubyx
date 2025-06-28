// Mentors data
const mentors = [
    {
        name: 'Jaimin Moradiya',
        photo: 'images/mentors/jaimin-edited.jpg',
        role: 'Software Engineer',
        company: 'microsoft.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Sanny Dhameliya',
        photo: 'images/mentors/sanny-edited.jpeg',
        role: 'Technical Analyst',
        company: 'goldman-sachs.jpeg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Yash Sakaria',
        photo: 'images/mentors/yash_sakaria-edited.jpg',
        role: 'Software Engineer',
        company: 'microsoft.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Yash Shah',
        photo: 'images/mentors/yash_shah-edited.jpeg',
        role: 'Software Engineer',
        company: 'microsoft.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Dishant Goti',
        photo: 'images/mentors/goti-edited.jpeg',
        role: 'Software Developer',
        company: 'amazon.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Kaushal Nagani',
        photo: 'images/mentors/kaushal-edited.jpeg',
        role: 'Software Developer',
        company: 'sumo_logic-edited.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Akash Kothiya',
        photo: 'images/mentors/kothiya-edited.jpeg',
        role: 'Software Developer',
        company: 'Rippling-edited.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Harsh Rajani',
        photo: 'images/mentors/rajani-edited.jpeg',
        role: 'Software Developer Engineer',
        company: 'google.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    // Commented mentors can be added back as needed
    // {
    //     name: 'Dhruvil Bhikadiya',
    //     photo: 'images/mentors/bhikadiya-edited.jpeg',
    //     role: 'Software Developer',
    //     company: 'zepto.png',
    //     alumni: 'Alumni, DAIICT',
    //     linkedin: 'https://www.linkedin.com/'
    // },
    {
        name: 'Akshat Bhayani',
        photo: 'images/mentors/bhayani-edited.jpeg',
        role: 'Software Developer',
        company: 'navi.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    }
];

// Function to generate mentor cards and insert them into the mentor-grid
function renderMentorCards() {
    const mentorGrid = document.querySelector('.mentor-grid');
    
    // Clear any existing content
    mentorGrid.innerHTML = '';
    
    // Generate cards for each mentor
    mentors.forEach(mentor => {
        const mentorCard = document.createElement('div');
        mentorCard.className = 'mentor-card';
        
        mentorCard.innerHTML = `
            <div class="mentor-photo">
                <img src="${mentor.photo}" alt="${mentor.name}">
            </div>
            <div class="mentor-info">
                <h3>${mentor.name}</h3>
                <p class="mentor-project">${mentor.role}</p>
                <div class="mentor-company">
                    <img src="images/logo/${mentor.company}" alt="Company Logo" class="company-logo">
                </div>
                <p class="mentor-alumni">${mentor.alumni}</p>
                <a href="${mentor.linkedin}" target="_blank" class="linkedin-btn">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        `;
        
        mentorGrid.appendChild(mentorCard);
    });
}

// Initialize the mentor section once the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderMentorCards();
});
