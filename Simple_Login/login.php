<?php
session_start();

$valid_username = "admin";
$valid_password = "secret123";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = trim($_POST['username']);
  $password = trim($_POST['password']);

  if ($username === $valid_username && $password === $valid_password) {
    $_SESSION['user'] = $username;
    header( "Location: dashboard.html");
    exit;
  } else {
    echo "Invalid username or password.";
  }
} else {
  echo "Invalid request.";
}
?>
