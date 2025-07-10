<?php 
    session_start();
    if(!isset($_SESSION['target'])){
        $_SESSION['target'] = rand(1,100);
        $_SESSION['attempts'] = 0;

    }
    $message="";
    if($_SERVER['REQUEST_METHOD']==='POST'){
        $guess = $guessint($_POST['guess']);
        $_SESSION['attempts']++;
        if($guess>$_SESSION['target']){
            $message="Go Lower!";
        } elseif ($guess<$_SESSION['target']) 
        {
            $message= 'Go Higher!';
        } else{
            $message = "You did it, you beautiful bastard! You guessed the number: {$_SESSION['target']} in {$_SESSION['attempts']} Attempts!";
            unset($_SESSION['target']);
            unset($_SESSION['attempts']);
        }
        
        
    }

?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Zahlenraten</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        #game { margin: 20px auto; max-width: 300px; padding: 10px; background: #f9f9f9; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>Zahlenraten</h1>
    <div id="game">
        <p>Choose a number between 1 and 100:</p>
        <form method="POST">
            <input type="number" name="guess" min="1" max="100" required>
            <button type="submit">Rate</button>
        </form>
        <p><?= htmlspecialchars($message) ?></p>
    </div>
</body>
</html>