const consultBtn = document.getElementById("consultBtn");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const agreePolicy = document.getElementById("agree-policy-checkbox");
const agreeSubscribe = document.getElementById("agree-subscribe-checkbox");

const consultBtnForm = document.getElementById("consultBtnForm");
const nameInputForm = document.getElementById("nameInputForm");
const phoneInputForm = document.getElementById("phoneInputForm");

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
  }, 7500);
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
    const response = await fetch(
      "https://app.marketmonstr.pro/api/bitrix/addLead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        mode: "no-cors",
        body: JSON.stringify({
          fields: {
            TITLE: "Заявка с лендинга marketmonstr.pro",
            NAME: name,
            EMAIL: [
              {
                VALUE: email,
                VALUE_TYPE: "WORK",
              },
            ],
            PHONE: [
              {
                VALUE: phone,
                VALUE_TYPE: "WORK",
              },
            ],
          },
        }),
      }
    );
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

  if (!name || (!phone && !email)) return;

  await sendEmail(name, phone, email);
  showNotification();
});

consultBtnForm.addEventListener("click", async function (event) {
  event.preventDefault();
  const name = nameInputForm.value;
  const phone = phoneInputForm.value;

  if (!name || !phone) return;

  await sendEmail(name, phone, "");
  showNotification();
});
