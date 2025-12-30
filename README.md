# Learn Fast - Student Course Registration System

A high-fidelity, frontend-only Student Course Registration Web App for an Online IT Course Center built with Next.js (App Router) and Tailwind CSS.

![Learn Fast](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript)

## 📋 Overview

Learn Fast is a UI prototype for a student course registration system designed for an Online IT Course Center. This application demonstrates a clean, professional, and modern user interface with a white and blue color theme.

> **Note:** This is a frontend-only prototype with no backend, database, or API integrations. All data is static/hardcoded.

## ✨ Features

### Pages

1. **Login Page** (`/`)
   - Centered login card with email and password fields
   - Navigation to Dashboard on login
   - Link to Create Account page

2. **Create Account Page** (`/create-account`)
   - Full registration form
   - Program selection dropdown
   - Success popup modal on submission

3. **Dashboard** (`/dashboard`)
   - Welcome message with student name
   - Summary cards (Total Courses, Registered Courses, Available Programs)
   - Quick action buttons
   - Registered courses with progress bars

4. **Course List** (`/courses`)
   - IT courses displayed as cards
   - Filter by level (Beginner/Intermediate/Advanced)
   - Search functionality
   - Click on any course for detailed view

5. **Course Details** (`/courses/[id]`)
   - Comprehensive course information
   - Course overview and objectives
   - Week-by-week curriculum
   - Prerequisites and skills gained
   - Career paths

6. **Course Registration** (`/register`)
   - Select courses via checkboxes
   - Course selection summary
   - Success popup modal with navigation options

7. **Student Profile** (`/profile`)
   - Static student information display
   - Academic details and enrolled courses

8. **Feedback** (`/feedback`)
   - Feedback form with categories
   - Star rating system
   - Success popup on submission

### Available Courses

- Web Development (WD101) - 12 Weeks - Beginner
- Software Engineering (SE201) - 16 Weeks - Intermediate
- Data Science (DS301) - 14 Weeks - Intermediate
- Cyber Security (CS401) - 10 Weeks - Advanced
- Cloud Computing (CC501) - 8 Weeks - Intermediate
- Mobile App Development (MAD601) - 12 Weeks - Beginner

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons (SVG)

## 📁 Project Structure

```
learn_fast/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # Login Page
│   ├── create-account/
│   │   └── page.tsx                # Create Account Page
│   ├── dashboard/
│   │   └── page.tsx                # Dashboard
│   ├── courses/
│   │   ├── page.tsx                # Course List
│   │   └── [id]/
│   │       └── page.tsx            # Course Details
│   ├── register/
│   │   └── page.tsx                # Course Registration
│   ├── profile/
│   │   └── page.tsx                # Student Profile
│   └── feedback/
│       └── page.tsx                # Feedback Page
├── components/
│   ├── Button.tsx                  # Reusable Button Component
│   ├── CourseCard.tsx              # Course Card Component
│   ├── Navbar.tsx                  # Navigation Bar
│   └── StatCard.tsx                # Statistics Card Component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SamsudeenAshad/Learn-Fast.git
   cd learn_fast
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design

- **Theme:** White and Blue (Modern, Clean, Professional)
- **UI Style:** Minimal, Corporate, Educational SaaS
- **Typography:** Inter font family
- **Layout:** Card-based, well-spaced, responsive
- **Animations:** Smooth transitions, popup modals with bounce effects

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚠️ Constraints

This is a UI prototype only:
- ❌ No backend or database
- ❌ No real authentication
- ❌ No API integrations
- ❌ No data persistence
- ✅ Client-side navigation only
- ✅ Static/hardcoded data
- ✅ Simulated interactions (alerts, popups)

## 👤 Author

**Samsudeen Ashad**

- GitHub: [@SamsudeenAshad](https://github.com/SamsudeenAshad)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2025 Learn Fast. All rights reserved.
