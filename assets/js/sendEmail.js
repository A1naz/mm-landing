const consultBtn = document.getElementById("consultBtn");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const agreePolicy = document.getElementById("agree-policy-checkbox");
const agreeSubscribe = document.getElementById("agree-subscribe-checkbox");

function closeNotification() {
  var notification = document.querySelector(".notification");
  var errorNotification = document.querySelector(".error-notification");
  notification.classList.remove("active");
  errorNotification.classList.remove("active");
}

function showNotification() {
    closeNotification();
  setTimeout(() => {
    closeNotification();
  }, 4500);
  var notification = document.querySelector(".notification");
  notification.classList.add("active");
}

function showErrorNotification() {
  setTimeout(() => {
    closeNotification();
  }, 4500);
  var notification = document.querySelector(".error-notification");
  notification.classList.add("active");
}

const sendEmail = async (name, phone, email) => {
  try {
    const response = await fetch("https://app.marketmonstr.pro/api/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      mode: "no-cors",
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

consultBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;

  if (!agreePolicy.checked || !agreeSubscribe.checked) {
   
    showErrorNotification();
    return;
  }

  await sendEmail(name, phone, email);
  showNotification();
});
