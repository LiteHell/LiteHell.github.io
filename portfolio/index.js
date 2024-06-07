let toggleLink = document.querySelector('.toggle-minor');
toggleLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    let html = document.documentElement;
    if (html.classList.contains('minor-projects-hidden')) {
        toggleLink.textContent = '모든 프로젝트만 표시됩니다. 중요한 프로젝트를 표시하려면 여기를 누르세요.';
        html.classList.remove('minor-projects-hidden');
    } else {
        toggleLink.textContent = '중요한 프로젝트만 표시됩니다. 모든 프로젝트를 표시하려면 여기를 누르세요.';
        html.classList.add('minor-projects-hidden');
    }
})