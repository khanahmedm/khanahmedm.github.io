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
    const intro = document.getElementById('intro');
    //authorInfo.style.fontSize = '5px'

    data.forEach(user => {
        const introDiv = document.createElement('div');
        //userDiv.className = 'user';
        introDiv.classList.add('intro');
        //userDiv.innerHTML = `<h1>${user.name}</h1><a c href="mailto:${user.email}>${user.email}</a>`;
        introDiv.innerHTML = `<img id="image" src="images/${user.image}" alt="Your Image" class="my-image">
                                <p>${user.introduction}</p>`;
        intro.appendChild(introDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);