const darkToggle = document.getElementById('darkToggle');

// checking the local to see if darkmode was click on 
if (localStorage.getItem('darkMode') === 'on') {
    // if yes then apply dark mode 
  document.body.classList.add('dark');
}

// listening for user to click button
darkToggle.addEventListener('click', function () {

    // toggle to remove or add dark 
  document.body.classList.toggle('dark');

  // checking if darkmode is on 
  if (document.body.classList.contains('dark')) {
    // if yes store in local stoage as on 
    localStorage.setItem('darkMode', 'on');
  } else {
    // no store in local as off 
    localStorage.setItem('darkMode', 'off');
  }
});
