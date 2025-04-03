const API_URL = "http://backend:3000";  // Use Docker service name

async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) throw new Error("Failed to fetch users");

        const users = await response.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email})`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
