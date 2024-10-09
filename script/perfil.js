const container = document.getElementById('container-login');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");

});


document.addEventListener('DOMContentLoaded', function() {
    var dialog = document.querySelector("dialog");
    dialog.showModal(); 
  

    var closeBtn = document.getElementById('closePopup');
    closeBtn.addEventListener('click', function() {
      dialog.close();
    });
  });
   