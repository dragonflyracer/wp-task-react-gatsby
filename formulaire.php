<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

<?php
	// if (isset($_POST["titre_tache"])) 
	// {
	// 	$titre=$_POST["titre_tache"];
	// 	$description=$_POST["description_tache"];

	// 	$resultat = $wpdb->insert('wp_posts', array(
	// 		'post_title'=> $titre,
	// 		'post_type'=> 'task',
	// 		'post_content'=> $description
	// 	));
	// }
?>

<a href="http://localhost/wp-task-jpl/wp-json/taskManager/v0/task.php">Voir toutes les tâches</a>

<form action="#" method="POST">
  Nouvelle tâche :<br>
  <input type="text" id="titre_tache"><br>
  Description :<br>
  <input type="text" id="description_tache">
  <input id="create_task" type="submit">
</form>

</body>
</html>
