// Workout programs based on experience level and goals
export const WORKOUT_PROGRAMS = {
  ppl: {
    name: 'Push/Pull/Legs (PPL)',
    description: 'Classic 6-day split for balanced development',
    frequency: 6,
    days: {
      push: [
        { name: 'Bench Press', sets: 4, reps: '6-8', rest: 90 },
        { name: 'Incline Dumbbell Press', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Overhead Press', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Tricep Dips', sets: 3, reps: '8-12', rest: 60 },
        { name: 'Lateral Raises', sets: 3, reps: '12-15', rest: 45 },
        { name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: 45 },
      ],
      pull: [
        { name: 'Deadlifts', sets: 4, reps: '5-6', rest: 120 },
        { name: 'Barbell Rows', sets: 4, reps: '6-8', rest: 90 },
        { name: 'Pull-ups', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Barbell Curls', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Face Pulls', sets: 3, reps: '15-20', rest: 45 },
        { name: 'Hammer Curls', sets: 3, reps: '10-12', rest: 45 },
      ],
      legs: [
        { name: 'Squats', sets: 4, reps: '6-8', rest: 120 },
        { name: 'Romanian Deadlifts', sets: 3, reps: '8-10', rest: 90 },
        { name: 'Leg Press', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Leg Curls', sets: 3, reps: '10-12', rest: 60 },
        { name: 'Leg Extensions', sets: 3, reps: '12-15', rest: 45 },
        { name: 'Calf Raises', sets: 3, reps: '15-20', rest: 45 },
      ],
    }
  },
  upperLower: {
    name: 'Upper/Lower Split',
    description: '4-day split focusing on upper and lower body',
    frequency: 4,
    days: {
      upperA: [
        { name: 'Bench Press', sets: 4, reps: '6-8', rest: 90 },
        { name: 'Barbell Rows', sets: 4, reps: '6-8', rest: 90 },
        { name: 'Overhead Press', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Pull-ups', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Barbell Curls', sets: 3, reps: '10-12', rest: 45 },
      ],
      upperB: [
        { name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', rest: 60 },
        { name: 'T-Bar Rows', sets: 4, reps: '8-10', rest: 60 },
        { name: 'Dumbbell Lateral Raises', sets: 3, reps: '12-15', rest: 45 },
        { name: 'Cable Face Pulls', sets: 3, reps: '15-20', rest: 45 },
        { name: 'Tricep Dips', sets: 3, reps: '8-12', rest: 60 },
      ],
      lowerA: [
        { name: 'Squats', sets: 4, reps: '6-8', rest: 120 },
        { name: 'Romanian Deadlifts', sets: 3, reps: '8-10', rest: 90 },
        { name: 'Leg Press', sets: 3, reps: '10-12', rest: 60 },
        { name: 'Leg Curls', sets: 3, reps: '12-15', rest: 45 },
      ],
      lowerB: [
        { name: 'Deadlifts', sets: 4, reps: '5-6', rest: 120 },
        { name: 'Front Squats', sets: 3, reps: '8-10', rest: 90 },
        { name: 'Leg Extensions', sets: 3, reps: '12-15', rest: 45 },
        { name: 'Calf Raises', sets: 3, reps: '15-20', rest: 45 },
      ],
    }
  },
  fullBody: {
    name: 'Full Body',
    description: '3-day full body routine for all experience levels',
    frequency: 3,
    days: {
      day1: [
        { name: 'Squats', sets: 3, reps: '6-8', rest: 90 },
        { name: 'Bench Press', sets: 3, reps: '6-8', rest: 90 },
        { name: 'Barbell Rows', sets: 3, reps: '6-8', rest: 90 },
        { name: 'Overhead Press', sets: 2, reps: '8-10', rest: 60 },
        { name: 'Pull-ups', sets: 2, reps: '8-12', rest: 60 },
      ],
      day2: [
        { name: 'Deadlifts', sets: 3, reps: '5-6', rest: 120 },
        { name: 'Incline Dumbbell Press', sets: 3, reps: '8-10', rest: 60 },
        { name: 'T-Bar Rows', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Leg Press', sets: 2, reps: '10-12', rest: 60 },
        { name: 'Barbell Curls', sets: 2, reps: '10-12', rest: 45 },
      ],
      day3: [
        { name: 'Front Squats', sets: 3, reps: '8-10', rest: 90 },
        { name: 'Dumbbell Press', sets: 3, reps: '8-10', rest: 60 },
        { name: 'Lat Pulldowns', sets: 3, reps: '10-12', rest: 60 },
        { name: 'Leg Curls', sets: 2, reps: '12-15', rest: 45 },
        { name: 'Cable Flyes', sets: 2, reps: '12-15', rest: 45 },
      ],
    }
  }
};

export const BEGINNER_PROGRAMS = ['fullBody'];
export const INTERMEDIATE_PROGRAMS = ['upperLower', 'ppl'];
export const ADVANCED_PROGRAMS = ['ppl', 'upperLower'];

export function getRecommendedProgram(experience: string): string[] {
  if (experience === 'beginner') return BEGINNER_PROGRAMS;
  if (experience === 'intermediate') return INTERMEDIATE_PROGRAMS;
  return ADVANCED_PROGRAMS;
}
