var all_task = document.getElementsByClassName("all_tasks");
var liste_taches = document.getElementById("liste_taches");

for (let i = 0; i < all_task.length; i++) {

    all_task[i].addEventListener("click", function (e) 
    {
 
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () 
        {

            if (xhr.readyState == 4) 
            {
                if (xhr.status == 200)
                var myObj = JSON.parse(this.responseText);
                console.log(myObj);
               
                // boucle pour afficher les titres de toutes les tâches

                for (var i = 0; i<myObj.length; i++)
                {
                    liste_taches.innerHTML += '</br>' + myObj[i].post_title;
                }
            }            
        }

        //Envoie le titre du film ou de la série dans la page likes.php
        xhr.open('GET', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task', true);
        xhr.send();        
    });
}