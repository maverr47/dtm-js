var name = prompt("Assalomu alaykum, ismingizni kiriting");
var score = prompt(`${name} aka, imtihonda to'plagan ballingizni kiriting.`);
var superKontrakt = prompt(
  "Tabriklaymiz! Super-kontrakt asosida talabalikka tavsiya etildingiz. Super-kontrakt to'lovi yiliga 3000$. Kontrakt to'lovi uchun o'zingizda bor pulni kiriting ($da)"
);
var restMoney = 3000 - superKontrakt;
var kontrakt = prompt(
  "Tabriklaymiz! Kontrakt asosida talabalikka tavsiya etildingiz. Kontrakt to'lovi yiliga 2000$. Kontrakt to'lovi uchun o'zingizda bor pulni kiriting ($da)"
);
var restMoneyKontrakt = 2000 - kontrakt;

name;
score;
// <80
if (score < 80) {
  console.log("Afsuski, siz talabalikka tavsiya etilmadingiz.");
}
// 80-100
else if ((score >= 80, score < 100)) {
  superKontrakt;
  if (superKontrakt < 3000) {
    console.log(
      ` Afsuski, sizni o'qishga qabul qila olmaymiz. O'qish uchun sizga yana ${restMoney}$ kerak. Sizda bor summa: ${superKontrakt}$.`
    );
  } else {
    console.log(
      ` Sizni talabalikka tavsiya etilganingiz bilan yana bir bor tabriklaymiz! Sizda bor summa: ${superKontrakt}$.`
    );
  }
}

// 100-150
else if ((score >= 100, score < 150)) {
  kontrakt;
  if (kontrakt < 2000) {
    console.log(
      ` Afsuski, sizni o'qishga qabul qila olmaymiz. O'qish uchun sizga yana ${restMoneyKontrakt}$ kerak. Sizda bor summa: ${kontrakt}$.`
    );
  } else {
    console.log(
      ` Sizni (kontrakt asosida) talabalikka tavsiya etilganingiz bilan yana bir bor tabriklaymiz! Sizda bor summa: ${kontrakt}$.`
    );
  }
} else if ((score >= 150, score <= 189)) {
  console.log(`Tabriklaymiz siz grant asosida o'qishga qabul qilindingiz!`);
}
