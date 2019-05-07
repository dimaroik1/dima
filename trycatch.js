function Error (m){
  this.name = "Error";
  this.massage = m;
}
try {
  var c=0;
  for (;;) {
    c+=1;
    console.log (c);
    if (c == 1000) throw new Error("нескінченний цикл");
  }
} catch (e) {
  alert(e.name + ': ' + e.massage);
} finally {
  console.log ( "Programa zavershulas");
}
