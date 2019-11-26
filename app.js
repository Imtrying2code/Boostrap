var listMail = "", listPsw = "";
/* Fonction de vérification de l'Email saisie afin qu'il corresponde à la Charte.*/

function submitBtn() {
    var listMail = document.querySelector('#checkmail').value;
    var listPsw = document.querySelector('#checkPassword').value;
    console.log(listMail + listPsw);
    if (listMail === "toto@gmail.com" && listPsw === "Picsou86" ) {
        document.getElementById("groupTrue").classList.add("form-groupTrue"); 
        document.getElementById("groupTrue").classList.add("activeTrue");
    } else {
        document.getElementById("groupFalse").classList.add("form-groupFalse"); 
        document.getElementById("groupFalse").classList.add("activeFalse");
    }
}
