'use client';

import React from 'react';
import { Card, Button } from './ui';
import { UserProfile } from '@/lib/types';
import { calculateTDEE, getMacroBreakdown } from '@/lib/calorieCalculator';
import { suggestMeals } from '@/lib/mealSuggestions';

interface DashboardProps {
  profile: UserProfile;
  tdee: number;
  macros: any;
  sessionsCount: number;
  onLogWorkout: () => void;
  onViewHistory: () => void;
}

export function Dashboard({
  profile,
  tdee,
  macros,
  sessionsCount,
  onLogWorkout,
  onViewHistory,
}: DashboardProps) {
  const primaryGoal = profile.goals[0] || 'maintenance';
  const meals = suggestMeals(primaryGoal, tdee, profile.weight);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome, {profile.name}! 💪</h1>
          <p className="text-gray-600 text-lg">Your personalized fitness journey starts here</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Weight</p>
              <p className="text-3xl font-bold text-primary">{profile.weight}</p>
              <p className="text-gray-500 text-xs">kg</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Experience</p>
              <p className="text-3xl font-bold text-secondary capitalize">{profile.experience}</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Workouts Logged</p>
              <p className="text-3xl font-bold text-accent">{sessionsCount}</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Daily TDEE</p>
              <p className="text-3xl font-bold text-primary">{tdee}</p>
              <p className="text-gray-500 text-xs">calories</p>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Nutrition Info */}
          <Card className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">📊 Nutrition Target</h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-4">
              <p className="text-gray-600 mb-2">Daily Calorie Target</p>
              <p className="text-4xl font-bold text-primary">{tdee} calories</p>
              <p className="text-sm text-gray-500 mt-2">Based on your goal: <span className="font-semibold capitalize">{primaryGoal}</span></p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Protein</p>
                <p className="text-2xl font-bold text-blue-600">{macros.protein}g</p>
                <p className="text-xs text-gray-500 mt-1">~30% of calories</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Carbs</p>
                <p className="text-2xl font-bold text-yellow-600">{macros.carbs}g</p>
                <p className="text-xs text-gray-500 mt-1">~45% of calories</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Fat</p>
                <p className="text-2xl font-bold text-red-600">{macros.fat}g</p>
                <p className="text-xs text-gray-500 mt-1">~25% of calories</p>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">⚡ Quick Actions</h2>
            <Button onClick={onLogWorkout} className="w-full mb-3">
              📝 Log Today's Workout
            </Button>
            <Button variant="secondary" onClick={onViewHistory} className="w-full">
              📈 View History
            </Button>
            <Button variant="outline" className="w-full mt-3">
              ⚙️ Edit Profile
            </Button>
          </Card>
        </div>

        {/* Meal Suggestions */}
        <Card>
          <h2 className="text-2xl font-bold mb-4">🍽️ Meal Suggestions</h2>
          <p className="text-gray-600 mb-4">Sample meals for your goal: <span className="font-semibold capitalize">{primaryGoal}</span></p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meals.map((meal, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-gray-800">{meal}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
