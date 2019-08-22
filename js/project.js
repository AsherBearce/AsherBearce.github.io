$(document).ready(function() {
    let name = getProjectName();
    loadProject(name);
    loadTopBar(name);
    getScrollInfo();
});

$(window).on('scroll', () => {
    this.getScrollInfo();
});

function getProjectName() {
    let url = document.location.href;
    let params = url.split('?')[1];
    return params;
}

function loadProject(projectName) {
    let projectData = projects[projectName.replace(/_/g, " ")];
    let projectInfo =
    `<div class="header">
        <div class="row">
            <h1>${projectName.replace(/_/g, " ")}</h1>
            <div style="flex: 1"></div>
            <a href="${projectData.github}" class="url-reference">
                <i class="fa fa-github" aria-hidden="true"></i>     
            </a>
        </div>
        <h3 class="datetime">${projectData.date} • Made by ${projectData.creator}</h3>
        <p class="breif-overview">
            ${projectData.shortDesc}
        </p>
    </div>
    <div class="project-details">

    </div>`;

    let projectDetails = '';

    projectData['longDesc'].forEach(item => {
        // images start with http || https
        if(/http/.test(item) || item.startsWith("Screenshots")) {
            // it's an image
            projectDetails +=
            `<img src="${item}">`;
        } else {
            projectDetails +=
            `<p class="para">${item}</p>`;
        }
    });

    $('.main').append(projectInfo);
    $('.project-details').append(projectDetails);
}

function loadTopBar(projectName) {
    let topBar = '';

    for(t in topBarTabs) {
        topBar +=
        `<a href="${topBarTabs[t].url}" class="tab">
            <h2>${topBarTabs[t].name}</h2>
        </a>`;
    }

    topBar +=
    `<a class="tab selected">
        <h2>${projectName.replace(/_/g, " ")}</h2>
    </a>`;

    console.log('dfkj', $('.top-bar').outerHeight());

    $('.top-bar').append(topBar).css({'top': '-47px'});

    setTimeout(function() {
        $('.top-bar').css({'transition-duration': '0.2s'});
    }, 10);

}

function getScrollInfo() {
    let prevPos = 0;
    let newPos = window.scrollY;

    if(newPos > 100) {
        $('.top-bar').css({'top': '0px'});
    } else {
        $('.top-bar').css({'top': '-' + $('.top-bar').outerHeight() + 'px'});
    }

    prevPos = newPos;
}