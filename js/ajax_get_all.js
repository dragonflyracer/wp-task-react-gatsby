var all_task = document.getElementsByClassName("all_task");
var liste_taches = document.getElementById("liste_taches");

for (let i = 0; i < all_task.length; i++) {


    all_task[i].addEventListener("click", function (e) {
 
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4) {
                if (xhr.status == 200)
                var myObj = JSON.parse(this.responseText);
                console.log(myObj);
               
                    // CHANGEMENT D'IMAGE POUR LE all_task

                    for (var i = 0; i<myObj.length; i++)
                    {
                        liste_taches.innerHTML += '</br>' + myObj[i].post_title;
                    }
                    // //Si le all_task est gris, on le fait maintenant apparaître rouge.
                    // if (titreClass.className === "all_task fas fa-heart") {
                    //     titreClass.className = titreClass.className.replace("fa-heart", "fa-heart2");
                    // }
            }            
        }

        //Envoie le titre du film ou de la série dans la page likes.php
        xhr.open('GET', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task', true);
        xhr.send();
        
    });


}