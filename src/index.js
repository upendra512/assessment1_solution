
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { ethers } = require('ethers');


const app = express();
// Use PORT from .env or default to 3001
const PORT = process.env.PORT || 3001;

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- Smart Contract Configuration ---
// Grabbing the RPC_URL you provided in the .en
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/cb27095411b243ceb2618679851620a3");


// Chainlink ETH/USD Price Feed Address
const contractAddress = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
const abi = [
    "function latestRoundData() view returns (uint80, int256 answer, uint256, uint256 updatedAt, uint80)"
];

/**
 * @route    GET /api/UpendraSinghApiTest
 * @desc     Assessment Task: Fetch ETH price from Smart Contract
 * @author   Upendra Singh
 */
app.get('/api/UpendraSinghApiTest', async (req, res) => {
    try {
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const data = await contract.latestRoundData();
        
        const ethPrice = Number(data.answer) / 10**8;
        const lastUpdated = new Date(Number(data.updatedAt) * 1000).toLocaleString();

        // TASK REQUIREMENT: Print to console
        console.log("\n--- Assessment Output ---");
        console.log(`Contract: ${contractAddress}`);
        console.log(`Fetched ETH Price: $${ethPrice.toFixed(2)}`);
        console.log(`Timestamp: ${lastUpdated}`);
        console.log("-------------------------\n");

        res.json({
            success: true,
            endpoint: "UpendraSinghApiTest",
            blockchainData: {
                asset: "ETH/USD",
                price: ethPrice.toFixed(2),
                updatedAt: lastUpdated
            }
        });
  } catch (error) {
    console.error("❌ Full Error:", error); // This shows the detail in your terminal
    res.status(500).json({ 
        success: false, 
        error: error.message || "An unknown blockchain error occurred" // This shows it in the browser
    });
}
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Run your test at: http://localhost:${PORT}/api/UpendraSinghApiTest`);
});