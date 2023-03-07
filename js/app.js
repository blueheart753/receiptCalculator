const accentChk = document.querySelector('#submit');

accentChk.addEventListener('click', () => {
  const price = document.querySelector('#Accent').value;
  for (let i = 1; i <= price; i++) {
    const tmp = document.createElement(`div`);
    tmp.innerHTML = `<input type = "number">`;
    document.querySelector('.calculator').append(tmp);
  }
});
// 1회차 마무리 2023 / 03 / 01
