const buttons = document.querySelectorAll('[data-filter]');
const search = document.querySelector('#project-search');
const cards = [...document.querySelectorAll('.project-card')];
const empty = document.querySelector('#empty-state');
let selected = 'All';
function update() {
  const query = (search?.value || '').toLocaleLowerCase('en').trim();
  let visible = 0;
  for (const card of cards) {
    const show = (selected === 'All' || card.dataset.type === selected) && (card.dataset.search || '').includes(query);
    card.hidden = !show;
    if (show) visible++;
  }
  if (empty) empty.hidden = visible !== 0;
}
buttons.forEach(button => button.addEventListener('click', () => {
  selected = button.dataset.filter;
  buttons.forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  update();
}));
search?.addEventListener('input', update);
