document.addEventListener('DOMContentLoaded', function() {
    fetch('../json/projects.json')
        .then(response => response.json())
        .then(data => {
            displayProjects(data);
        })
        .catch(error => console.error('Error fetching projects:', error));
});

function displayProjects(projects) {
    var projectsContainer = document.getElementById('projects-container');

    projects.forEach(function(project) {
        var tile = document.createElement('div');
        tile.classList.add('project-tile');

        var diagram = document.createElement('div');
        diagram.classList.add('project-diagram');
        diagram.innerHTML = "<img src='images/" + project.diagram_image + "'>";

        var title = document.createElement('div');
        title.classList.add('project-title');
        title.textContent = project.project;

        var client = document.createElement('div');
        client.classList.add('project-client');
        client.textContent = project.client;

        var year = document.createElement('div');
        year.classList.add('project-year');
        year.textContent = project.year;

        tile.appendChild(diagram);
        tile.appendChild(title);
        tile.appendChild(client);
        tile.appendChild(year);

        tile.addEventListener('click', function() {
            openModal(project);
        });

        projectsContainer.appendChild(tile);
    });
}

function openModal(project) {
    var modalContainer = document.getElementById('modal-container');

    var modal = document.createElement('div');
    modal.classList.add('modal');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    var closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    var modalTitle = document.createElement('h2');
    modalTitle.innerHTML = project.project + "<img class='logo' src='images/" + project.image + "'>";

    var modalClient = document.createElement('p');
    modalClient.innerHTML = "Client: <b>" + project.client + "</b>";

    var modalDetails = document.createElement('p');
    modalDetails.innerHTML = "Details: <ul><li> " + project.description.replace(/\n/g, "<br><br><li>") + "</ul>";

    var modalArchitecture = document.createElement('p');
    modalArchitecture.innerHTML = "<iframe src='html/" + project.diagram + "' width='100%' height='700px' frameborder='0'></iframe>"



    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalClient);
    modalContent.appendChild(modalDetails);
    modalContent.appendChild(modalArchitecture);
    modal.appendChild(modalContent);

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    modalContainer.innerHTML = ''; // Clear previous content
    modalContainer.appendChild(modal);

    //modal.style.display = 'block';
    modal.style.display = 'flex';
}
