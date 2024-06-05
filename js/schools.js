async function fetchJSONData() {
    try {
        const response = await fetch('../json/schools.json');
        const data = await response.json();
        displayData5(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayData5(data) {
    //const container = document.getElementById('menu-list');
    const schoolList = document.getElementById('schools-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(school => {
        const schoolDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        schoolDiv.classList.add('school-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
        schoolDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><a href="http://${school.url}"><img src="images/${school.image}" alt="${school.school}"></a></td>
                                    <td class="col-text">
                                        <h3>${school.school}</h3>
                                        <p>Degree: ${school.degree}</p>
                                        <p>Courses: ${school.courses}</p>
                                        <p>Duration: ${school.duration}</p>
                                        <p>Location: ${school.location}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        //container.appendChild(menuItemDiv);
        schoolList.appendChild(schoolDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);