const LIMITE_MESSAGES = 300;

function getMessages() {
  return JSON.parse(localStorage.getItem("messages") || "[]");
}

function saveMessages(messages) {
  localStorage.setItem("messages", JSON.stringify(messages));
}

function envoyerMessage() {
  const expediteur = document.getElementById("expediteur").value.trim();
  const destinataire = document.getElementById("destinataire").value.trim();
  const contenu = document.getElementById("contenu").value.trim();
  const roleDestinataire = document.getElementById("roleUtilisateur")?.value || "PARENT";

  // Vérifie que l'élève n'envoie qu'à ADM ou PARENT
  if (!["ADM", "PARENT"].includes(roleDestinataire)) {
    alert("Vous ne pouvez envoyer un message qu'aux ADM ou aux PARENTS.");
    return;
  }

  if (!expediteur || !destinataire || !contenu) {
    alert("Tous les champs sont requis !");
    return;
  }

  const messages = getMessages();
  if (messages.length >= LIMITE_MESSAGES) {
    alert("La limite de messages a été atteinte. Supprimez des messages pour en envoyer de nouveaux.");
    return;
  }

  messages.push({
    de: expediteur,
    a: destinataire,
    texte: contenu,
    date: new Date().toLocaleString(),
    destinataireRole: roleDestinataire
  });

  saveMessages(messages);

  alert("Message envoyé !");
  document.getElementById("contenu").value = "";

  const roleUtilisateur = document.getElementById("roleUtilisateur")?.value || "ELEVE";
  afficherMessagesPour(expediteur, roleUtilisateur);
}

function afficherMessagesPour(nom, role) {
  const zone = document.getElementById("reception");
  zone.innerHTML = "<p>Chargement des messages...</p>";

  setTimeout(() => {
    const messages = getMessages();
    zone.innerHTML = "";

    messages.forEach((msg, index) => {
      const estDestinataire = msg.a === nom && msg.destinataireRole === role;
      const estExpediteur = msg.de === nom;

      // L'élève ne voit que ses messages (envoyés ou reçus), et jamais les messages d'ADM non liés à lui
      if (estDestinataire || estExpediteur) {
        const div = document.createElement("div");
        div.className = `message ${estExpediteur ? "envoye" : "recu"}`;
        div.innerHTML = `
          <strong>De :</strong> ${msg.de}<br>
          <strong>À :</strong> ${msg.a} (${msg.destinataireRole})<br>
          <strong>Date :</strong> ${msg.date}<br>
          <p>${msg.texte}</p>
          <button onclick="supprimerMessage(${index}, '${nom}', '${role}')">Supprimer</button>
          <button onclick="telechargerMessage(${index})">📥 Télécharger</button>
        `;
        zone.appendChild(div);
      }
    });

  }, 200);
}

function supprimerMessage(index, utilisateur, role) {
  const messages = getMessages();
  if (confirm("Supprimer ce message ?")) {
    messages.splice(index, 1);
    saveMessages(messages);
    afficherMessagesPour(utilisateur, role);
  }
}

function telechargerMessage(index) {
  const msg = getMessages()[index];
  const contenu = `De: ${msg.de}\nÀ: ${msg.a}\nRôle: ${msg.destinataireRole}\nDate: ${msg.date}\n\n${msg.texte}`;
  const blob = new Blob([contenu], { type: "text/plain" });
  const lien = document.createElement("a");
  lien.href = URL.createObjectURL(blob);
  lien.download = `message_${index + 1}.txt`;
  lien.click();
}

// Recharger l'affichage quand nom ou rôle change
window.addEventListener("DOMContentLoaded", () => {
  const inputNom = document.getElementById("utilisateur");
  const selectRole = document.getElementById("roleUtilisateur");
  if (inputNom && selectRole) {
    inputNom.addEventListener("input", () => afficherMessagesPour(inputNom.value.trim(), selectRole.value));
    selectRole.addEventListener("change", () => afficherMessagesPour(inputNom.value.trim(), selectRole.value));
  }
});
