// Define an async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Select container

    try {
        const response = await fetch(apiUrl); // Fetch data
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const users = await response.json(); // Convert to JSON
        dataContainer.innerHTML = ''; // Clear "Loading user data..."

        const userList = document.createElement('ul'); // Create <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li>
            listItem.textContent = user.name; // Set text to user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        dataContainer.appendChild(userList); // Append <ul> to the container
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.'; // Error message
        console.error('Error fetching user data:', error);
    }
}

// Ensure script runs after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
