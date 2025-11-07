# Hospital Management System

## Problem Statement
Hospitals often struggle with manual record-keeping, leading to misplaced files, slow patient registration, and billing errors. This project aims to develop a **Hospital Management System** that digitizes patient registration, doctor scheduling, billing, pharmacy, administration, reports, ADT, prescriptions, lab orders, suppliers, and appointment booking to improve operational efficiency and reduce paperwork.

---

## Objective
To design and implement a digital system that enhances hospital operations by integrating various departments — enabling quick data access, automated workflows, and secure record management. The goal is to streamline administrative and clinical tasks while minimizing human error and improving patient care efficiency.

---

## Technologies and Tools Used

### Frontend
- **React** – For building dynamic UI components and managing application state.
- **Vite** – Development server and production build tool (uses Rollup/esbuild internally).
- **React Router (HashRouter)** – Enables client-side routing through URL hashes.
- **Axios** – For making HTTP requests to backend APIs.
- **JavaScript (ES Modules), JSX** – Core application logic and component structure.

### Backend
- **Node.js + Express** – RESTful API server handling data and client requests.
- **File-based JSON store** – Data persisted under `backend/data/*.json`, providing lightweight data storage.

### Testing
- **Vitest** – Fast and modern test runner.
- **@testing-library/react** – Utilities for testing React components.
- **@testing-library/jest-dom** – Provides custom DOM matchers for better assertions.
- **jsdom** – Simulates a browser-like environment for testing.
- **Stryker Mutator + vitest-runner** – Used for mutation testing to evaluate test quality.

### Build / Tooling
- **npm** – Package manager for dependencies and scripts.
- **Vite build** – Handles production bundling.
- **ESBuild / Rollup (via Vite)** – Used for transpilation and code bundling.

### Version Management
- **Git** – Version control for tracking changes, branches, and commits.
- **.gitignore** – Excludes unnecessary files like:
  - `node_modules/`
  - `dist/`
  - `coverage/`
  - `reports/`
  - `.stryker-tmp/`
  - `.vite/`
  - `*.log`
  - `.env`

### OS / Environment
- **Windows + PowerShell / CMD** – Used for local development and running build commands.

---

## Project Structure / Relevant Tech Choices
- **Modular Pages:** Organized modules for:
  - Patients  
  - Doctors  
  - Appointments  
  - Billing  
  - Reports  
  - ADT  
  - Prescriptions  
  - Lab Orders  
- **API Abstraction:**  
  `src/api.js` contains generic CRUD helper methods for consistent API interactions across components.

---

## System Design and Implementation

### 1. **Architecture Overview**
The system follows a **client-server architecture**:
- The **frontend (React + Vite)** handles user interactions and displays information dynamically.
- The **backend (Node.js + Express)** provides RESTful APIs to perform CRUD operations for all modules.
- Data is stored in **JSON files** within the backend, simulating database tables for patients, doctors, appointments, and billing.

The design ensures modularity — each module communicates with the API layer independently, promoting scalability and easier debugging.

### 2. **Data Flow**
1. The user interacts with the **frontend** (e.g., registering a patient or booking an appointment).  
2. The frontend sends API requests via **Axios** to the backend.  
3. The **Express server** processes the request, updates the respective JSON data file, and sends a response back.  
4. The **React interface** updates dynamically without reloading, providing a seamless user experience.  

### 3. **Core Modules**
- **Patient Management:** Stores and manages patient registration, history, and demographic details.  
- **Doctor Scheduling:** Manages doctor availability and appointments.  
- **Billing Module:** Automates billing calculations and invoice generation.  
- **Pharmacy & Suppliers:** Tracks medicines, stock, and supplier details.  
- **Reports & ADT:** Generates admission, discharge, and transfer reports for administration.  
- **Lab & Prescriptions:** Records lab orders and prescribed medications.  

### 4. **Implementation Strategy**
- Modular components were developed independently and later integrated.  
- API endpoints were designed using REST principles for consistency.  
- Vite and ESBuild optimized the frontend for faster rendering and performance.  
- The system was tested with **Vitest** and **Stryker Mutator** to ensure functionality and reliability.  

### 5. **Security and Reliability**
- Controlled access through modular endpoints.
- Input validation to prevent data corruption.
- Separation of concerns ensures that UI, logic, and data layers remain independent.

---

##  Features
-  Digital patient registration and record management  
-  Doctor scheduling and appointment booking  
-  Pharmacy and supplier management  
-  Billing and administrative automation  
-  Laboratory and prescription tracking  
-  Report generation and ADT management  
-  Modular architecture for scalability and maintenance  

---

