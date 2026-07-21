# Gym Trainer - Personal Fitness Guide

A comprehensive gym tracking and personal trainer app built with Next.js.

## Features

✅ **User Onboarding Wizard** - Capture profile, measurements, experience level, and fitness goals
✅ **Workout Plan Generator** - Generates personalized workout splits (PPL, Upper/Lower, Full Body)
✅ **Workout Tracking** - Log exercises with sets, reps, and weight
✅ **Calorie Calculator** - Calculate TDEE and macro breakdowns based on goals
✅ **Meal Suggestions** - Get meal recommendations based on your fitness goals
✅ **Progress Dashboard** - View stats and workout history
✅ **Local Storage** - All data saved in browser (no backend needed)

## Getting Started

### Installation

```bash
cd gym-trainer
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Local Storage** - Data persistence

## App Structure

- `/app` - Next.js app directory
  - `/components` - React components
  - `/api` - API routes
  - `page.tsx` - Main application
  - `layout.tsx` - Root layout
- `/lib` - Utility functions and types
  - `workoutPrograms.ts` - Workout program definitions
  - `calorieCalculator.ts` - TDEE and macro calculations
  - `mealSuggestions.ts` - Meal recommendation database
  - `types.ts` - TypeScript type definitions
  - `storage.ts` - Local storage utilities

## Features Breakdown

### 1. Onboarding
- Step-by-step wizard to collect user information
- Height, weight, age, gender, experience level
- Previous sports background
- Fitness goals

### 2. Workout Programs
- **PPL (Push/Pull/Legs)** - 6-day split
- **Upper/Lower** - 4-day split  
- **Full Body** - 3-day split
- Programs tailored by experience level

### 3. Workout Logging
- Log sets, reps, and weight for each exercise
- Automatic date tracking
- View workout history

### 4. Nutrition
- TDEE calculated using Mifflin-St Jeor formula
- Macro breakdown (Protein, Carbs, Fats)
- Adjusted for different goals:
  - Bulking: +300 cal surplus
  - Lean Bulking: +150 cal surplus
  - Maintenance: 0 cal
  - Moderate Cut: -300 cal deficit
  - Aggressive Cut: -500 cal deficit
- Meal suggestions based on goals

### 5. Dashboard
- Quick stats overview
- Daily calorie and macro targets
- Suggested meals
- Quick action buttons
- Workout history

## Data Storage

User data is stored in browser's localStorage:
- User profile information
- TDEE and macros
- Workout sessions
- Exercise logs

To clear all data, use browser DevTools:
```javascript
localStorage.removeItem('gymTrainerUserData')
```

## Future Enhancements

- Backend database for multi-device sync
- AI-powered workout customization
- Social features (share progress, compare stats)
- Mobile app
- Wearable integration
- Advanced analytics and progress charts
- Video demonstrations for exercises
