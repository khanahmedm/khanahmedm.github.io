async function fetchJSONData() {
    try {
        const response = await fetch('../json/certifications.json');
        const data = await response.json();
        displayCertification(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayCertification(data) {
    const certificationList = document.getElementById('certifications-list');
    
    data.forEach(certification => {
        if (certification.show && certification.show.toLowerCase() === "yes") {
            const certificationDiv = document.createElement('div');
            certificationDiv.classList.add('certification-item');
            certificationDiv.innerHTML = `
                                <table>
                                    <tr>
                                        <td class="col-img"><a href="http://${certification.url}"><img src="images/${certification.image}" alt="${certification.certification}"></a></td>
                                        <td class="col-text">
                                            <h3>${certification.certification}</h3>
                                            <p>Issued By: ${certification.issuedBy}</p>
                                            <p>Issue Date: ${certification.issuedDate}</p>
                                            <p>Expiration Date: ${certification.expirationDate}</p>
                                        </td>
                                    </tr>
                                </table>
                            `;
            certificationList.appendChild(certificationDiv);            
        }
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);