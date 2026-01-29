# Blockchain Data Integration API – Skill Test

## 📝 Project Overview
This project demonstrates the integration of Ethereum blockchain data into a Node.js/Express backend. It was developed as a technical assessment to showcase proficiency in Web3 technologies, smart contract interaction, and API development.

The system connects to the **Ethereum Mainnet** and fetches real-time financial data from the **Chainlink Decentralized Oracle Network**.

## 🚀 Features
* **Live Smart Contract Interaction**: Connects to the Chainlink ETH/USD Price Feed.
* **RESTful API Architecture**: Exposes blockchain data via a clean, structured JSON endpoint.
* **Security**: Implements environment variable management for sensitive RPC credentials.
* **Resiliency**: Robust port-checking logic to prevent startup conflicts.

## 🛠️ Tech Stack
* **Backend**: Node.js, Express.js
* **Blockchain Library**: Ethers.js (v6)
* **Infrastructure**: Infura (RPC Provider)
* **Tools**: Dotenv (Config), Morgan (Logging), CORS

---

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone [your-repo-link]
   cd assessment1