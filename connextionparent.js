const codeparent = "ID = parent123 mdp = mdp123"
document.getElementById("coparent").addEventListener("click", function () {
  const id = document.getElementById("IDparent").value.trim();
  const mdp = document.getElementById("MDPparent").value.trim();
  const message = document.getElementById("messageErreur-parent");

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
    "parent123": "mdp123",
    "alpha": "alpha"
  };

  if (identifiantsValidés[id] === mdp) {
    // Succès
    window.location.href = "parent.html";
  } else {
    message.textContent = "Identifiant ou mot de passe incorrect.";
    message.style.color = "red";
    message.style.display = "block";
  }
});
