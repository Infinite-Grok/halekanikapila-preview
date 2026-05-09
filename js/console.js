const tile = document.getElementById('add-event-tile');
const modal = document.getElementById('add-event-modal');
const close = document.getElementById('modal-close');

tile.addEventListener('click', () => modal.classList.add('is-open'));
close.addEventListener('click', () => modal.classList.remove('is-open'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('is-open');
});
