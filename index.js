const content = document.getElementById('content');
const header = document.getElementById('banner-child-1')
const footer = document.getElementById('footy')

async function loadProjects() {
    content.innerHTML = '';
    const projectMain = await getProjectHTML()
    content.innerHTML = projectMain
}

async function getProjectHTML() {
    const url = './resume.html';
    let response = await fetch(url);
    return response.text();
}

async function loadHeader() {
    header.innerHTML = '';
    const headerHTML = await getHeaderHTML();
    header.innerHTML = headerHTML;
}

async function getHeaderHTML() {
    const url = './header.html';
    let response = await fetch(url);
    return response.text();
}

async function loadFooter() {
    footer.innerHTML = '';
    const footerHTML = await getFooterHTML()
    footer.innerHTML = footerHTML
}

async function getFooterHTML() {
    const url = './footer.html';
    let response = await fetch(url);
    return response.text();
}