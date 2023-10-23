const team = document.querySelector('.team');
const teamList = team.querySelector('.team__list');
const teamListButton = team.querySelector('.team__button');

teamListButton.addEventListener('click', () => {
    teamList.classList.remove('team-list--collapsed');
    teamListButton.classList.add('team__button--clicked');
});
