<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="en">
  <%@ include file="common/header.jspf" %>
  <body>
    <%@ include file="common/navigation.jspf" %>
    <div class="container">
      <h1>Create a new Todo</h1>
      <p>Enter details</p>
      <form:form method="post" modelAttribute="todo" class="d-flex flex-column gap-3 mx-auto col-6">
        <fieldset>
          <form:label path="description" class="form-label">Description</form:label>
          <form:input type="text" path="description" required="required" class="form-control" />
          <form:errors path="description" cssClass="text-warning" />
        </fieldset>
        <fieldset>
          <form:label path="targetDate" class="form-label">Target Date</form:label>
          <form:input type="date" path="targetDate" required="required" class="form-control"/>
          <form:errors path="targetDate" cssClass="text-warning" />
        </fieldset>
        <form:input type="hidden" path="id" />
        <form:input type="hidden" path="done" />
        <button type="submit" class="btn btn-success">Create</button>
      </form:form>
    </div>
    <%@ include file="common/footer.jspf" %>
  </body>

</html>