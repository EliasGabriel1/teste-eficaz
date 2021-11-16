
// Mascará de quantidade

function mascara(t, mask) {
  var i = t.value.length;
  var saida = mask.substring(1, 0);
  var texto = mask.substring(i);

  if (texto.substring(0, 1) != saida) {
    t.value += texto.substring(0, 1);
  }
}


function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function soLetras(v) {
  return v.replace(/\d/g, ""); //Remove tudo o que não é Letra
}

function soLetrasMA(v) {
  v = v.toUpperCase(); //Maiúsculas
  return v.replace(/\d/g, ""); //Remove tudo o que não é Letra ->maiusculas
}

function soLetrasMI(v) {
  v = v.toLowerCase(); //Minusculas
  return v.replace(/\d/g, ""); //Remove tudo o que não é Letra ->minusculas
}

function soNumeros(v) {
  return v.replace(/\D/g, ""); //Remove tudo o que não é dígito
}
