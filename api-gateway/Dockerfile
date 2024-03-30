# Use an official OpenJDK runtime as a parent image
FROM openjdk:17

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged JAR file into the container at /app
COPY /build/libs/api-gateway.jar /app.jar

# Make port 8080 available to the world outside this container
EXPOSE 8765

# Define the command to run your application
ENTRYPOINT ["java", "-jar", "/app.jar"]