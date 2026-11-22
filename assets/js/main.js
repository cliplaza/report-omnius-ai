/* Report Omnius AI — interazioni leggere */
(function () {
  "use strict";

  /* Menu mobile */
  var burger = document.getElementById("hamburger");
  var menu = document.getElementById("menu-mobile");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var aperto = menu.classList.toggle("aperto");
      burger.setAttribute("aria-expanded", aperto ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("aperto");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Anno nel footer */
  var anno = document.getElementById("anno");
  if (anno) anno.textContent = new Date().getFullYear();

  /* Banner cookie: nessuna statistica finché non si accetta */
  var banner = document.getElementById("banner-cookie");
  var CHIAVE = "roa-consenso";
  if (banner) {
    var salvato = null;
    try { salvato = localStorage.getItem(CHIAVE); } catch (e) { /* storage non disponibile */ }
    if (!salvato) banner.classList.add("visibile");
    var chiudi = function (valore) {
      try { localStorage.setItem(CHIAVE, valore); } catch (e) { /* ignora */ }
      banner.classList.remove("visibile");
    };
    var bAccetta = document.getElementById("accetta-cookie");
    var bRifiuta = document.getElementById("rifiuta-cookie");
    if (bAccetta) bAccetta.addEventListener("click", function () { chiudi("accettato"); });
    if (bRifiuta) bRifiuta.addEventListener("click", function () { chiudi("rifiutato"); });
  }

  /* Modulo contatti: controllo base + protezione spam da campo nascosto.
     Il collegamento all'e-mail del destinatario si configura al deploy
     (vedi README-ISTRUZIONI.md). */
  var form = document.getElementById("form-contatti");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var trappola = form.querySelector('input[name="_website"]');
      if (trappola && trappola.value !== "") return; /* bot: si ignora */
      var campi = ["nome", "officina", "citta", "tel"];
      for (var i = 0; i < campi.length; i++) {
        var el = document.getElementById(campi[i]);
        if (!el || !el.value.trim()) {
          el.focus();
          el.style.borderColor = "#CE2B37";
          return;
        }
      }
      if (!document.getElementById("privacy").checked) {
        document.getElementById("privacy").focus();
        return;
      }
      /* Invio reale da collegare al deploy: per ora conferma a schermo */
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = "Richiesta pronta: ti richiamiamo.";
      btn.disabled = true;
      btn.style.opacity = "0.7";
    });
  }
})();
