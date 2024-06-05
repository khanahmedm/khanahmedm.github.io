async function fetchJSONData() {
    try {
        const response = await fetch('../json/trainings.json');
        const data = await response.json();
        displayData6(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayData6(data) {
    //const container = document.getElementById('menu-list');
    const trainingList = document.getElementById('trainings-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(training => {
        const trainingDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        trainingDiv.classList.add('training-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
        trainingDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><a href="http://${training.url}"><img src="images/${training.image}" alt="${training.school}"></a></td>
                                    <td class="col-text">
                                        <h3>${training.school}</h3>
                                        <p>Courses:<b> ${training.courses} </b></p>
                                        <p>Duration: ${training.duration}</p>
                                        <p>Location: ${training.location}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        //container.appendChild(menuItemDiv);
        trainingList.appendChild(trainingDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);