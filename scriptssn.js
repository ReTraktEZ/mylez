const members = document.querySelectorAll('.member');

members.forEach(member => {
  member.addEventListener('click', () => {
    members.forEach(m => m.classList.remove('clicked'));
    member.classList.add('clicked');
  });
});
