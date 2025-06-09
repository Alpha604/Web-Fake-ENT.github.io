const codeadm = "ID = ADM1 mdp = admin CDS = 0000"
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("connecter").addEventListener("click", function () {
    const id = document.getElementById("IDadm").value.trim();
    const mdp = document.getElementById("MDPadm").value.trim();
    const code = document.getElementById("numberInput").value.trim();
    const message = document.getElementById("messageErreur-adm");

    // Masquer le message au départ
    message.style.display = "none";

    // Vérifier les champs
    if (!id || !mdp || !code) {
      message.textContent = "Veuillez remplir tous les champs.";
      message.style.color = "red";
      message.style.display = "block";
      return;
    }

    // Vérifier que le code fait bien 4 chiffres
    if (!/^\d{4}$/.test(code)) {
      message.textContent = "Le code doit contenir exactement 4 chiffres.";
      message.style.color = "red";
      message.style.display = "block";
      return;
    }

    // Identifiants valides (exemples)
    const identifiantsValidés = {
      "adm01": { mdp: "root", code: "1234" },
      "ADM1": { mdp: "admin", code: "0000" }
    };

    if (
      identifiantsValidés[id] &&
      identifiantsValidés[id].mdp === mdp &&
      identifiantsValidés[id].code === code
    ) {
      // Succès
      window.location.href = "admin.html"; // remplace par ta vraie page admin
    } else {
      message.textContent = "Identifiant, mot de passe ou code incorrect.";
      message.style.color = "red";
      message.style.display = "block";
    }
  });
});
