const root = document.documentElement;
const settings = document.querySelectorAll('input');

function handleChange() {
  console.log('handle change');
  const suffix = this.dataset.unit || '';

  root.style.setProperty(`--${this.id}`, `${this.value}${suffix}`);
}

settings.forEach(el => el.addEventListener('change', handleChange));
settings.forEach(el => el.addEventListener('mousemove', handleChange));
