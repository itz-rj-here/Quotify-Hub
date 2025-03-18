# Quotify Hub

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://quotifyhub.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/itz-rj-here/Quotify-Hub)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

## 📝 Inspire Your Apps with Quotes

**Quotify Hub** is a free and open-source API that provides a vast collection of inspiring quotes. Whether you're developing an application, looking for daily motivation, or working on a creative project, Quotify Hub has you covered!

## 🚀 Live Website & API

🌍 **Live Website:** [Quotify Hub](https://quotifyhub.vercel.app/)

🛠️ **API Endpoint:** `https://quotifyhub.vercel.app/api/random`

✅ **Example Response:**
```json
{
  "id": 1,
  "quote": "The only limit to our realization of tomorrow is our doubts of today.",
  "author": "Franklin D. Roosevelt",
  "category": "Motivation"
}
```

## 📌 Features
- 🌟 **Thousands of curated quotes** across various categories.
- 🔗 **RESTful API** for easy integration into web or mobile apps.
- ⚡ **Fast and reliable** with JSON responses.
- 📂 **Filter quotes by category or author**.
- 📊 **Rate-limited API** to prevent abuse.
- 💡 **Open-source** and customizable.

## 📂 Project Structure
```
├── index.html   # The main frontend of Quotify Hub
├── index.js     # The backend logic and server setup
├── quotes.js    # The quotes data file
├── package.json # Project dependencies
├── vercel.json  # Deployment configuration
└── README.md    # Documentation file
```

## ⚙️ Installation & Setup
To run this project locally, follow these steps:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/itz-rj-here/Quotify-Hub.git
cd Quotify-Hub
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Server Locally
```sh
npm start
```
By default, the server will run on `http://localhost:3000`

---

## 📡 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/random` | GET | Returns a random quote |
| `/random?category=motivation` | GET | Returns a random quote from a specific category |
| `/random?limit=10` | GET | Returns multiple random quotes (limit specified) |
| `/quotes` | GET | Returns all available quotes |
| `/quotes?category=motivation` | GET | Fetch quotes from a specific category |
| `/quotes?limit=10` | GET | Fetch a limited number of quotes |
| `/quotes/id/:id` | GET | Fetch a quote by its ID |

## 🔗 Credits & Inspiration
This project was **forked and inspired by** [Quotes-API](https://github.com/theriturajps/Quotes-API). The original author of this repository is **[Ritu Raj Pratap Singh](https://github.com/theriturajps)**.

## 📜 License
This project is licensed under the **MIT License**, meaning you can freely use, modify, and distribute it. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Contributions are welcome! If you’d like to improve this project, feel free to:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Added a new feature"`).
4. Push your changes (`git push origin feature-branch`).
5. Open a **Pull Request**.

## 📬 Connect
💻 **GitHub:** [Quotify Hub Repo](https://github.com/itz-rj-here/Quotify-Hub)

📧 **Contact:** Open an issue in the GitHub repo for support.

💖 If you like this project, don't forget to ⭐ the repository!

Happy coding! 🚀

