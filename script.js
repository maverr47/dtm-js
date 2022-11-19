var name = prompt("Assalomu alaykum, ismingizni kiriting");
var score = prompt(`${name} aka, imtihonda to'plagan ballingizni kiriting.`);

// <80 yiqilgan
if (score < 80) {
  alert("Afsuski, siz talabalikka tavsiya etilmadingiz.");
}
// 80-100 superKontrakt
else if (score >= 80 && score < 100) {
  var superKontrakt = prompt(
    "Tabriklaymiz! Super-kontrakt asosida talabalikka tavsiya etildingiz. Super-kontrakt to'lovi yiliga 3000$. Kontrakt to'lovi uchun o'zingizda bor pulni kiriting ($da)"
  );
  if (superKontrakt < 3000) {
    alert(
      ` Afsuski, sizni o'qishga qabul qila olmaymiz. O'qish uchun sizga yana ${
        3000 - superKontrakt
      }$ kerak. Sizda bor summa: ${superKontrakt}$.`
    );
  } else {
    alert(
      ` Sizni talabalikka tavsiya etilganingiz bilan yana bir bor tabriklaymiz! Sizda bor summa: ${superKontrakt}$.`
    );
  }
}

// 100-150 kontrakt
else if (score >= 100 && score < 150) {
  var kontrakt = prompt(
    "Tabriklaymiz! Kontrakt asosida talabalikka tavsiya etildingiz. Kontrakt to'lovi yiliga 2000$. Kontrakt to'lovi uchun o'zingizda bor pulni kiriting ($da)"
  );
  if (kontrakt < 2000) {
    alert(
      ` Afsuski, sizni o'qishga qabul qila olmaymiz. O'qish uchun sizga yana ${
        2000 - kontrakt
      }$ kerak. Sizda bor summa: ${kontrakt}$.`
    );
  } else {
    alert(
      ` Sizni (kontrakt asosida) talabalikka tavsiya etilganingiz bilan yana bir bor tabriklaymiz! Sizda bor summa: ${kontrakt}$.`
    );
  }

  // 150-189 grant
} else if (score >= 150 && score <= 189) {
  alert(`Tabriklaymiz siz grant asosida o'qishga qabul qilindingiz!`);
}
