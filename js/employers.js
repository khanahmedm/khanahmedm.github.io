async function fetchJSONData() {
    try {
        const response = await fetch('../json/employers.json');
        const data = await response.json();
        displayData3(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayData3(data) {
    //const container = document.getElementById('menu-list');
    const employersList = document.getElementById('employers-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(employer => {
        const employerDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        employerDiv.classList.add('work-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
        employerDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><a href="http://${employer.url}"><img src="images/${employer.image}" alt="${employer.company}"></a></td>
                                    <td class="col-text">
                                        <h3>${employer.company}</h3>
                                        <p>Role: ${employer.role}</p>
                                        <p>Duration: ${employer.duration}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        //container.appendChild(menuItemDiv);
        employersList.appendChild(employerDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);