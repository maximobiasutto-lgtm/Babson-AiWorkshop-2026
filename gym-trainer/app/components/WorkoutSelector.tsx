'use client';

import React from 'react';
import { Card, Button } from './ui';
import { WORKOUT_PROGRAMS, getRecommendedProgram } from '@/lib/workoutPrograms';
import { UserProfile } from '@/lib/types';

interface WorkoutSelectorProps {
  profile: UserProfile;
  onSelectWorkout: (program: string, dayType: string) => void;
  onBack: () => void;
}

export function WorkoutSelector({ profile, onSelectWorkout, onBack }: WorkoutSelectorProps) {
  const recommendedPrograms = getRecommendedProgram(profile.experience);
  const allPrograms = Object.entries(WORKOUT_PROGRAMS);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-4">
            ← Back to Dashboard
          </Button>
          <h1 className="text-4xl font-bold text-gray-800">Select Your Workout</h1>
          <p className="text-gray-600 mt-2">Choose a program suited for your experience level: <span className="font-semibold capitalize">{profile.experience}</span></p>
        </div>

        <div className="space-y-8">
          {allPrograms.map(([key, program]) => {
            const isRecommended = recommendedPrograms.includes(key);
            const days = Object.entries(program.days);

            return (
              <Card key={key} className={isRecommended ? 'border-2 border-primary' : ''}>
                {isRecommended && (
                  <div className="mb-4 inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold">
                    ✓ Recommended
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2">{program.name}</h2>
                <p className="text-gray-600 mb-6">{program.description} • {program.frequency} days/week</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {days.map(([dayType, exercises]) => (
                    <div
                      key={dayType}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border-2 border-transparent hover:border-primary transition"
                    >
                      <h3 className="font-bold text-lg mb-3 capitalize">{dayType.replace(/([A-Z])/g, ' $1')}</h3>
                      <div className="space-y-1 mb-4 text-sm text-gray-700">
                        {exercises.slice(0, 4).map((ex, idx) => (
                          <p key={idx}>• {ex.name}</p>
                        ))}
                        {exercises.length > 4 && (
                          <p className="text-gray-500 text-xs">+{exercises.length - 4} more</p>
                        )}
                      </div>
                      <Button
                        onClick={() => onSelectWorkout(key, dayType)}
                        className="w-full text-sm"
                      >
                        Start Workout
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
