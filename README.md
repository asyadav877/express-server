# Express.js Web Server
This repository contains a simple Express.js web server. Follow the instructions below to set up and run the server locally using Docker.

## Getting Started

1. **Clone the repository**:

    Clone the repository to your local machine:

    ```bash
    git clone https://github.com/asyadav877/express-server.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd express-server
    ```

3. **Build the Docker image**:

    Build the Docker image using the Dockerfile in the repository:

    ```bash
    docker build -t express-server .
    ```

4. **Run the Docker container**:

    Run the Docker container from the built image:

    ```bash
    docker run -d -p 3000:3000 express-server
    ```

    - The server will listen on port 3000.

5. **Access the server**:

    Open a web browser and navigate to `http://localhost:3000/` to access the server.