# Grady: The Smart Grade Calculator

Grady is a platform for calculating and visualizing grades.  It allows users to create teams, add grades for each team member, and view the overall performance through interactive charts and tables.  This application utilizes Next.js, Clerk for authentication, Drizzle ORM for database interaction, and Recharts for data visualization.

## Features and Functionality

* **User Authentication:** Secure user authentication and authorization using Clerk.js.  Users can sign up and sign in to access the application. (See `/app/(auth)/sign-up` and `/app/(auth)/sign-in` directories)
* **Team Management:** Create, edit, and delete teams.  Each team has a name, a maximum points value, and an optional icon. (See `/app/(routes)/dash/teams` directory)
* **Grade Input:** Add individual grades for each team member, specifying the judge's name and the points awarded. (See `/app/(routes)/dash/grades/[id]/page.jsx` and `/app/(routes)/dash/grades/_components/Addgrades.jsx`)
* **Grade Editing:** Edit existing team information (name, points) and team member grades.  (See `/app/(routes)/dash/grades/[id]/page.jsx` and `/app/(routes)/dash/grades/_components/Editgrade.jsx`)
* **Grade Deletion:** Delete individual grades or entire teams. (See `/app/(routes)/dash/grades/[id]/page.jsx` and `/app/(routes)/dash/grades/_components/GradeListTable.jsx`)
* **Data Visualization:** View team performance using a bar chart showing total points and individual grades. (See `/app/(routes)/dash/_components/BarChartDash.jsx`)
* **Dashboard:** A centralized dashboard providing an overview of teams, grades, and overall performance. (See `/app/(routes)/dash/page.jsx`)


## Technology Stack

* **Frontend:** Next.js, React, Tailwind CSS, Lucide React, emoji-picker-react, class-variance-authority, clsx, tailwind-merge.
* **Backend:** Neon Database (PostgreSQL), Drizzle ORM.
* **Authentication:** Clerk.js
* **Data Visualization:** Recharts
* **UI Components:**  Custom built UI components using Radix UI primitives (see `/components/ui` directory).
* **Toast Notifications:** Sonner


## Prerequisites

* Node.js and npm (or yarn)
* A Neon Database account (for database connection - see `.env.local` for connection string example).  Note:  The provided database credentials are sensitive and should be replaced with your own.
* Clerk.js account (for authentication setup)


## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/jishusardar/Grady.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Grady
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file and add your Neon Database connection string (replace placeholders with your actual credentials):
   ```
   NEXT_PUBLIC_DATABASE_URL=postgresql://<your_db_user>:<your_db_password>@<your_db_host>/<your_db_name>?sslmode=require
   ```
5. Set up your Clerk.js application and replace any placeholder Clerk.js frontend keys in the code.

## Usage Guide

1. Run the development server:
   ```bash
   npm run dev
   ```
2. Access the application in your browser at `http://localhost:3000`.
3. Sign up or sign in using your Clerk.js account.
4. Navigate to the dashboard to view your teams, add new teams, and manage grades.



## Contributing Guidelines

Contributions are welcome! Please open an issue or submit a pull request.  Follow standard Git workflow conventions.


## Contact/Support Information

live At : https://grady-five.vercel.app/

@Team Exror
- Yugapriya Dutta
- Shanu Pal
- Soumyadeep Biswas
- Sayan Das
- Jishu Sardar
