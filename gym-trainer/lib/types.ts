// Type definitions
export interface UserProfile {
  name: string;
  age: number;
  weight: number; // kg
  height: number; // cm
  gender: 'male' | 'female';
  experience: 'beginner' | 'intermediate' | 'advanced';
  sports: string[];
  goals: string[];
  activityLevel: number; // 1.2 to 1.9
}

export interface WorkoutSession {
  id: string;
  date: string;
  program: string;
  dayType: string;
  exercises: ExerciseLog[];
}

export interface ExerciseLog {
  name: string;
  sets: SetLog[];
}

export interface SetLog {
  reps: number;
  weight: number;
  rpe?: number; // Rate of Perceived Exertion 1-10
}

export interface UserData {
  profile: UserProfile;
  tdee: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
    total: number;
  };
  workoutSessions: WorkoutSession[];
  createdAt: string;
  updatedAt: string;
}
