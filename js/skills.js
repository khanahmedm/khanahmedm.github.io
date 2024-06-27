async function fetchJSONData() {
    try {
        const response = await fetch('../json/skills.json');
        const data = await response.json();
        displaySkills(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displaySkills(data) {
    const skillsList = document.getElementById('skills-list');
    
    data.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill-item');
        skillDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><img src="images/${skill.image}" alt="${skill.skillName}"></td>
                                    <td class="col-text">
                                        <h3>${skill.skillName}</h3>
                                        <p>${skill.skills}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        skillsList.appendChild(skillDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);