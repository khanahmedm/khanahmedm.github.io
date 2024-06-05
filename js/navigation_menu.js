async function fetchJSONData() {
    try {
        const response = await fetch('../json/navigation_menu.json');
        const data = await response.json();
        displayData2(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayData2(data) {
    const container = document.getElementById('menu-list');
    container.style.display = 'flex'; // Use flexbox to align items in a single line
    container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    container.style.gap = '5px'; // Add space between items

    data.forEach(menuItem => {
        const menuItemDiv = document.createElement('nav');
        //menuItemDiv.className = 'menuItem';
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.innerHTML = `<a href="${menuItem.href}">${menuItem.name}</a>`;
        container.appendChild(menuItemDiv);
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);