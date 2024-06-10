async function fetchJSONData() {
    try {
        const response = await fetch('../json/author.json');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayData(data) {
    const authorInfo = document.getElementById('author-info');
    //authorInfo.style.fontSize = '5px'

    data.forEach(user => {
        const userDiv = document.createElement('nav');
        //userDiv.className = 'user';
        userDiv.classList.add('user');
        //userDiv.innerHTML = `<h1>${user.name}</h1><a c href="mailto:${user.email}>${user.email}</a>`;
        userDiv.innerHTML = `<h1><a href="${user.href}">${user.name}</h1>
                                <a style="font-size: 12px;" href="mailto:${user.email}">email</a>
                                <a style="font-size: 12px;" href="http://${user.linkedin}">linkedin</a>
                                <a style="font-size: 12px;" href="http://${user.github}">github</a>`;
        authorInfo.appendChild(userDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);