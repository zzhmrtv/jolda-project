document.addEventListener('DOMContentLoaded', () => {
  // защита страниц
  if (!isAuthenticated()) {
    window.location.href = '../index.html';
    return;
  }

  const user = JSON.parse(localStorage.getItem('user'));

  // приветствие на главном экране
  const welcome = document.getElementById('welcome');
  if (welcome && user) {
    welcome.innerText = `Добро пожаловать, ${user.name}`;
  }
});
