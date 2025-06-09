document.addEventListener("DOMContentLoaded", function () {
  // Élève
  const boutonEleve = document.getElementById("eleve");
  const contenuEleve = document.getElementById("eleve-content");

  // Parent
  const boutonParent = document.getElementById("parent");
  const contenuParent = document.getElementById("parent-content");

  // Personnel (ADM)
  const boutonPersonnel = document.getElementById("personnel");
  const contenuPersonnel = document.getElementById("personnel-content");

  // Ajout des écouteurs d'événements
  boutonEleve.addEventListener("click", function () {
    contenuParent.style.display = "none"; // Masquer le contenu du parent
    contenuPersonnel.style.display = "none"; // Masquer le contenu du personnel
    contenuEleve.style.display = (contenuEleve.style.display === "block") ? "none" : "block";
  });

  boutonParent.addEventListener("click", function () {
    contenuEleve.style.display = "none"; // Masquer le contenu de l'élève
    contenuPersonnel.style.display = "none"; // Masquer le contenu du personnel
    contenuParent.style.display = (contenuParent.style.display === "block") ? "none" : "block";
  });

  boutonPersonnel.addEventListener("click", function () {
    contenuEleve.style.display = "none"; // Masquer le contenu de l'élève
    contenuParent.style.display = "none"; // Masquer le contenu du parent
    contenuPersonnel.style.display = (contenuPersonnel.style.display === "block") ? "none" : "block";
  });

  const input = document.getElementById('numberInput');

  if (input) {
    // Supprimer les écouteurs d'événements existants pour éviter les doublons
    input.removeEventListener('mouseover', changePlaceholder);
    input.removeEventListener('mouseout', resetPlaceholder);

    // Ajouter les nouveaux écouteurs d'événements
    input.addEventListener('mouseover', changePlaceholder);
    input.addEventListener('mouseout', resetPlaceholder);
  } else {
    console.error("L'élément avec l'ID 'numberInput' n'a pas été trouvé.");
  }

  function changePlaceholder() {
    this.setAttribute('placeholder', 'XXXX');
  }

  function resetPlaceholder() {
    this.setAttribute('placeholder', 'CDS Alpha à 4 chiffres');
  }

  // Ajout de la fonctionnalité de limitation de chiffres
  const numberInput = document.getElementById('numberInput');
  if (numberInput) {
    numberInput.addEventListener('input', limitDigits);
  } else {
    console.error("L'élément avec l'ID 'numberInput' n'a pas été trouvé.");
  }

  function limitDigits() {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  }
});