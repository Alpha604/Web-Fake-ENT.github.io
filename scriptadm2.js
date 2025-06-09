//code connextion :
const codeadm = "ID = ADM1 mdp = admin CDS = 0000" //code adm
const codeeleve = "ID = eleve123 mdp = mdp123" // code élève
const codeparent = "ID = parent123 mdp = mdp123" //code parent
const allcode = `
ID = ADM1 mdp = admin CDS = 0000
ID = eleve123 mdp = mdp123
ID = parent123 mdp = mdp123
`

document.getElementById("de-connextion-adm").addEventListener("click", function () {
    let response = confirm("Voulez-vous continuer? Cela vous deconnecteras automatiquemment");
    if (response) {
        window.location.href = "index.html";
}
})
document.getElementById("infos-adm").addEventListener("click", function () {
    var listeDesAlertes = document.getElementById("liste-des-alertes");
    listeDesAlertes.style.display = (listeDesAlertes.style.display === "block") ? "none" : "block";
})

document.getElementById("fermer-liste").addEventListener("click", function () {
    var listeDesAlertes = document.getElementById("liste-des-alertes");
    listeDesAlertes.style.display = (listeDesAlertes.style.display === "block") ? "none" : "block";
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("infos-site").addEventListener("click", function () {
        var infosSiteText = document.getElementById("infos-site-text");
        infosSiteText.style.display = (infosSiteText.style.display === "block") ? "none" : "block";
    });
})
document.getElementById("fermer-liste-2").addEventListener("click", function () {
    var infosSiteText = document.getElementById("infos-site-text");
    infosSiteText.style.display = (infosSiteText.style.display === "block") ? "none" : "block";
})
document.getElementById('Notifications').addEventListener('click', function () {
    const bellImage = this;
    const sillencieux = document.getElementById("sillencieux-message");

    if (bellImage.src.includes('bell-microsoft.png')) {
        bellImage.src = 'https://cdn-0.emojis.wiki/emoji-pics/microsoft/bell-with-slash-microsoft.png';
        bellImage.title = 'Notifications désactivées';
        alert("Notifications désactivées");
        sillencieux.style.display = "block";


    } else {
        bellImage.src = 'https://cdn-0.emojis.wiki/emoji-pics/microsoft/bell-microsoft.png';
        bellImage.title = 'Notifications activées';
        alert("Notifications activées");
        sillencieux.style.display = "none";
    }
})
document.getElementById('liste-des-notifications').addEventListener('click', function() {
    // Vérifiez la source actuelle de l'image et changez-la
    if (this.src === 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f4c1.svg') {
        this.src = 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f4c2.svg'; // Remplacez par l'URL de votre deuxième image
        this.title = 'Notifications ouvertes';
    } else {
        this.src = 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f4c1.svg';
        this.title = 'Notifications fermées';
    }
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("liste-des-notifications").addEventListener("click", function () {
        var listedesnotifications = document.getElementById("liste-des-notifications/open");
        listedesnotifications.style.display = (listedesnotifications.style.display === "block") ? "none" : "block";
    });
})
document.getElementById("fermer-liste/Notifications").addEventListener("click", function () {
    var listedesnotifications = document.getElementById("liste-des-notifications/open");
    listedesnotifications.style.display = (listedesnotifications.style.display === "block") ? "none" : "block";
    
})
document.getElementById('fermer-liste/Notifications').addEventListener('click', function() {
    document.getElementById('liste-des-notifications').src = 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f4c1.svg';
})
document.addEventListener("DOMContentLoaded", function () {
  const boutonAfficher = document.getElementById("code-adm-afficher");
  const divCodeAdm = document.getElementById("code-adm");
  const boutonFermer = document.getElementById("code-adm-no-afficher");

  boutonAfficher.addEventListener("click", () => {
    alert("Faite attention aux regards indiscrets \n(Passer la souris sur les bandes noires)");
    divCodeAdm.style.display = "block";
    boutonAfficher.style.display = "none";
  });

  boutonFermer.addEventListener("click", () => {
    divCodeAdm.style.display = "none";
    boutonAfficher.style.display = "inline-block";
  });
});
