const members = document.querySelectorAll('.member');

members.forEach(member => {
  member.addEventListener('click', () => {
    if (member.classList.contains('clicked')) {
      member.classList.remove('clicked');
    } else {
      members.forEach(m => m.classList.remove('clicked'));
      member.classList.add('clicked');
    }
  });
});