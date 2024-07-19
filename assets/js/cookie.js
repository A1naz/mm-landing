const modal = document.getElementById("cookie-popup");
const acceptButton = document.getElementById("accept-cookie");
const declineButton = document.getElementById("decline-cookie");

// Создаем новое событие KeyboardEvent
var escEvent = new KeyboardEvent("keydown", {
  key: "Escape",
  keyCode: 27,
  code: "Escape",
  which: 27,
  bubbles: true,
  cancelable: true,
});

function hideModal() {
  document.dispatchEvent(escEvent);
}

acceptButton.onclick = function () {
  document.dispatchEvent(escEvent);
};
