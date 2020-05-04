function godineUDanima() {
  var godiste = prompt("Uneiste vase godiste");
  var godineUDanima = (2020 - godiste) * 365;
  var h1 = document.createElement("h1");
  var tekst = document.createTextNode(
    "Vi ste zivjeli " + godineUDanima + " dana"
  );
  h1.setAttribute("id", "rez");
  h1.appendChild(tekst);
  document.getElementById("rez").appendChild(h1);
}

function remove() {
  document.getElementById("rez").remove();
}

function klikniZaMacu() {
  var image = document.createElement("img");
  var div = document.getElementById("maca");
  image.src = "https://cdn2.thecatapi.com/images/2JgKj4y4B.jpg";
  div.appendChild(image);
}

let covjek;
let robot;
let poruka;
let rez;

function pkm(tvojOdabir) {
  odabirRobota();
  covjek = tvojOdabir.id;

  dobijRez(covjek, robot);
  ispisiPoruku(rez);
  konacnaPoruka(poruka);

  console.log(covjek);
  console.log(robot);

  sacuvaj(covjek, robot);

  console.log(rez);
  console.log(poruka);
}

function konacnaPoruka(poruka) {
  var divT = document.createElement("div");
  console.log(poruka);
  divT.innerHTML = "<h1>" + poruka + "</h1>";
  document.getElementById("tekst").appendChild(divT);
}

function sacuvaj(covjek, robot) {
  var images = {
    kamen: document.getElementById("kamen").src,
    papir: document.getElementById("papir").src,
    makaze: document.getElementById("makaze").src,
  };

  document.getElementById("papir").remove();
  document.getElementById("kamen").remove();
  document.getElementById("makaze").remove();

  var divH = document.createElement("div");
  var divR = document.createElement("div");

  //c = "<img src = '" + tvojOdabir.src + "'>";
  //r = "<img src = '" + document.getElementById(robot).src + "'>";

  divH.innerHTML = "<img src='" + images[covjek] + "'>";
  divR.innerHTML = "<img src='" + images[robot] + "'>";

  document.getElementById("covjek").appendChild(divH);
  document.getElementById("robot").appendChild(divR);
}

function odabirRobota() {
  robot = Math.floor(Math.random() * 3);
  if (robot == 0) {
    robot = "makaze";
  } else if (robot == 1) {
    robot = "kamen";
  } else {
    robot = "papir";
  }
}

function dobijRez(covjek, robot) {
  if (covjek == "papir" && robot == "kamen") {
    rez = covjek;
  } else if (covjek == "kamen" && robot == "makaze") {
    rez = covjek;
  } else if (covjek == "makaze" && robot == "papir") {
    rez = covjek;
  } else if (covjek == robot) {
    rez = "remi";
  } else {
    rez = robot;
  }
}

function ispisiPoruku(rez) {
  if (covjek == rez) {
    poruka = "Pobjedili ste";
  } else if (robot == rez) {
    poruka = "Izgubili ste";
  } else {
    poruka = "Remi..";
  }
}

let svaDugmadi = document.getElementsByTagName("button");
let svaDugmadi_Pohranjena = [];
let colors = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

for (let index = 0; index < svaDugmadi.length; index++) {
  svaDugmadi_Pohranjena.push(svaDugmadi[index].classList[1]);
}

console.log(svaDugmadi_Pohranjena);
console.log(svaDugmadi);

function buttonColorChange(obj) {
  if (obj.value === "green") {
    promjeniUZeleno();
  }
  if (obj.value === "red") {
    promjeniUCrveno();
  }
  if (obj.value === "reset") {
    reset();
  }
  if (obj.value === "random") {
    random();
  }
}

function promjeniUZeleno() {
  for (let index = 0; index < svaDugmadi.length; index++) {
    svaDugmadi[index].classList.remove(svaDugmadi[index].classList[1]);
    svaDugmadi[index].classList.add("btn-success");
  }
}

function promjeniUCrveno() {
  for (let index = 0; index < svaDugmadi.length; index++) {
    svaDugmadi[index].classList.remove(svaDugmadi[index].classList[1]);
    svaDugmadi[index].classList.add("btn-danger");
  }
}

function reset() {
  for (let index = 0; index < svaDugmadi.length; index++) {
    svaDugmadi[index].classList.remove(svaDugmadi[index].classList[1]);
    svaDugmadi[index].classList.add(svaDugmadi_Pohranjena[index]);
  }
}

function random() {
  for (let index = 0; index < svaDugmadi.length; index++) {
    let randomBroj = Math.floor(Math.random() * 4);
    svaDugmadi[index].classList.remove(svaDugmadi[index].classList[1]);
    svaDugmadi[index].classList.add(colors[randomBroj]);
  }
}
