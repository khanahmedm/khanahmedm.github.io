async function fetchJSONData() {
    try {
        const response = await fetch('../json/schools.json');
        const data = await response.json();
        displaySchools(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displaySchools(data) {
    const schoolList = document.getElementById('schools-list');
    
    data.forEach(school => {
        const schoolDiv = document.createElement('div');
        schoolDiv.classList.add('school-item');
        schoolDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><a href="http://${school.url}"><img src="images/${school.image}" alt="${school.school}"></a></td>
                                    <td class="col-text">
                                        <h3>${school.school}</h3>
                                        <p>Degree: <b>${school.degree}</b></p>
                                        <p>Courses: ${school.courses}</p>
                                        <p>Duration: ${school.duration}</p>
                                        <p>Location: ${school.location}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        schoolList.appendChild(schoolDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);