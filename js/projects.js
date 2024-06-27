async function fetchJSONData() {
    try {
        const response = await fetch('../json/projects.json');
        const data = await response.json();
        displayProjects(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayProjects(data) {
    const projectList = document.getElementById('projects-list');
    
    data.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-item');
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
                            <hr>
                        `;
        projectList.appendChild(projectDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);