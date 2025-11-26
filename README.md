# Final Exam Project

**Submitted by:** [YOUR NAME] ([YOUR DIRECTORY ID])

**Group Members:** [YOUR NAME] ([YOUR DIRECTORY ID])

**App Description:** A simple application that fetches random cat facts from an external API and allows users to save them or their own notes to a MongoDB database.

**YouTube Video Demo Link:** [LINK TO YOUR YOUTUBE VIDEO]

**APIs Information:** Cat Fact API (https://catfact.ninja/)

**Contact Email:** [YOUR EMAIL ADDRESS]

**Deployed App Link:** [LINK TO YOUR RENDER DEPLOYMENT]

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

