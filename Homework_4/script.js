// Задание 1

document.addEventListener('DOMContentLoaded', function() {
  const userList = document.getElementById('user-list');

  async function getUsers() {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching users:', error);
      }
  }

  function renderUsers(users) {
      userList.innerHTML = '';
      users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = user.name;
          userList.appendChild(li);
      });
  }

  async function loadUsers() {
      const users = await getUsers();
      if (users) {
          renderUsers(users);
      }
  }

  loadUsers();
});

document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('user-list');

    async function getUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    function renderUsers(users) {
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    loadUsers();
                } else {
                    console.error('Error deleting user:', response.status);
                }
            });
            
            li.appendChild(deleteButton);
            userList.appendChild(li);
        });
    }
})