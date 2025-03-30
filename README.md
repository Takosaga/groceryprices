# Pārtikas cenu salīdzināšanas portāls / Portal for comparing the prices of groceries

🚀 **Women in Tech Hackathon 2025 – Empowering Innovation & Impact!**

This project was created during the **Women in Tech Hackathon 2025**, organized by Riga TechGirls. The theme for this year – **“Automation. Impact. Security.”** – inspired us to build a solution that leverages automation 🤖, ensures security 🔐, and creates a meaningful impact 🌍.

---

## Problem Statement

### Latvian (LV)
Pārtikas cenas ir strauji kāpušas kopš 2020. gada un turpina pieaugt arī 2025. gadā. Patērētāji mēģina ietaupīt, sekojot līdzi akcijām un mainot savus iepirkšanās paradumus. Cilvēkiem aizņemtajā ikdienā noderētu rīks, kas atvieglotu cenu salīdzināšanu un palīdzētu pieņemt gudrākus iepirkšanās lēmumus.

### English (ENG)
Food prices have been rising since 2020 and continue to increase in 2025. Consumers are trying to save money by following promotions and changing their shopping habits. In busy everyday lives, a tool that facilitates price comparison and helps make smarter shopping decisions would be highly beneficial.

---

## Solution

We propose a **website** that provides the following features:
- View sales extracted brochures from all major stores.
- Search for specific products and see which store offers discounts that week.
- Create a personalized shopping list to plan visits to one or more stores.
- Create a user profile to save preferences and streamline the shopping experience.

---

## Progress So Far

- Conducted initial research on existing solutions available in the country.
- Developed broad theories on how to implement the idea.
- Built a prototype using **React** for the frontend and **Flask** for the backend.
- Created a sqlite db that has extracted prices from current grocery brochures

---
## Team
- **Līga Švarca** - Team Lead
- **Milana Bolgova** - Marketing
- **Halenur Yeşilova** - Frontend, UX
- **Elif Bicer** - Backend
- **Julia Gifford** - Industry Expert
- **Gonzalo Gamez** - Tech Lead

---
## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Flask, SQLAlchemy
- **Database**: SQLite
- **AI Model**: Gemini Flash 2.0

---
## Architecture
![](https://github.com/Takosaga/groceryprices/blob/main/docs/Website%20Diagram.png)
![](https://github.com/Takosaga/groceryprices/blob/main/docs/sequence_diagram.png)
![](https://github.com/Takosaga/groceryprices/blob/main/docs/db.png)
---

## How to Run the Project

### Backend
1. Navigate to the `backend/` directory.
2. Create a virtual environment:
   ```sh
   python -m venv venv
3. Activate the virtual environment:
   - **Windows**: `venv\Scripts\activate`
   - **Unix/MacOS**: `source venv/bin/activate`

4. Install dependencies:
   ```sh
   pip install -r requirements.txt

5. Run the application:
   ```bash
   python app.py
   ```
   The server will start at `http://localhost:5000`.

### Frontend
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## Demo
![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWljenJkajY0MXJkem0yb2I0eGNsZjR1bWEyNHVzMjBxMWhlZXR2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T1OchynFoXc0nSN7O5/giphy.gif)

---
## Acknowledgments

This project was made possible by the **Women in Tech Hackathon 2025** and the support of **Riga TechGirls**. Special thanks to the mentors and organizers for their guidance and inspiration.

🔥 Ready to innovate? Let’s build the future together! 🚀💜

