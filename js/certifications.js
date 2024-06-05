async function fetchJSONData() {
    try {
        const response = await fetch('../json/certifications.json');
        const data = await response.json();
        displayData7(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayData7(data) {
    //const container = document.getElementById('menu-list');
    const certificationList = document.getElementById('certifications-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(certification => {
        const certificationDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        certificationDiv.classList.add('certification-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
        certificationDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><a href="http://${certification.url}"><img src="images/${certification.image}" alt="${certification.certification}"></a></td>
                                    <td class="col-text">
                                        <h3>Certification: ${certification.certification}</h3>
                                        <p>Issued By: ${certification.issuedBy}</p>
                                        <p>Issue Date: ${certification.issuedDate}</p>
                                        <p>Expiration Date: ${certification.expirationDate}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        //container.appendChild(menuItemDiv);
        certificationList.appendChild(certificationDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);