// projeto calorias

// Armazenamento de calorias da semana
let semana = {
  segunda: 0,
  terça: 0,
  quarta: 0,
  quinta: 0,
  sexta: 0,
  sabado: 0,
  domingo: 0
};

// Dias da semana
let dias = [
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
  "domingo"
];


  function atualizarTela() {
  document.getElementById("segunda").textContent = semana.segunda;
  document.getElementById("terca").textContent = semana["terça"];
  document.getElementById("quarta").textContent = semana.quarta;
  document.getElementById("quinta").textContent = semana.quinta;
  document.getElementById("sexta").textContent = semana.sexta;
  document.getElementById("sabado").textContent = semana.sabado;
  document.getElementById("domingo").textContent = semana.domingo;

  let total = Object.values(semana).reduce(
    (soma, valor) => soma + valor,
    0
  );

  document.getElementById("totalSemanal").textContent = total;
}

let btnAdicionar = document.getElementById("btnAdicionar");
let btnRemover = document.getElementById("btnRemover");

btnAdicionar.addEventListener("click", function () {
  let dia = document.getElementById("dia").value;

  let calorias = Number(
    document.getElementById("calorias").value
  );

  if (isNaN(calorias) || calorias <= 0) {
    alert("Digite um valor válido.");
    return;
  }

  semana[dia] += calorias;

  atualizarTela();

  document.getElementById("calorias").value = "";
});


btnRemover.addEventListener("click", function () {
  let dia = document.getElementById("dia").value;

  let calorias = Number(
    document.getElementById("calorias").value
  );

  if (isNaN(calorias) || calorias <= 0) {
    alert("Digite um valor válido.");
    return;
  }

  if (calorias > semana[dia]) {
    alert("Não é possível remover mais calorias do que já existem.");
    return;
  }

  semana[dia] -= calorias;

  atualizarTela();

  document.getElementById("calorias").value = "";
});

atualizarTela();
