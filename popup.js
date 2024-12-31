document.addEventListener('DOMContentLoaded', () => {
  const userAgentInput = document.getElementById('userAgentInput');
  const saveButton = document.getElementById('saveButton');
  userAgentInput.value = localStorage.getItem('userAgent') || '';
  saveButton.addEventListener('click', () => {
    localStorage.setItem('userAgent', userAgentInput.value);
    alert('User-Agent enregistré!');
  });
});
