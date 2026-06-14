async function fetchJSONData() {
    try {
        const response = await fetch('../json/author.json');
        const data = await response.json();
        displayAuthor(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayAuthor(data) {
    const authorInfo = document.getElementById('author-info');
    
    data.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `<h1><a href="${user.href}">${user.name}</a></h1>
                                <a class="author-link" href="mailto:${user.email}">email</a>
                                <a class="author-link" href="http://${user.linkedin}">linkedin</a>
                                <a class="author-link" href="http://${user.github}">github</a>`;
        authorInfo.appendChild(userDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);