# Final Exam Project

**Submitted by:** Jaiden Nguyen

**Group Members:** Jaiden Nguyen

**App Description:** A simple application that fetches random cat facts from an external API and allows users to save them or their own notes to a MongoDB database.

**APIs Information:** Cat Fact API (https://catfact.ninja/)

**Contact Email:** [jaiden04@terpmail.umd.edu]

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
    npm start
    ```
    Or with nodemon:
    ```bash
    npx nodemon server.js
    ```

4.  **Access the app:**
    Open your browser and visit `http://localhost:3000`

---

## Render Deployment Instructions

### Step 1: Set Up MongoDB Atlas (Free Tier)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a new cluster (free M0 tier works fine)
3. Click **"Connect"** on your cluster
4. Choose **"Connect your application"**
5. Copy the connection string (looks like `mongodb+srv://username:password@cluster.mongodb.net/...`)
6. **Important:** In Atlas, go to **Network Access** and add `0.0.0.0/0` to allow connections from anywhere (required for Render)

### Step 2: Deploy to Render

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository
5. Configure the service:
   - **Name:** `cat-fact-keeper` (or your preferred name)
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Add **Environment Variable:**
   - Key: `MONGO_URI`
   - Value: Your MongoDB Atlas connection string (from Step 1)
7. Click **"Create Web Service"**

Your app will be live at `https://your-app-name.onrender.com`

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Frontend:** EJS templates, CSS
- **External API:** Cat Fact API
