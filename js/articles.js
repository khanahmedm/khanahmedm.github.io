async function fetchJSONData() {
    try {
        const response = await fetch('../json/articles.json');
        const data = await response.json();
        displayArticles(data);
    } catch (error) {
        console.error('Error fetching the articles JSON data:', error);
    }
}

function displayArticles(data) {
    const articlesList = document.getElementById('articles-list');

    data.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article-item');

        articleDiv.innerHTML = `
            <h3>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                    ${article.heading}
                </a>
            </h3>
        `;

        articlesList.appendChild(articleDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchJSONData);