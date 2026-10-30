// Save as server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = 8080;

const TRAIN_COACHES = ["S3", "S2", "S1", "B2", "B1", "A1", "ENGINE_GATEWAY"];

app.use(express.json());

// Enable explicit CORS headers so the browser never blocks your buttons
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});

app.use(express.static(__dirname));

let alertState = { status: "SAFE", coach: "S3", berth: "34" };

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.post('/trigger-sos', (req, res) => {
    const data = req.body;
    alertState.status = "SOS";
    alertState.coach = data.coach || "S3";
    alertState.berth = data.berth || "34";
    
    console.log(`\n⚠️ SOS Activated at Coach: ${alertState.coach}`);

    // Trigger the Step-by-Step Multi-Hop Routing Loop down the train cars
    let currentIdx = 0;
    let hopCount = 0;

    let relayInterval = setInterval(() => {
        if (currentIdx < TRAIN_COACHES.length) {
            let activeHopCoach = TRAIN_COACHES[currentIdx];
            hopCount++;
            
            // Broadcast current position to the UI
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ 
                        type: 'MESH_HOP', 
                        packet: {
                            originCoach: alertState.coach,
                            currentCoach: activeHopCoach,
                            berth: alertState.berth,
                            hopCount: hopCount
                        }
                    }));
                }
            });
            currentIdx++;
        } else {
            clearInterval(relayInterval);
        }
    }, 800); // 0.8 seconds per hop for a quick, responsive animation

    res.json({ success: true });
});

wss.on('connection', (ws) => {
    console.log('📱 Dashboard linked to Local Radio Mesh channel.');
});

server.listen(PORT, "127.0.0.1", () => {
    console.log("\n==================================================");
    console.log("🚀 [RAILGUARD UNIFIED BACKEND SERVER ACTIVE]");
    console.log(`📡 Open Dashboard at: http://127.0.0.1:${PORT}`);
    console.log("==================================================\n");
});
