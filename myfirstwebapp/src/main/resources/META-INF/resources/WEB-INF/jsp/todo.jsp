<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <link href="webjars/" rel="stylesheet">
    <link href="webjars/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
    <title>todo JSP page</title>
  </head>

  <body>
    <div class="container">
      <h1>Create a new Todo</h1>
      <p>Enter details</p>
      <form method="post">
        <p>Description: <input type="text" name="description"></p>
        <button type="submit" class="btn btn-success">Create</button>
      </form>
    </div>

    <script src="webjars/bootstrap/5.3.2/js/bootstrap.min.js"></script>
    <script src="webjars/jquery/3.7.1/jquery.min.js"></script>
  </body>

  </html>