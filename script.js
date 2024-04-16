document.addEventListener('DOMContentLoaded', function() {
    const headerText = document.querySelector('header .main');

    function loadContent(page) {
        headerText.style.display = 'none';

      
        const sectionIds = ['sports', 'tourism', 'history', 'entertainment', 'register'];

        
        sectionIds.forEach(sectionId => {
            const contentContainer = document.getElementById(`${sectionId}-content`);
            if (sectionId === page) {
                
                if (page === 'register') {
                    // Display registration form
                    contentContainer.innerHTML = `
                        <h2>${page.charAt(0).toUpperCase() + page.slice(1)}</h2>
                        <form id="registrationForm" onsubmit="register(); return false;">
                            <label for="name">Name:</label>
                            <input type="text" id="name" required><br>
                            <label for="email">Email:</label>
                            <input type="email" id="email" required><br>
                            <button type="submit">Register</button>
                        </form>
                        <div id="registrationMessage"></div>
                    `;
                } else {
                    // Load contents
                    contentContainer.innerHTML = `
                        <h2>${page.charAt(0).toUpperCase() + page.slice(1)}</h2>
                        <p>This is the ${page} page content.</p>
                    `;
                }
                contentContainer.style.display = 'block'; 
            } else {
                // Hide content 
                contentContainer.innerHTML = ''; 
                contentContainer.style.display = 'none'; 
            }
        });
    }

    function register() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const registrationData = {
            name: name,
            email: email
        };

    
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

        // confirmation message
        const registrationMessage = document.getElementById('registrationMessage');
        registrationMessage.textContent = 'Registration successful!';
    }

    
    const initialPage = window.location.hash.slice(1);
    if (initialPage) {
        loadContent(initialPage);
    }

    document.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', function(event) {
            const page = this.getAttribute('href').substring(1); //FROM HREF
            loadContent(page);
        });
    });
});