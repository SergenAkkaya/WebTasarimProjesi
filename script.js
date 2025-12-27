    let email = document.getElementById("email");
    let names = document.getElementById("name");
    let message = document.getElementById("message");
    let btn = document.getElementById("buton");

    function iletisim(){
        if(email.value == "" || names.value == "" || message.value == ""){
        alert("Kutucuklar Boş Bırakılamaz !");}
        else {
            console.log("İsim :" + names.value);
            console.log("eposta :" + email.value);
            console.log("mesaj :" + message.value);
        }
        let alertMsg = document.createElement("p");
        alertMsg.innerText = "Mesajınız Alındı !";
        alertMsg.classList.add("cevapM");
        alertMsg.style.color = "green";
        container.append(alertMsg);

        setTimeout(() => {
            alertMsg.remove();
        }, 3000);    
    }
