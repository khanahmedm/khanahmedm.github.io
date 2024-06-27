async function fetchJSONData() {
    try {
        const response = await fetch('../json/contact.json');
        const data = await response.json();
        displayContact(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayContact(data) {
    const contactList = document.getElementById('contact-list');
    
    data.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact-item');
        contactDiv.innerHTML = `
                            <table>
                                <tr>
                                    <td class="col-img"><img src="images/${contact.image}" alt="${contact.contactMethod}"></td>
                                    <td class="col-text">
                                        <p>${contact.contact}</p>
                                    </td>
                                </tr>
                            </table>
                        `;
        contactList.appendChild(contactDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);