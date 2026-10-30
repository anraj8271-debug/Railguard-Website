# RailGuard 🚆

**RailGuard is an offline emergency app that helps train passengers call for help even when there is absolutely no phone signal or internet.** Built by team **Edge Keepers** for the *Hack for Social Cause*, this project focuses on **Women's Safety and Empowerment** during train journeys.

---

## ❓ The Problem
When trains travel through remote areas, mobile networks often drop completely. If a passenger (especially women, children, or solo travelers) faces danger or an emergency in these zones, they cannot call or text for help, leaving them stranded and unheard.

---

## 💡 The Solution
RailGuard solves this by creating a backup safety network inside the train using tools that do not need the internet:

*   **Pass-It-On SOS Alerts:** When you trigger an emergency, your phone uses Bluetooth and local Wi-Fi to securely pass the alert to other nearby passenger phones, creating a human chain of help.
*   **Smart Danger Detection:** The app uses built-in AI to listen for distress signals (like screaming or crying) to automatically trigger an alert, while ignoring accidental activations or pranks.
*   **Ceiling Signal Boosters:** Small, cheap wireless chips (ESP32) are placed on train ceilings to act as stepping stones, making sure your emergency message moves from coach to coach even if some seats are empty.
*   **Privacy-First:** All emergency messages are encrypted, sharing your location and coach details only with your trusted contacts and railway security.

---

## 🛠️ How It Works (The Tech Stack)
You do not need an active cell tower. Instead, the system connects different everyday technologies together:

1. **The App:** Built using cross-platform tools so it runs smoothly on both Android and iOS phones.
2. **Background Mode:** The app stays alert and keeps scanning for danger signs in the background, even if you close it.
3. **No-Pairing Wireless:** Uses local Bluetooth and Wi-Fi signals to broadcast messages instantly to surrounding devices without needing a password or manual pairing.
4. **Local AI:** Uses a lightweight audio model that runs entirely on your phone’s processor to detect panic vocal frequencies without sending data to the cloud.
5. **Hardware Backbone:** Employs low-cost ESP32 mini-computers on the train ceilings to act as permanent bridges for emergency signals.

---

## 🛡️ Smart Solutions to Common Problems

*   **What if an attacker throws your phone away?**
    *   *The Fix:* The system continuously checks in on every phone. If your device suddenly disappears from the local network, it automatically alerts the railway police within 30 seconds.
*   **What if the train is half empty and phones are too far apart?**
    *   *The Fix:* The permanent ceiling sensors fill in the gaps, keeping the communication chain alive across empty coaches.
*   **What if someone triggers a fake alarm for fun?**
    *   *The Fix:* The phone's local AI checks the audio patterns to make sure it is a genuine emergency before sounding the alarm.

---

## 👥 Meet Team Edge Keepers
*   **Deshwanth Medehal** – Team Lead & Coordinator
*   **Anand Raj** – Solution & System Designer
*   **Krishankant Chaturvedi** – Technical Researcher

---

## 📄 References & Rules Followed
Our project is designed in alignment with global wireless standards (Wi-Fi Alliance NAN, Bluetooth SIG Core), on-device AI documentation (TensorFlow Lite), and legal passenger safety protocols under the **Indian Railways Act, 1989**.
