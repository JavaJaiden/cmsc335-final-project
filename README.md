# Final Exam Project

**Submitted by:** Jaiden Nguyen

**Group Members:** Jaiden Nguyen

**App Description:** A simple application that fetches random cat facts from an external API and allows users to save them or their own notes to a MongoDB database.

**YouTube Video Demo Link:** [REPLACE WITH YOUR YOUTUBE LINK]

**APIs Information:** Cat Fact API (https://catfact.ninja/)

**Contact Email:** [jaiden04@terpmail.umd.edu]

**Deployed App Link:** [https://cmsc335-final-project-k23n.onrender.com]

## Local Setup Instructions

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Configure MongoDB:**
    -   Ensure you have MongoDB running locally or update the connection string in `.env` (create it if it doesn't exist) or `server.js`.
    -   Default connection: `mongodb://127.0.0.1:27017/final-project`

3.  **Run the application:**
    ```bash
    node server.js
    ```
    Or with nodemon:
    ```bash
    npx nodemon server.js
    ```

4.  **Access the app:**
    Open your browser and visit `http://localhost:3000`

