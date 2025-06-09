const codeeleve = "ID = eleve123 mdp = mdp123"
document.getElementById("coeleve").addEventListener("click", function () {
  const id = document.getElementById("IDeleve").value.trim();
  const mdp = document.getElementById("MDPeleve").value.trim();
  const message = document.getElementById("messageErreur");

  // Masquer le message au départ
  message.style.display = "none";

  // Vérifier les champs
  if (!id || !mdp) {
    message.textContent = "Veuillez remplir tous les champs.";
    message.style.color = "red";
    message.style.display = "block";
    return;
  }

  const identifiantsValidés = {
    "eleve123": "mdp123",
    "toto": "abc",
    "emma": "1234"
  };

  if (identifiantsValidés[id] === mdp) {
    // Succès
    window.location.href = "alpha.html";
  } else {
    message.textContent = "Identifiant ou mot de passe incorrect.";
    message.style.color = "red";
    message.style.display = "block";
  }
});
