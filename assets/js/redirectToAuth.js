document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Отключаем стандартное поведение ссылки

  const referralCode = localStorage.getItem("referralCode");
  let targetUrl = "https://app.marketmonstr.pro";

  console.log(referralCode);
  if (referralCode) {
    targetUrl = `https://app.marketmonstr.pro/register?ref=${referralCode}`;
  }

  window.location.href = targetUrl;
});
