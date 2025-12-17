// регистрация
function register() {
  const name = document.getElementById('name')?.value;
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;

  if (!name || !email || !password) {
    alert('Заполни все поля');
    return;
  }

  const user = {
    name,
    email
  };

  localStorage.setItem('user', JSON.stringify(user));

  // переход на главный экран
  window.location.href = 'pages/home.html';
}

// выход
function logout() {
  localStorage.removeItem('user');
  window.location.href = '../index.html';
}

// проверка авторизации
function isAuthenticated() {
  return localStorage.getItem('user') !== null;
}
