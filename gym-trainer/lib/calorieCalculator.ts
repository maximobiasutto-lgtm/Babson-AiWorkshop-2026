// TDEE and macro calculation
export function calculateTDEE(
  weight: number, // kg
  height: number, // cm
  age: number,
  gender: 'male' | 'female',
  activityLevel: number // 1.2 to 1.9
): number {
  // Mifflin-St Jeor formula for BMR
  let bmr: number;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  
  return Math.round(bmr * activityLevel);
}

export function getMacroBreakdown(tdee: number, goal: string) {
  let protein = 0, carbs = 0, fat = 0;
  
  switch (goal) {
    case 'bulking':
      protein = tdee * 0.30 / 4; // 30% protein, 4 cal per gram
      fat = tdee * 0.25 / 9; // 25% fat, 9 cal per gram
      carbs = (tdee - protein * 4 - fat * 9) / 4;
      break;
    case 'cutting':
      protein = tdee * 0.35 / 4;
      fat = tdee * 0.25 / 9;
      carbs = (tdee - protein * 4 - fat * 9) / 4;
      break;
    case 'maintenance':
      protein = tdee * 0.30 / 4;
      fat = tdee * 0.30 / 9;
      carbs = (tdee - protein * 4 - fat * 9) / 4;
      break;
    case 'recomp':
      protein = tdee * 0.33 / 4;
      fat = tdee * 0.28 / 9;
      carbs = (tdee - protein * 4 - fat * 9) / 4;
      break;
  }
  
  return {
    protein: Math.round(protein),
    carbs: Math.round(carbs),
    fat: Math.round(fat),
    total: tdee
  };
}

export function getCalorieAdjustment(goal: string): number {
  const adjustments: Record<string, number> = {
    'bulking': 300,
    'lean_bulking': 150,
    'maintenance': 0,
    'moderate_cut': -300,
    'aggressive_cut': -500,
  };
  return adjustments[goal] || 0;
}
