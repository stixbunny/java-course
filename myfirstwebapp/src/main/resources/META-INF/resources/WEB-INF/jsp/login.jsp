<!DOCTYPE html>
<html lang="en">

<head>
  <title>login JSP page</title>
</head>

<body>
  <div class="container">
    <p>Welcome to the login page!</p>
    <p>${errorMessage}</p>
    <form method="post">
      <p>Name: <input type="text" name="name"></p>
      <p>Password: <input type="password" name="password"></p>
      <button type="submit">Send</button>
    </form>
  </div>

</body>

</html>