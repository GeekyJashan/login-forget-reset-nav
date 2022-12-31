const form = document.getElementById('reset-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  const oldPassword = document.getElementById('old-password').value;
  const newPassword = document.getElementById('new-password').value;
  
 
  const isValid = validatePassword(oldPassword, newPassword);
  
  
  if (isValid) {
    sendResetPasswordRequest(oldPassword, newPassword);
  } else {
   
    const errorMessage = document.getElementById('error')}})