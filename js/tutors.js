// Tutors data
const tutors = [
    {
        image: 'images/tutors/manan-edited.jpeg',
        name: 'Manan Diyora',
        company: 'Microsoft',
        ctc: '₹60L',
        education: 'B. Tech. From Dhirubhai Ambani Institute of Information and Communication Technology(DAIICT)',
        expertise: ['C/C++', 'DSA', 'OOPs', 'AI', 'Database', 'Backend'],
        linkedin: 'https://www.linkedin.com/in/manandiyora/'
    },
    {
        image: 'images/tutors/kevalghelani-edited.jpeg',
        name: 'Keval Ghelani',
        company: 'M & M Software',
        ctc: '₹12L',
        education: 'B. Tech. From Charotar University of Science and Technology(CHARUSAT)',
        expertise: ['C/C++', 'DSA', 'OOPs', 'AI', 'Frontend', 'Backend'],
        linkedin: 'https://www.linkedin.com/in/keval-ghelani-bb614518a/'
    }
    // You can add more tutors here as needed
];

// Function to render tutors
function renderTutors() {
    const tutorContainer = document.querySelector('.tutor-container');
    if (!tutorContainer) return;
    
    tutorContainer.innerHTML = '';
    
    tutors.forEach(tutor => {
        const tutorElement = document.createElement('div');
        tutorElement.className = 'tutor';
        
        const expertiseString = tutor.expertise.join(', ');
        
        tutorElement.innerHTML = `
            <div class="tutor-image">
                <img src="${tutor.image}" alt="${tutor.name}">
            </div>
            <div class="tutor-details">
                <h3>${tutor.name}</h3>
                <p class="tutor-company">Working at <strong>${tutor.company}</strong></p>
                <p class="tutor-ctc">CTC: <strong>${tutor.ctc}</strong></p>
                <p class="tutor-college">Education: <strong>${tutor.education}</strong></p>
                <p class="tutor-expertise">Expertise in: <span>${expertiseString}</span></p>
                <a href="${tutor.linkedin}" target="_blank" class="linkedin-btn">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        `;
        
        tutorContainer.appendChild(tutorElement);
    });
}

// Initialize tutors section
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're already in the DOM loaded event from another script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderTutors);
    } else {
        renderTutors();
    }
});
