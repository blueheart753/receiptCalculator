const accentChk = document.querySelector("#submit");
const isAccent = (value) => {
  if (value <= 0) {
    alert("1이상으로 입력해주세요!");
    return;
  }

  if (value >= 100) {
    alert("100미만으로 입력해주세요!");
    return;
  }
};
accentChk.addEventListener("click", () => {
  const price = document.querySelector("#Accent").value;
  isAccent(price);
  for (let i = 1; i <= price; i++) {
    const tmp = document.createElement(`div`);
    tmp.innerHTML = `<input type = "number">`;
    document.querySelector(".calculator").append(tmp);
  }
});
// 1회차 마무리 2023 / 03 / 01
