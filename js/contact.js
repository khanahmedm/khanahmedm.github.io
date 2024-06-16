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
    //const container = document.getElementById('menu-list');
    const contactList = document.getElementById('contact-list');
    //container.style.display = 'flex'; // Use flexbox to align items in a single line
    //container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    //container.style.gap = '5px'; // Add space between items

    data.forEach(contact => {
        const contactDiv = document.createElement('div');
        //menuItemDiv.className = 'menuItem';
        //workItemDiv.classList.add('menuItem');
        contactDiv.classList.add('contact-item');
        //menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
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
        //container.appendChild(menuItemDiv);
        contactList.appendChild(contactDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);