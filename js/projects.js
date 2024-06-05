async function fetchJSONData() {
    try {
        const response = await fetch('../json/projects.json');
        const data = await response.json();
        displayData4(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayData4(data) {
    //const container = document.getElementById('menu-list');
    const projectList = document.getElementById('projects-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(project => {
        const projectDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        projectDiv.classList.add('project-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
        projectDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><a href="http://${project.url}"><img src="images/${project.image}" alt="${project.client}"></a></td>
                                    <td class="col-text">
                                        <h3>Project: ${project.project}</h3>
                                        <p><b>Client:</b> ${project.client}</p>
                                        <p><b>Role:</b> ${project.role}</p>
                                        <p><b>Year:</b> ${project.year}</p>
                                        <p><b>Skills:</b> ${project.skills}</p>
                                        <br>
                                        <p><b>Description:</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                    <ul><li>
                                    ${project.description.replace(/\n/g, "<br><br><li>")}
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                    <iframe src="html/${project.diagram}" width="100%" height="450px" frameborder="0"></iframe>
                                    </td>
                                </tr>
                            </table>
                        `;
        //container.appendChild(menuItemDiv);
        projectList.appendChild(projectDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);