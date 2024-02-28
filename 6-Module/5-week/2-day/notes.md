# Docker Lecture: Introduction to Containerization via Command Line

1. Understanding Containerization:

    - Containerization is a lightweight, portable, and efficient approach to virtualization, enabling developers to package applications and their dependencies into self-contained units known as containers. Docker is one of the most popular containerization platforms, offering tools and services to manage containers efficiently.

2. Key Concepts:

    - Images: Images are the blueprints for containers. They contain everything needed to run an application, including the code, runtime, libraries, and dependencies.

    - Containers: Containers are instances of images. They are isolated environments that run applications, ensuring consistency across different computing environments.

    - Dockerfile: Dockerfile is a text file that contains instructions for building Docker images. It defines the environment and configuration of the application. (we are going to talk about this later on in the week.)

    - Docker Engine: Docker Engine is the runtime environment for containers. It manages container lifecycle, networking, storage, and other essential tasks.

3. Creating and Using a Docker Container via Command Line:


    1. create a flask app
    ```py

    from flask import Flask

    app = Flask(__name__)

    @app.route('/')
    def hello():
        return 'Hello, Docker World!'

    if __name__ == '__main__':
        app.run(debug=True, host='0.0.0.0')
    ```

2. Build the Docker Image
    - Open a terminal and navigate to the directory containing app.py. Run the following command to build the Docker image:

    ```
    docker build -t myapp .
    ```

3. Run the Docker Container

    Once the image is built, you can create and run a container using the following command:

    ```
    docker run -d -p 5000:5000 --name mycontainer -v $(pwd):/app -w /app python:3.9 sh -c "pip install Flask && FLASK_ENV=development flask run --host=0.0.0.0"
    ```
    - -d: Detached mode, runs the container in the background.
    - -p 5000:5000: Maps port 5000 on the host to port 5000 on the container.
    - --name mycontainer: Names the container mycontainer.
    - -v $(pwd):/app: Mounts the current directory as a volume inside the container at /app, allowing changes to be reflected immediately.
    - -w /app: Sets the working directory inside the container to /app.
    - python:3.9 python app.py: Specifies the Python runtime to use and the command to run the Flask application.
    - sh -c: This part of the command invokes the shell (sh) and runs the command that follows (-c flag stands for "command"). It allows you to execute multiple commands within the same shell session.


4. Access the Application

    Now, you can access your Python web application running inside the Docker container by navigating to http://localhost:5000 in your web browser.
