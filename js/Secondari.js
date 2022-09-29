addEventListener("load", () => {
  /*Afegeix el codi aquí per posar el valor inicial del control
   * de data a dia d'avui*/
  let dataActual;
});

const saveCookies = () => {
  let dataActual;
  let nom = document.getElementById("name").value;
  let cognom = document.getElementById("surname").value;
  let data = document.getElementById("birthDate").value;

  if ((nom && cognom && data) !== "none") {
    let dataActual = new Date();
    dataActual.setMinutes(dataActual.getMinutes() + 1);
    document.cookie = `name=${nom};expires=${dataActual.toUTCString()}`;
    document.cookie = `surname=${cognom};expires=${dataActual.toUTCString()}`;
    document.cookie = `birthDate=${data};expires=${dataActual.toUTCString()}`;
  }
  window.history.back();
};

const clearCookies = () => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    if (cookie) {
      document.cookie = `${cookie};expires=expires=Thu, 01 Jan 1970 00:00:00 GMT"`;
    }
  }
  window.history.back();
};
