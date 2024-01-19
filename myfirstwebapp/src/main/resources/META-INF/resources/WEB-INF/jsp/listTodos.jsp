<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="webjars/" rel="stylesheet">
  <link href="webjars/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
  <title>list-todos JSP page</title>
</head>
<body>
  <h1>Welcome ${name}!</h1>
  <h2>Your todos are...</h2>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Description</th>
        <th>Target Date</th>
        <th>Done?</th>
      </tr>
    </thead>
    <tbody>
      <c:forEach items="${todos}" var="todo">
        <tr>
          <td>${todo.id}</td>
          <td>${todo.description}</td>
          <td>${todo.targetDate}</td>
          <td>${todo.done}</td>
        </tr>
      </c:forEach>
    </tbody>
  </table>
  <script src="webjars/bootstrap/5.3.2/js/bootstrap.min.js"></script>
  <script src="webjars/jquery/3.7.1/jquery.min.js"></script>
</body>
</html>