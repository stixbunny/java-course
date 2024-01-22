<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
  <%@ include file="common/header.jspf" %>
  <body>
    <%@ include file="common/navigation.jspf" %>
    <div class="container">
      <h1>Welcome ${name}</h1>
      <p><a href="list-todos">Manage your todos</a></p>
    </div>
    <%@ include file="common/footer.jspf" %>
  </body>
</html>