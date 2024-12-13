let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let resultContainer = document.getElementById("resultContainer");
let nameInput = document.getElementById("siteNameInput");
let urlInput = document.getElementById("siteUrlInput");
let createList = document.getElementById("bookmarksList");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let name = nameInput.value;
  let url = urlInput.value;

  if (name === "") {
    siteNameErrMsg.textContent = "Required*";
    siteNameErrMsg.style.color = "red";
  } else {
    siteNameErrMsg.textContent = "";
  }

  if (url === "") {
    siteUrlErrMsg.textContent = "Required*";
    siteUrlErrMsg.style.color = "red";
  } else {
    siteUrlErrMsg.textContent = "";
  }

  if (name !== "" && url !== "") {
    let listItem = document.createElement("li");
    listItem.classList.add("inside-card");
    listItem.classList.add("list-style", "mb-2");
    createList.appendChild(listItem);

    let listHead = document.createElement("h1");
    listHead.textContent = name;
    listHead.classList.add("list-head");
    listItem.appendChild(listHead);

    let listAnchor = document.createElement("a");
    listAnchor.href = url;
    listAnchor.textContent = url;
    listAnchor.setAttribute("target", "_blank");
    listItem.appendChild(listAnchor);
  }
});
