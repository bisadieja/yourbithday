const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const sidebarInfoMore = document.querySelector('.sidebar-info_more');
sidebarBtn.addEventListener('click', function () {
  sidebarInfoMore.classList.toggle('active');
  const icon = sidebarBtn.querySelector('ion-icon');
  if (sidebarInfoMore.classList.contains('active')) {
    sidebarBtn.querySelector('span').textContent = 'Hide Contacts';
    icon.setAttribute('name', 'chevron-up');
  } else {
    sidebarBtn.querySelector('span').textContent = 'Show Contacts';
    icon.setAttribute('name', 'chevron-down');
  }
});
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('article[data-page]');
navLinks.forEach((link, idx) => {
  link.addEventListener('click', function () {
    // Hapus active di semua link & page
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    pages[idx].classList.add('active');
  });
});
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');
const form = document.querySelector('[data-form]');
function checkForm() {
  let filled = true;
  formInputs.forEach(input => {
    if (!input.value.trim()) filled = false;
  });
  formBtn.disabled = !filled;
}
formInputs.forEach(input => {
  input.addEventListener('input', checkForm);
});
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
    form.reset();
    formBtn.disabled = true;
  });
}
