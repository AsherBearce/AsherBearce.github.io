// parse the projects
$(document).ready(function() {
    loadProjects();
});

function loadProjects() {
    let element = '';

    for(let p in projects) {
        element +=
        `<a href="./project.html?${p.replace(/ /g, "_")}" class="project column">
            <h2 class="project-name">${p}</h2>
            <p class="project-desc">${projects[p].desc}</p>
        </a>`
    }

    $('.projects').append(element);
}