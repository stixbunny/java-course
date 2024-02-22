FROM openjdk:21-slim
COPY target/*.jar app.jar
EXPOSE 5000
ENTRYPOINT ["java","-jar","/app.jar"]

# docker build -t stixbunny/java-hello-world-docker:v2 .

# docker run -d -p 5000:5000 stixbunny/java-hello-world-docker:v2