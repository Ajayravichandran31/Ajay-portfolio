# Full-Stack Developer Portfolio

A dynamic, fully responsive personal portfolio website designed to showcase professional projects, technical skills, and experience. This application is built using a modern full-stack architecture with a decoupled frontend and backend.

## 🚀 Live Demo

Check out the live portfolio:

👉 [View Live Portfolio](https://ajay-portfolio-nine-gold.vercel.app/)

---

## 🛠️ Tech Stack

### Frontend
* **React.js** – UI components, state management, and routing.
* **CSS3 / Tailwind CSS** – Responsive styling and modern UI layouts.

### Backend
* **Java Spring Boot** – RESTful API development, security, and business logic.
* **Spring Data JPA** – Object-Relational Mapping (ORM) for database interactions.

### Database & Hosting
* **MySQL** – Relational database for storing project details, experience data, and contact messages.
* **Vercel** – Frontend hosting and deployment.

---

## ✨ Features
* **Dynamic Content Management** – Pulls projects, skills, and timeline experiences dynamically from the MySQL database via the Spring Boot API.
* **Interactive Contact Form** – Allows visitors to send messages directly, storing them in the backend database.
* **Responsive Design** – Optimized for seamless viewing across mobile, tablet, and desktop screens.
* **Project Showcase** – Filterable categories to display different types of development work (e.g., Frontend, Backend, Full-stack).

---

## 📂 Project Structure

```text
Ajay-portfolio/
│
├── frontend/               # React application
│   ├── public/
│   └── src/
│       ├── components/     # Reusable UI components (Navbar, Footer, ProjectCard)
│       ├── pages/          # Page views (Home, About, Projects, Contact)
│       └── services/       # API call configurations (Axios/Fetch)
│
└── Backend/                # Spring Boot application
    ├── src/main/java/      # Java source code
    │   └── com/portfolio/  # Controllers, Services, Models, and Repositories
    └── src/main/resources/ # Application configurations (application.properties)
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
* **Node.js** (v16 or higher)
* **Java Development Kit (JDK)** (v17 or higher)
* **Maven**
* **MySQL Server**

### 1. Database Setup
1. Open your MySQL terminal or workbench and create a new database:
   ```sql
   CREATE DATABASE portfolio_db;
   ```
2. Update the database credentials in `Backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
   spring.datasource.username=YOUR_MYSQL_USERNAME
   spring.datasource.password=YOUR_MYSQL_PASSWORD
   spring.jpa.hibernate.ddl-auto=update
   ```

### 2. Backend Installation (Spring Boot)
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Build and run the application using Maven:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
The backend server should now be running locally at `http://localhost:8080`.

### 3. Frontend Installation (React)
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm start
   ```
The frontend should now open automatically in your browser at `http://localhost:3000`.

---

## 🔒 License
This project is open-source and available under the [MIT License](LICENSE).
