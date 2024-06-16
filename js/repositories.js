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
    //const container = document.getElementById('menu-list');
    const repositoriesList = document.getElementById('repositories-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(repository => {
        const repositoryDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        repositoryDiv.classList.add('repository-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
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
        //container.appendChild(menuItemDiv);
        repositoriesList.appendChild(repositoryDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);