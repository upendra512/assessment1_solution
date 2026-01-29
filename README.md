# Blockchain Data Integration API

## 📝 Project Overview
This project demonstrates a robust integration between a Node.js/Express backend and the Ethereum blockchain. Developed as a technical assessment test, it showcases proficiency in Web3 architecture, smart contract interaction via Ethers.js, and professional API development standards.

The system acts as a bridge to the **Ethereum Mainnet**, fetching high-fidelity financial data directly from the **Chainlink Decentralized Oracle Network**.

---

## 🔄 Architecture & Data Flow
The API follows a standardized Web3 request cycle:
1. **Request**: Client queries the `/api/UpendraSinghApiTest` endpoint.
2. **Provider**: The server connects to the Ethereum Mainnet via **Infura** using a JSON-RPC provider.
3. **Smart Contract**: The system interacts with the **Chainlink ETH/USD Aggregator** (`0x5f4e...`).
4. **Processing**: Data is retrieved as a BigInt, normalized using the contract's `decimals()` value, and formatted for human readability.
5. **Response**: A structured JSON payload is returned to the client.



---

## 🚀 Features
* **Real-time Oracle Queries**: Live data fetching from on-chain price feeds.
* **Ethers.js v6 Implementation**: Leveraging the latest version for improved type safety.
* **Security-First Configuration**: Strict use of `.env` for infrastructure credentials.
* **Operational Resiliency**: Built-in port-management logic to ensure server stability.

## 🛠️ Tech Stack
* **Runtime**: Node.js
* **Framework**: Express.js
* **Blockchain**: Ethers.js (v6)
* **Infrastructure**: Infura (Mainnet RPC)
* **Utilities**: Morgan (Logging), CORS, Dotenv

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/upendra512/assessment1_solution.git
cd assessment1
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory:
```env
PORT=3001
RPC_URL=https://mainnet.infura.io/v3/your-infura-key
```

### 4. Run the application
```bash
cd src
node index.js
```
The server will start on `http://localhost:3001`

### 5. Test the API
```bash
curl http://localhost:3001/api/UpendraSinghApiTest
```
Or visit the URL in your browser to see the live ETH/USD price data

---

## 📦 Git Workflow

Development commits made:
```bash
# Navigate to source directory
cd assessment1/src

# Stage and commit changes
git add index.js
git commit -m "Fix: use ethers.JsonRpcProvider instead of constructor instantiation"
```

---

## 📸 Screenshots 

### API Response
(<img width="441" height="162" alt="Screenshot 2026-01-30 000958" src="https://github.com/user-attachments/assets/46b411d9-0dcf-451f-b9b6-0c7948f9b761" />
)

### Console Output
(<img width="1251" height="436" alt="Screenshot 2026-01-30 000938" src="https://github.com/user-attachments/assets/534ca8e2-46fe-433a-b59a-94f2f6ec128a" />
)
