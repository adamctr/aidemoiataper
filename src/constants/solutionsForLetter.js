import { showKeyTemp } from "./keySep.js";

const solutionsForLetter = {
  "@": `Appuyer en même temps sur les touches ${showKeyTemp(
    "Alt Gr"
  )} et ${showKeyTemp(`0 à,@`)}`,
  " ": `Appuyer sur la barre espace ${showKeyTemp(
    " "
  )}, qui est la plus  longue barre, situé tout au milieu, 
   tout en bas du clavier.`, // Barre Espace
  backspace: `Appuyer sur la touche Effacer ${showKeyTemp(
    "backspace"
  )}. Elle se trouve au dessus de la touche Entrer ${showKeyTemp("enter")}`,
  enter: `Appuyer sur la touche Entrer ${showKeyTemp(
    "enter"
  )} pour valider la saisie`,
  1: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`1 &`)}`,
  2: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`2 é,~`)}`,
  3: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`3 ",#`)}`,
  4: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`4 ',{`)}`,
  5: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp("5 (,[")}`,
  6: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`6 _,|`)}`,
  7: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp("7 è,`")}`,
  8: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`8 _,\ `)}`,
  9: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`9 ç,^`)}`,
  0: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`0 à,@`)}`,
  é: `Appuyer sur la touche ${showKeyTemp("2 é,~")}`,
  è: `Appuyer sur la touche ${showKeyTemp("7 è,`")}`,
  à: `Appuyer sur la touche ${showKeyTemp("0 à,@")}`,
  "-": `Appuyer sur la touche ${showKeyTemp("6 -,|")}`,
  _: `Appuyer sur la touche ${showKeyTemp(`8 _,\ `)}`,
  "!": `Appuyer sur la touche ${showKeyTemp(
    `§ !`
  )} qui se trouve en haut à droite de la barre espace ${showKeyTemp(" ")}`,
  "?": `Appuyer sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(
    "? ,"
  )} qui se trouve en haut à droite de la barre espace`,
  ".": `Appuyer sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(
    ". ;"
  )} qui se trouve en haut à droite de la barre espace`,
  ",": `Appuyer sur la touche ${showKeyTemp(
    "? ,"
  )} qui se trouve en haut à droite de la barre espace ${showKeyTemp(" ")}`,
  â: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("a")}`,
  ê: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("e")}`,
  î: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("i")}`,
  ô: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("o")}`,
  û: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("u")}`,
  "'": `Appuyer sur la touche ${showKeyTemp("4 ',{")}`,
  ç: `Appuyer sur la touche ${showKeyTemp("9 ç,^")}`,
  A: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`A`)}`,
  B: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`B`)}`,
  C: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`C`)}`,
  D: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`D`)}`,
  E: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`E`)}`,
  F: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`F`)}`,
  G: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`G`)}`,
  H: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`H`)}`,
  I: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`I`)}`,
  J: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`J`)}`,
  K: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`K`)}`,
  L: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`L`)}`,
  M: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`M`)}`,
  N: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`N`)}`,
  O: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`O`)}`,
  P: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`P`)}`,
  Q: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`Q`)}`,
  R: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`R`)}`,
  S: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`S`)}`,
  T: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`T`)}`,
  U: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`U`)}`,
  V: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`V`)}`,
  W: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`W`)}`,
  X: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`X`)}`,
  Y: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`Y`)}`,
  Z: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`Z`)}`,
};

export { solutionsForLetter };
