async function fetchJSONData() {
    try {
        const response = await fetch('../json/trainings.json');
        const data = await response.json();
        displayTrainings(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayTrainings(data) {
    const trainingList = document.getElementById('trainings-list');
    
    data.forEach(training => {
        const trainingDiv = document.createElement('div');
        trainingDiv.classList.add('training-item');
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
        trainingList.appendChild(trainingDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);