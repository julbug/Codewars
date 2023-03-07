// DESCRIPTION:
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

//My Solution:
function nerdify(txt) {
    txt = txt.replace(/[aA]/g, "4");
    txt = txt.replace(/[eE]/g, "3");
    txt = txt.replace(/[l]/g, "1");
    return txt;
  }

  //Cleaner Solution:
  const nerdify = txt =>
  txt.replace(/a/gi, `4`).replace(/e/gi, `3`).replace(/l/g, `1`);