'use client';

import React, { useState } from 'react';
import { Card, Input, Select, Button, Checkbox } from './ui';
import { UserProfile } from '@/lib/types';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<Partial<UserProfile>>({
    sports: [],
    goals: [],
  });

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      onComplete(profile as UserProfile);
    }
  };

  const toggleSport = (sport: string) => {
    setProfile(p => ({
      ...p,
      sports: p.sports?.includes(sport) 
        ? p.sports.filter(s => s !== sport)
        : [...(p.sports || []), sport]
    }));
  };

  const toggleGoal = (goal: string) => {
    setProfile(p => ({
      ...p,
      goals: p.goals?.includes(goal) 
        ? p.goals.filter(g => g !== goal)
        : [...(p.goals || []), goal]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-accent p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">💪 Gym Trainer</h1>
          <p className="text-lg opacity-90">Your Personal Fitness Guide</p>
        </div>

        <Card className="mb-8">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Step {step} of 5</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Let's Get Started!</h2>
              <p className="text-gray-600 mb-6">Tell us about yourself</p>
              <Input
                label="Name"
                value={profile.name || ''}
                onChange={(v) => setProfile(p => ({ ...p, name: v as string }))}
                placeholder="Your name"
                required
              />
              <Input
                label="Age"
                type="number"
                value={profile.age || ''}
                onChange={(v) => setProfile(p => ({ ...p, age: parseInt(v as string) }))}
                placeholder="Your age"
                required
              />
              <Select
                label="Gender"
                value={profile.gender || ''}
                onChange={(v) => setProfile(p => ({ ...p, gender: v as 'male' | 'female' }))}
                options={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                ]}
                required
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Body Measurements</h2>
              <Input
                label="Weight (kg)"
                type="number"
                value={profile.weight || ''}
                onChange={(v) => setProfile(p => ({ ...p, weight: parseFloat(v as string) }))}
                placeholder="e.g., 75"
                required
              />
              <Input
                label="Height (cm)"
                type="number"
                value={profile.height || ''}
                onChange={(v) => setProfile(p => ({ ...p, height: parseFloat(v as string) }))}
                placeholder="e.g., 180"
                required
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gym Experience</h2>
              <Select
                label="Experience Level"
                value={profile.experience || ''}
                onChange={(v) => setProfile(p => ({ ...p, experience: v as 'beginner' | 'intermediate' | 'advanced' }))}
                options={[
                  { label: 'Beginner (0-1 year)', value: 'beginner' },
                  { label: 'Intermediate (1-3 years)', value: 'intermediate' },
                  { label: 'Advanced (3+ years)', value: 'advanced' },
                ]}
                required
              />
              <Select
                label="Activity Level"
                value={profile.activityLevel || ''}
                onChange={(v) => setProfile(p => ({ ...p, activityLevel: parseFloat(v as string) }))}
                options={[
                  { label: 'Sedentary (1.2)', value: '1.2' },
                  { label: 'Lightly active (1.375)', value: '1.375' },
                  { label: 'Moderately active (1.55)', value: '1.55' },
                  { label: 'Very active (1.725)', value: '1.725' },
                  { label: 'Extremely active (1.9)', value: '1.9' },
                ]}
                required
              />
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Sports Background</h2>
              <p className="text-gray-600 mb-4">Any sports you've done before? (Optional)</p>
              {['Football', 'Basketball', 'Soccer', 'Swimming', 'Martial Arts', 'Cycling', 'Running', 'Yoga'].map(sport => (
                <Checkbox
                  key={sport}
                  label={sport}
                  checked={profile.sports?.includes(sport) || false}
                  onChange={() => toggleSport(sport)}
                />
              ))}
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
              <p className="text-gray-600 mb-4">What are you training for?</p>
              {['Bulking (Muscle Gain)', 'Cutting (Fat Loss)', 'Leaning Out', 'Getting Stronger', 'Maintenance', 'Athletic Performance'].map(goal => (
                <Checkbox
                  key={goal}
                  label={goal}
                  checked={profile.goals?.includes(goal) || false}
                  onChange={() => toggleGoal(goal)}
                />
              ))}
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
            >
              ← Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && (!profile.name || !profile.age || !profile.gender)) ||
                (step === 2 && (!profile.weight || !profile.height)) ||
                (step === 3 && (!profile.experience || !profile.activityLevel)) ||
                (step === 5 && (!profile.goals || profile.goals.length === 0))
              }
            >
              {step === 5 ? 'Complete' : 'Next →'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
