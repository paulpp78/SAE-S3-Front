document.addEventListener('DOMContentLoaded', function () {
  const addHeader = document.querySelector('.addHeader');
  const addFooter = document.querySelector('.addFooter');
  fetch('./header/header.html')
    .then((response) => response.text())
    .then((data) => {
      addHeader.innerHTML = data;
    });

  fetch('./footer/footer.html')
    .then((response) => response.text())
    .then((data) => {
      addFooter.innerHTML = data;
    });
});
