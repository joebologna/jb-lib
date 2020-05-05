const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const rot13table = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

export function getShortMonth() {
  return new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    Date.now()
  );
}

export function encodeRot13(line) {
  let encoded = "";
  for (var c of line) {
    let i = alpha.indexOf(c);
    let rot;
    if (i < 0) rot = c;
    else rot = rot13table[i];
    encoded += rot;
  }
  return encoded;
}

export function genTodaysPassword() {
  return `${encodeRot13(getShortMonth())}(${getShortMonth()})${new Date().getFullYear()}!`
}

export function newPasswd() {
  const toEncode = genTodaysPassword();
  return encodeRot13(toEncode);
}
