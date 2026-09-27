# FitLog — Workout Library

FitLog is a dark, responsive workout library and planning application built with Next.js, TypeScript, and Tailwind CSS. Users can browse workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track completed exercises.

## Live Site

https://fitlog-assignment-6-sigma.vercel.app/

## GitHub Repository

https://github.com/monircodes-17/Assignment-6

## Features

* Browse all available workouts from the FitLog API
* View detailed workout information
* Add workouts to Today's Plan
* Maximum 5 workouts in Today's Plan
* Save workouts for later
* Remove workouts from Today's Plan or Saved
* Mark workouts as completed
* Live workout statistics for exercises, minutes, and calories
* Sort workouts by Duration, Calories, or Rating
* Responsive design for mobile, tablet, and desktop
* Loading, empty, error, and 404 states
* Toast notifications for user actions
* LocalStorage persistence for plan, saved workouts, and completed workouts
* Dynamic workout detail pages

## Technologies Used

* Next.js
* React.js
* TypeScript
* Tailwind CSS
* React Context API
* Lucide React
* React Toastify
* REST API
* LocalStorage
* Vercel

## API

FitLog uses the following API:

All Workouts:
https://api.abcz.workers.dev/api/fitlog

Single Workout:
https://api.abcz.workers.dev/api/fitlog/:id

Alternative API:

All Workouts:
https://api.api-store.workers.dev/api/fitlog

Single Workout:
https://api.api-store.workers.dev/api/fitlog/:id

## Main Pages

### Home

Displays the hero section and the complete workout library.

### Workout Details

Shows workout image, description, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, and instructions.

### My Plan

Allows users to manage Today's Plan and Saved workouts, view statistics, mark workouts as completed, and remove workouts.

### 404 Page

Displays a custom not-found page for invalid routes or workout IDs.

## Project Structure

```text
src/
├── app/
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WorkoutLibrary.tsx
│   ├── WorkoutCard.tsx
│   ├── WorkoutDetails.tsx
│   ├── WorkoutStats.tsx
│   ├── SortDropdown.tsx
│   ├── EmptyState.tsx
│   ├── LoadingSpinner.tsx
│   ├── ToastProvider.tsx
│   └── Footer.tsx
│
├── context/
│   └── PlanContext.tsx
│
├── lib/
│   ├── api.ts
│   ├── storage.ts
│   └── utils.ts
│
└── types/
    └── workout.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/monircodes-17/Assignment-6.git
```

Go to the project directory:

```bash
cd Assignment-6
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Author

**Md. Mehidy Hasan Monir**

Built as part of Programming Hero Assignment 6.
