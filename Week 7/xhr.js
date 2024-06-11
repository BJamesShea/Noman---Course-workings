document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  // config request
  xhr.open("GET", "./data/data.txt");

  // next steps when data available
  xhr.onload = function () {
    if (this.status === 200) {
      // 200 ok. 404 not found. 500. server problem, 502 bad gateway etc
      document.querySelector(
        "#output"
      ).innerHTML = `The data recieved from data.txt is <strong> ${this.responseText}</strong>`;
    }
  };

  // send request
  xhr.send();
}
