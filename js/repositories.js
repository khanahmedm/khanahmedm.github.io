async function fetchJSONData() {
    try {
        const response = await fetch('../json/repositories.json');
        const data = await response.json();
        displayRepositories(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayRepositories(data) {
    const repositoriesList = document.getElementById('repositories-list');

    data.forEach(repository => {
        const repositoryDiv = document.createElement('div');
        repositoryDiv.classList.add('repository-item');
        repositoryDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><img src="images/${repository.image}" alt="${repository.repoName}"></td>
                                    <td class="col-text">
                                        <h3>${repository.repoName}</h3>
                                        <p>Skills: ${repository.skills}</p>
                                        <p><a href=${repository.url}>Repository</a></p>
                                    </td>
                                </tr>
                            </table>
                        `;
        repositoriesList.appendChild(repositoryDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);