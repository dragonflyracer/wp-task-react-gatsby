var liste_taches = document.getElementById("liste_taches");
document.getElementById("create_task").addEventListener("click", create_task, false);

function create_task(e)
{
  e.preventDefault();
  var titre_tache = document.getElementById("titre_tache").value;
  var description_tache = document.getElementById("description_tache").value;

  var nouvelle_tache = JSON.stringify({'post_title': titre_tache, 'post_content': description_tache});
  // console.log(nouvelle_tache);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost/wp-task-jpl/wp-json/taskManager/v0/task', true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () 
  {
      if (xhr.readyState == 4) 
      {
          if (xhr.status == 200)
          {
            // var myObj = JSON.parse(this.responseText);
            // console.log(xhr.responseText);
            // console.log('la tâche est créée');
            // for (var i = 0; i<myObj.length; i++)
            // {
           
            // }
            // appel à la fonction 1 pour réainitialiser les tâches  
          };
      };            
  };

  xhr.send(nouvelle_tache);
  // liste_taches.innerHTML = "";
  setTimeout(mettreAjour, 3000)
 
}
