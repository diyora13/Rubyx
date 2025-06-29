// Course data structure
const courseTopics = [
    {
        id: 'cpp-topic',
        name: 'C/C++ Programming',
        subtopics: [
            'Variables',
            'Conditional Statement',
            'Loop',
            'Pointer',
            'Function',
            'Recursion',
            'Preprocessor',
            'Array',
            'Structure',
            'File Management'
        ]
    },
    {
        id: 'dsa-topic',
        name: 'Data Structures & Algorithms',
        subtopics: [
            'Time & Space Complexity',
            'Vector & String',
            'Pair & Tuple',
            'Linked List',
            'Stack & Queue',
            'Set & Map',
            'Heaps',
            'Binary Tree',
            'Two Pointer',
            'Binary Search',
            'Graph - DFS & BFS',
            'Dynamic Programming'
        ]
    },
    {
        id: 'oops-topic',
        name: 'Object-Oriented Programming',
        subtopics: [
            'Class & Object',
            'Constructor & Destructor',
            'Access Modifier',
            'Inheritance',
            'Escapsulation',
            'Abstraction',
            'Polymorphism',
            'Function Overloading',
            'Function Overriding',
            'Pure Virtual Function'
        ]
    },
    {
        id: 'database-topic',
        name: 'Database',
        subtopics: [
            'Database Fundamentals',
            'SQL',
            'NoSQL',
            'Data Modeling',
            'CRUD Operation',
            'Database Realationship',
            'ACID Property',
            'Backup & Recovery'
        ]
    },
    {
        id: 'ai-topic',
        name: 'Artificial Intelligence',
        subtopics: [
            'Intro to LLM',
            'Tokens and Embeddings',
            'Looking inside LLM',
            'Text Classification',
            'Prompt Engineering',
            'AI Coding Tools'
        ]
    },
    {
        id: 'frontend-topic',
        name: 'Frontend Development',
        subtopics: [
            'Frontend Creation Using AI',
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'API Integration'
        ]
    },
    {
        id: 'backend-topic',
        name: 'Backend Development',
        subtopics: [
            'Java Fundamentals',
            'Spring Boot',
            'RESTful APIs',
            'Request Handling',
            'File Handling',
            'Error Handling',
            'Security',
            'Deployment',
            'Performance Optimization',
            'Version Control - GitHub'
        ]
    },
    {
        id: 'project-topic',
        name: 'Projects',
        subtopics: [
            'Algorithmic Project',
            'OOP Project',
            'Database Project',
            'Frontend Project',
            'Backend Project',
            'General Project'
        ]
    }
];

// Variable to track if the full course details are shown or not
let isFullCourseVisible = false;

// Function to render major topics (simplified for collapsed view)
function renderMajorTopics() {
    const majorTopicsContainer = document.querySelector('.major-topics');
    if (!majorTopicsContainer) return;

    majorTopicsContainer.innerHTML = '';
    
    courseTopics.forEach((topic, index) => {
        const topicElement = document.createElement('div');
        topicElement.className = 'major-topic' + (index === 0 ? ' active' : '');
        topicElement.dataset.topic = topic.id;
        
        topicElement.innerHTML = `<span>${topic.name}</span>`;
        
        topicElement.addEventListener('click', function() {
            // Only handle clicks if full view is visible
            if (isFullCourseVisible) {
                // Remove active class from all topics
                document.querySelectorAll('.major-topic').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked topic
                this.classList.add('active');
                
                // Hide all subtopic areas
                document.querySelectorAll('.subtopic-area').forEach(area => {
                    area.style.display = 'none';
                });
                
                // Show the corresponding subtopic area
                const subtopicArea = document.getElementById(topic.id);
                if (subtopicArea) {
                    subtopicArea.style.display = 'block';
                }
            }
        });
        
        majorTopicsContainer.appendChild(topicElement);
    });
}

// Function to render subtopics content
function renderSubtopicsContent() {
    const subtopicsContentContainer = document.querySelector('.subtopics-content');
    if (!subtopicsContentContainer) return;

    subtopicsContentContainer.innerHTML = '';
    
    courseTopics.forEach((topic, index) => {
        const subtopicArea = document.createElement('div');
        subtopicArea.id = topic.id;
        subtopicArea.className = 'subtopic-area';
        if (index === 0) {
            subtopicArea.style.display = 'block';
        }
        
        let subtopicsHTML = `<h3>${topic.name}</h3><div class="subtopic-list">`;
        
        topic.subtopics.forEach(subtopic => {
            subtopicsHTML += `
                <div class="subtopic-item">
                    <span class="subtopic-name">${subtopic}</span>
                </div>
            `;
        });
        
        subtopicsHTML += '</div>';
        subtopicArea.innerHTML = subtopicsHTML;
        subtopicsContentContainer.appendChild(subtopicArea);
    });
}

// Function to toggle between collapsed and full view
function toggleCourseView() {
    const courseContainer = document.querySelector('.course-container');
    const courseContent = document.getElementById('fullstack-ai');
    const viewMoreBtn = document.getElementById('view-more-btn');
    
    if (isFullCourseVisible) {
        // Switch to collapsed view
        courseContent.innerHTML = generateCollapsedView();
        document.getElementById('view-more-btn').addEventListener('click', toggleCourseView);
    } else {
        // Switch to full view
        courseContent.innerHTML = `<h3 class="course-main-heading">Full Stack Development with AI</h3>
        <div class="course-container">
            <div class="major-topics"></div>
            <div class="subtopics-content"></div>
        </div>
        <div class="view-more-container">
            <button id="view-more-btn" class="view-more-btn">
                <i class="fas fa-chevron-up"></i> Show Less
            </button>
        </div>`;
        
        // Re-render the full view components
        renderMajorTopics();
        renderSubtopicsContent();
        document.getElementById('view-more-btn').addEventListener('click', toggleCourseView);
    }
    
    isFullCourseVisible = !isFullCourseVisible;
}

// Function to generate the collapsed view with major topics
function generateCollapsedView() {
    let topicsList = '';
    courseTopics.forEach(topic => {
        topicsList += `<div class="collapsed-topic-item">${topic.name}</div>`;
    });
    
    return `
        <h3 class="course-main-heading">Full Stack Development with AI</h3>
        <div class="collapsed-course-container">
            <div class="collapsed-topics-list">
                ${topicsList}
            </div>
            <div class="view-more-container">
                <button id="view-more-btn" class="view-more-btn">
                    <i class="fas fa-chevron-down"></i> View More Details
                </button>
            </div>
        </div>
    `;
}

// Initialize course section
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're already in the DOM loaded event from another script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCourseSection);
    } else {
        initializeCourseSection();
    }
});

function initializeCourseSection() {
    const courseContent = document.getElementById('fullstack-ai');
    if (courseContent) {
        courseContent.innerHTML = generateCollapsedView();
        document.getElementById('view-more-btn').addEventListener('click', toggleCourseView);
    }
}
