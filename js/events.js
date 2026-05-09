document.querySelectorAll('.hk-event').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('is-open'));
});
