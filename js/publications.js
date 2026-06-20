async function fetchPublications() {
    try {
        const response = await fetch('../json/publications.json');
        const data = await response.json();
        displayPublications(data);
    } catch (error) {
        console.error('Error fetching the publications JSON data:', error);
    }
}

function displayPublications(data) {
    const publicationsList = document.getElementById('publications-list');

    data.forEach(publication => {
        const publicationDiv = document.createElement('div');
        publicationDiv.classList.add('publication-item');

        publicationDiv.innerHTML = `
            <h3>
                <a href="${publication.url}" target="_blank" rel="noopener noreferrer">
                    ${publication.heading}
                </a>
            </h3>
        `;

        publicationsList.appendChild(publicationDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchPublications);