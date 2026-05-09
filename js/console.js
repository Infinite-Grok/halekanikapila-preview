function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('is-open');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('is-open');
}
document.querySelectorAll('.hk-modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('is-open');
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.hk-modal.is-open').forEach(m => m.classList.remove('is-open'));
  }
});
