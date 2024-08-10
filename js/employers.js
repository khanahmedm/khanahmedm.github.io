async function fetchJSONData() {
    try {
        const response = await fetch('../json/employers.json');
        const data = await response.json();
        displayEmployers(data);
    } 
    
    catch (error) {
        console.error('Error fetching the JSON data:', error);
    }

    const showMoreLinks = document.querySelectorAll('.show-more');

    showMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const details = this.previousElementSibling;

            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Show Less';
            } else {
                details.style.display = 'none';
                this.textContent = 'Show More';
            }
        });
    });
}

// Function to display JSON data in the HTML
function displayEmployers(data) {
    const employersList = document.getElementById('employers-list');
    
    const table = document.createElement('table');
    table.className = 'table';
    table.classList.add('work-item');
    
    data.forEach(employer => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        imgCell.classList.add('col-img');
        const img = document.createElement('img');
        
        img.src = "images/" + employer.image; // assuming the JSON has an image URL
        img.alt = employer.company;
        img.href = employer.url;
        //img.style.width = '50px'; // adjust as necessary
        //img.style.textAlign = 'center'
        imgCell.appendChild(img);

        const employerCell = document.createElement('td');
        employerCell.classList.add('col-text');
        const heading = document.createElement('h3');
        heading.textContent = employer.company;

        const organization = document.createElement('h4');
        organization.textContent = employer.organization;

        const role = document.createElement('p');
        role.innerHTML = 'Title: <b>' + employer.role + '</b>';
        //role.style.fontWeight = 'bolder'

        const duration = document.createElement('p');
        duration.textContent = 'Duration: ' + employer.duration;

        const location = document.createElement('p');
        location.textContent = 'Location: ' + employer.location;

        const details = document.createElement('p');
        details.textContent = 'Details: ';
        
        const description = document.createElement('ul');
        description.className = 'details';
        //details.innerHTML = "<li> " + employer.description.replace(/\n/g, "<br><br><li>");
        employer.description.forEach(detail => {
            const listItem = document.createElement('li');
            listItem.innerHTML = detail;
            description.appendChild(listItem);
        });
        
        const skills = document.createElement('p');
        //skills.className = 'details'
        skills.innerHTML = '<br><b>Skills:</b> ' + employer.skills;
        description.appendChild(skills);

        const showMore = document.createElement('a');
        showMore.href = '#';
        showMore.className = 'show-more';
        showMore.textContent = 'Show More';
    
        employerCell.appendChild(heading);
        employerCell.appendChild(organization);
        employerCell.appendChild(role);
        employerCell.appendChild(duration);
        employerCell.appendChild(location);
        employerCell.appendChild(details);
        employerCell.appendChild(description);
        //employerCell.appendChild(skills);
        employerCell.appendChild(showMore);

        row.appendChild(imgCell);
        row.appendChild(employerCell);
        table.appendChild(row);
    });

    employersList.appendChild(table);

/*    data.forEach(employer => {
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
                                        <p>Description: <ul class="details"><li> ${employer.description.replace(/\n/g, "<br><br><li>")} </ul></p>
                                        
                                    </td>
                                </tr>
                            </table>
                        `;
        employersList.appendChild(employerDiv);

    });

*/
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);
