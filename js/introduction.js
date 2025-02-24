async function fetchJSONData() {
    try {
        const response = await fetch('../json/introduction.json');
        const data = await response.json();
        displayIntro(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayIntro(data) {
    const intro = document.getElementById('intro-list');

    data.forEach(user => {
        const introDiv = document.createElement('div');
        introDiv.classList.add('intro');
        introDiv.innerHTML = `<img id="image" src="images/${user.image}" alt="Your Image" class="my-image">
                                <p class="intro-para">${user.introduction}</p>`;
        intro.appendChild(introDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);