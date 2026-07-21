'use client';

import React, { useState } from 'react';
import { Card, Button, Input, Checkbox } from './ui';
import { WorkoutSession, ExerciseLog, SetLog } from '@/lib/types';
import { Trash2 } from 'lucide-react';

interface WorkoutLoggerProps {
  program: string;
  dayType: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: string;
    rest: number;
  }>;
  onSave: (session: WorkoutSession) => void;
  onCancel: () => void;
}

export function WorkoutLogger({
  program,
  dayType,
  exercises,
  onSave,
  onCancel,
}: WorkoutLoggerProps) {
  const [logs, setLogs] = useState<ExerciseLog[]>(
    exercises.map(ex => ({
      name: ex.name,
      sets: Array(ex.sets).fill(null).map(() => ({ reps: 0, weight: 0 })),
    }))
  );

  const handleSetChange = (exerciseIdx: number, setIdx: number, field: 'reps' | 'weight', value: number) => {
    setLogs(prev => {
      const newLogs = [...prev];
      newLogs[exerciseIdx].sets[setIdx] = {
        ...newLogs[exerciseIdx].sets[setIdx],
        [field]: value,
      };
      return newLogs;
    });
  };

  const handleSave = () => {
    const session: WorkoutSession = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      program,
      dayType,
      exercises: logs,
    };
    onSave(session);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">{dayType} Workout</h2>
            <p className="text-gray-600">{program}</p>
          </div>
        </div>

        <div className="space-y-6">
          {logs.map((exercise, exIdx) => (
            <div key={exIdx} className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-lg mb-3">{exercise.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {exercise.sets.map((set, setIdx) => (
                  <div key={setIdx} className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600 font-semibold mb-2">Set {setIdx + 1}</p>
                    <Input
                      label="Reps"
                      type="number"
                      value={set.reps}
                      onChange={(v) => handleSetChange(exIdx, setIdx, 'reps', parseInt(v as string) || 0)}
                      placeholder="Reps"
                    />
                    <Input
                      label="Weight (kg)"
                      type="number"
                      value={set.weight}
                      onChange={(v) => handleSetChange(exIdx, setIdx, 'weight', parseFloat(v as string) || 0)}
                      placeholder="Weight"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8 pt-6 border-t">
          <Button variant="outline" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex-1">
            Save Workout ✓
          </Button>
        </div>
      </Card>
    </div>
  );
}
