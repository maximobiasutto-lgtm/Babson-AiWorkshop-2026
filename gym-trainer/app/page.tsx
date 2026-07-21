'use client';

import React, { useState, useEffect } from 'react';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { WorkoutSelector } from './components/WorkoutSelector';
import { WorkoutLogger } from './components/WorkoutLogger';
import { Card, Button } from './components/ui';
import { UserProfile, UserData, WorkoutSession } from '@/lib/types';
import { saveUserData, getUserData, hasUserData } from '@/lib/storage';
import { calculateTDEE, getMacroBreakdown } from '@/lib/calorieCalculator';
import { WORKOUT_PROGRAMS } from '@/lib/workoutPrograms';

type Page = 'onboarding' | 'dashboard' | 'workout-selector' | 'workout-logger' | 'history';

export default function Home() {
  const [page, setPage] = useState<Page>('onboarding');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<{ program: string; dayType: string } | null>(null);
  const [loading, setLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    if (hasUserData()) {
      const data = getUserData();
      setUserData(data);
      setPage('dashboard');
    }
    setLoading(false);
  }, []);

  const handleOnboardingComplete = (profile: UserProfile) => {
    const tdee = calculateTDEE(
      profile.weight,
      profile.height,
      profile.age,
      profile.gender,
      profile.activityLevel
    );

    const macros = getMacroBreakdown(tdee, profile.goals[0]?.toLowerCase() || 'maintenance');

    const newUserData: UserData = {
      profile,
      tdee,
      macros,
      workoutSessions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    saveUserData(newUserData);
    setUserData(newUserData);
    setPage('dashboard');
  };

  const handleSelectWorkout = (program: string, dayType: string) => {
    setSelectedWorkout({ program, dayType });
    setPage('workout-logger');
  };

  const handleWorkoutSave = (session: WorkoutSession) => {
    if (!userData) return;

    const updated: UserData = {
      ...userData,
      workoutSessions: [...userData.workoutSessions, session],
      updatedAt: new Date().toISOString(),
    };

    saveUserData(updated);
    setUserData(updated);
    setPage('dashboard');
    setSelectedWorkout(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-accent">
        <div className="text-center text-white">
          <p className="text-4xl mb-4">💪</p>
          <p className="text-2xl font-bold">Loading your fitness journey...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (page === 'workout-selector') {
    return (
      <WorkoutSelector
        profile={userData.profile}
        onSelectWorkout={handleSelectWorkout}
        onBack={() => setPage('dashboard')}
      />
    );
  }

  if (page === 'workout-logger' && selectedWorkout) {
    const program = WORKOUT_PROGRAMS[selectedWorkout.program as keyof typeof WORKOUT_PROGRAMS];
    const exercises = program.days[selectedWorkout.dayType as keyof typeof program.days] || [];

    return (
      <WorkoutLogger
        program={selectedWorkout.program}
        dayType={selectedWorkout.dayType}
        exercises={exercises}
        onSave={handleWorkoutSave}
        onCancel={() => {
          setPage('workout-selector');
          setSelectedWorkout(null);
        }}
      />
    );
  }

  if (page === 'history') {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" onClick={() => setPage('dashboard')} className="mb-8">
            ← Back to Dashboard
          </Button>
          <Card>
            <h1 className="text-3xl font-bold mb-6">Workout History</h1>
            {userData.workoutSessions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No workouts logged yet. Start your first workout!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {userData.workoutSessions.reverse().map((session, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-4 py-3 bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg capitalize">{session.dayType}</h3>
                        <p className="text-sm text-gray-600">{session.program}</p>
                      </div>
                      <p className="text-sm text-gray-500">{session.date}</p>
                    </div>
                    <div className="mt-3 space-y-1">
                      {session.exercises.map((ex, exIdx) => (
                        <div key={exIdx} className="text-sm">
                          <p className="font-semibold">{ex.name}</p>
                          <p className="text-gray-600 text-xs">
                            {ex.sets.map((s, setIdx) => `Set ${setIdx + 1}: ${s.reps}x${s.weight}kg`).join(' | ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <Dashboard
      profile={userData.profile}
      tdee={userData.tdee}
      macros={userData.macros}
      sessionsCount={userData.workoutSessions.length}
      onLogWorkout={() => setPage('workout-selector')}
      onViewHistory={() => setPage('history')}
    />
  );
}
