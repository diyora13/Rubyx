const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const searchInput = document.getElementById('participant-search');
const suggestions = document.getElementById('name-suggestions');
const statusMessage = document.getElementById('certificate-status');
const downloadButton = document.getElementById('download-certificate');

let participants = [];
let filteredParticipants = [];
let activeSuggestion = -1;
let selectedParticipant = null;

function parseCsv(text) {
    const lines = text.trim().split(/\r?\n/);
    const headers = lines.shift().split(',').map(header => header.trim().toLowerCase());
    const nameIndex = headers.indexOf('name');
    const fileIndex = headers.indexOf('file');

    if (nameIndex === -1 || fileIndex === -1) {
        throw new Error('CSV must contain name and file columns.');
    }

    return lines
        .map(line => line.split(',').map(value => value.trim()))
        .filter(values => values[nameIndex] && values[fileIndex])
        .map(values => ({
            name: values[nameIndex],
            file: values[fileIndex]
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

function closeSuggestions() {
    suggestions.hidden = true;
    searchInput.setAttribute('aria-expanded', 'false');
    activeSuggestion = -1;
}

function resetSelection() {
    selectedParticipant = null;
    downloadButton.classList.add('disabled');
    downloadButton.setAttribute('aria-disabled', 'true');
    downloadButton.removeAttribute('download');
    downloadButton.href = '#';
    statusMessage.className = 'certificate-status';
    statusMessage.textContent = 'Select your name from the suggestions.';
}

function selectParticipant(participant) {
    selectedParticipant = participant;
    searchInput.value = participant.name;
    downloadButton.href = `certificates/${encodeURIComponent(participant.file)}`;
    downloadButton.setAttribute('download', participant.file);
    downloadButton.classList.remove('disabled');
    downloadButton.setAttribute('aria-disabled', 'false');
    statusMessage.className = 'certificate-status success';
    statusMessage.textContent = `Certificate found for ${participant.name}.`;
    closeSuggestions();
}

function renderSuggestions() {
    suggestions.innerHTML = '';

    if (filteredParticipants.length === 0) {
        closeSuggestions();
        statusMessage.className = 'certificate-status error';
        statusMessage.textContent = 'No participant found with that name.';
        return;
    }

    filteredParticipants.forEach((participant, index) => {
        const item = document.createElement('li');
        item.textContent = participant.name;
        item.id = `participant-option-${index}`;
        item.setAttribute('role', 'option');
        item.addEventListener('mousedown', event => {
            event.preventDefault();
            selectParticipant(participant);
        });
        suggestions.appendChild(item);
    });

    suggestions.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
    statusMessage.className = 'certificate-status';
    statusMessage.textContent = 'Select your name from the suggestions.';
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    resetSelection();

    if (!query) {
        closeSuggestions();
        return;
    }

    filteredParticipants = participants
        .filter(participant => participant.name.toLowerCase().includes(query))
        .slice(0, 8);
    renderSuggestions();
});

searchInput.addEventListener('keydown', event => {
    if (suggestions.hidden || filteredParticipants.length === 0) {
        return;
    }

    if (event.key === 'ArrowDown') {
        event.preventDefault();
        activeSuggestion = (activeSuggestion + 1) % filteredParticipants.length;
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        activeSuggestion = (activeSuggestion - 1 + filteredParticipants.length) % filteredParticipants.length;
    } else if (event.key === 'Enter' && activeSuggestion >= 0) {
        event.preventDefault();
        selectParticipant(filteredParticipants[activeSuggestion]);
        return;
    } else if (event.key === 'Escape') {
        closeSuggestions();
        return;
    } else {
        return;
    }

    suggestions.querySelectorAll('li').forEach((item, index) => {
        const isActive = index === activeSuggestion;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-selected', String(isActive));
    });
    searchInput.setAttribute('aria-activedescendant', `participant-option-${activeSuggestion}`);
});

document.addEventListener('click', event => {
    if (!suggestions.contains(event.target) && event.target !== searchInput) {
        closeSuggestions();
    }
});

menuIcon.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active', isOpen);
    menuIcon.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        menuIcon.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
    });
});

if (window.location.protocol !== 'file:') {
    fetch('data/participants.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Participant list could not be loaded.');
            }
            return response.text();
        })
        .then(text => {
            participants = parseCsv(text);
        })
        .catch(() => {
            statusMessage.textContent = 'Using the available participant list.';
        });
}
