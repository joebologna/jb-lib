var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var rot13table = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

var tHandle;

function getShortMonth() {
  return new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    Date.now()
  );
}

function encodeRot13(line) {
  var encoded = "";
  for (var c of line) {
    var i = alpha.indexOf(c);
    var rot;
    if (i < 0) rot = c;
    else rot = rot13table[i];
    encoded += rot;
  }
  return encoded;
}

function genTodaysPassword() {
  return `${encodeRot13(getShortMonth())}(${getShortMonth()})${new Date().getFullYear()}!`
}

function updatePW(event) {
  var pw = document.getElementById("pw");
  var toEncode = document.getElementById("encode").value;
  pw.innerText = encodeRot13(toEncode + String.fromCharCode(event.charCode));
  pw.style.visibility = "visible";
}

function showPW() {
  var pw = document.getElementById("pw");
  var toEncode = document.getElementById("encode").value;
  if (tHandle) {
    pw.style.visibility = "hidden";
    pw.innerHTML = "&nbsp;";
    clearTimeout(tHandle);
    tHandle = undefined;
  } else {
    // var toEncode = genTodaysPassword();
    document.title = toEncode;
    pw.innerText = encodeRot13(toEncode);
    pw.style.visibility = "visible";
    tHandle = setTimeout(() => {
      pw.style.visibility = "hidden";
      pw.innerHTML = "&nbsp;";
    }, 5000);
  }
}
