const content = document.getElementById('content');
const menu = document.getElementById('menu')
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

async function loadMenu() {
    menu.innerHTML = '';
    const menuHTML = await getMenuHTML();
    menu.innerHTML = menuHTML;
}

async function getMenuHTML() {
    const url = './menu.html';
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