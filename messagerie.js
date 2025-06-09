const LIMITE_MESSAGES = 300;
const messages = getMessages();
const aucunMessageElement = document.getElementById("aucun-message"); // Ton texte d'absence de message
const messageContainer = document.getElementById("messages-container"); // Le conteneur des messages
const compteurElement = document.getElementById("message-count"); // Élément pour afficher le compteur

function getMessages() {
  return JSON.parse(localStorage.getItem("messages") || "[]");
}

function saveMessages(messages) {
  localStorage.setItem("messages", JSON.stringify(messages));
}

function envoyerMessage(expediteur, destinataire, roleDestinataire, contenu) {
  if (!expediteur || !destinataire || !contenu) {
    alert("Tous les champs sont requis !");
    return false;
  }

  const messages = getMessages();
  if (messages.length >= LIMITE_MESSAGES) {
    alert("La limite de messages a été atteinte. Supprimez des messages pour en envoyer de nouveaux.");
    return false;
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
  return true;
}

if (messages.length === 0) {
  aucunMessageElement.style.display = "block"; // Affiche le texte
  messageContainer.style.display = "none";     // Cache le conteneur des messages
  compteurElement.textContent = "ℹ️ AUCUN MESSAGE POUR LE MOMENT";
} else {
  aucunMessageElement.style.display = "none";   // Cache le message "aucun"
  messageContainer.style.display = "block";     // Affiche les messages normalement
  compteurElement.textContent = `Total : ${messages.length}/${LIMITE_MESSAGES} message(s)`;

  // Logique d'affichage des messages ici
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = msg;
    messageContainer.appendChild(div);
  });
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
      const estAdmin = role === "ADM";

      if (estDestinataire || estExpediteur || estAdmin) {
        const div = document.createElement("div");
        div.className = `message ${estExpediteur ? "envoye" : "recu"}`;
        div.innerHTML = `
          <strong>De :</strong> ${msg.de}<br>
          <strong>À :</strong> ${msg.a}<br>
          <strong>Rôle :</strong> ${msg.destinataireRole}<br>
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
  if (!confirm("Supprimer ce message ?")) return;
  const messages = getMessages();
  messages.splice(index, 1);
  saveMessages(messages);
  afficherMessagesPour(utilisateur, role);
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
