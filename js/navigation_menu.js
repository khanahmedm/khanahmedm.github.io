async function fetchJSONData() {
    try {
        const response = await fetch('../json/navigation_menu.json');
        const data = await response.json();
        displayNavMenu(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Function to display JSON data in the HTML
function displayNavMenu(data) {
    const container = document.getElementById('menu-list');
    container.style.display = 'flex'; // Use flexbox to align items in a single line
    container.style.flexWrap = 'nowrap'; // Ensure items don't wrap to the next line
    container.style.gap = '5px'; // Add space between items

    data.forEach(menuItem => {
        const menuItemDiv = document.createElement('nav');
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.innerHTML = `<a href="${menuItem.href}" class="nav-link">${menuItem.name}</a>`;
        container.appendChild(menuItemDiv);
    });
    // Scroll spy logic goes here AFTER nav links are added
    setupScrollSpy();
}

function setupScrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function onScroll() {
        const scrollPos = window.scrollY + 150; // adjust offset based on header

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${section.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", onScroll);

    // Optional: also allow click to set active link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
}

// Fetch JSON data when the page loads
document.addEventListener('DOMContentLoaded', fetchJSONData);
