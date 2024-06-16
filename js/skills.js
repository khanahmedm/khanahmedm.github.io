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
    //const container = document.getElementById('menu-list');
    const skillsList = document.getElementById('skills-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(skill => {
        const skillDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        skillDiv.classList.add('skill-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
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
        //container.appendChild(menuItemDiv);
        skillsList.appendChild(skillDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);