async function fetchJSONData() {
    try {
        const response = await fetch('../json/employers.json');
        const data = await response.json();
        displayEmployers(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayEmployers(data) {
    const employersList = document.getElementById('employers-list');
    
    data.forEach(employer => {
        const employerDiv = document.createElement('div');
        employerDiv.classList.add('work-item');
        employerDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><a href="http://${employer.url}"><img src="images/${employer.image}" alt="${employer.company}"></a></td>
                                    <td class="col-text">
                                        <h3>${employer.company}</h3>
                                        <p>Role: <b>${employer.role}</b></p>
                                        <p>Duration: ${employer.duration}</p>
                                        <p>Location: ${employer.location}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        employersList.appendChild(employerDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);