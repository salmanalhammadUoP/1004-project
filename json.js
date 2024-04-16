function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    const registrationData = {
      name: name,
      email: email
    };
  
    const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
  
    
    existingRegistrations.push(registrationData);
  
    // Save 
    localStorage.setItem('registrations', JSON.stringify(existingRegistrations));
  
    // CLEAR
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }