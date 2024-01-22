<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
  <%@ include file="common/header.jspf" %>
  <body>
    <%@ include file="common/navigation.jspf" %>
    <div class="container">
      <p>Welcome to the login page!</p>
      <p>${errorMessage}</p>
      <form method="post">
        <p>Name: <input type="text" name="name"></p>
        <p>Password: <input type="password" name="password"></p>
        <button type="submit">Send</button>
      </form>
    </div>
    <%@ include file="common/footer.jspf" %>
  </body>
</html>