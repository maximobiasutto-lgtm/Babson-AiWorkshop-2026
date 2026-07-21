// Meal suggestions based on goals and macros
export const MEAL_DATABASE = {
  protein: [
    { name: 'Chicken Breast', serving: '100g', protein: 31, carbs: 0, fat: 3.6, calories: 165 },
    { name: 'Ground Beef', serving: '100g', protein: 26, carbs: 0, fat: 11, calories: 217 },
    { name: 'Salmon', serving: '100g', protein: 25, carbs: 0, fat: 13, calories: 208 },
    { name: 'Eggs', serving: '1 large', protein: 6, carbs: 0.6, fat: 5, calories: 78 },
    { name: 'Greek Yogurt', serving: '100g', protein: 10, carbs: 3.6, fat: 0.4, calories: 59 },
    { name: 'Tuna (canned)', serving: '100g', protein: 29, carbs: 0, fat: 1, calories: 144 },
    { name: 'Cottage Cheese', serving: '100g', protein: 11, carbs: 3.4, fat: 4.3, calories: 103 },
    { name: 'Turkey Breast', serving: '100g', protein: 29, carbs: 0, fat: 1.3, calories: 135 },
  ],
  carbs: [
    { name: 'White Rice', serving: '100g', protein: 2.7, carbs: 28, fat: 0.3, calories: 130 },
    { name: 'Sweet Potato', serving: '100g', protein: 1.6, carbs: 20, fat: 0.1, calories: 86 },
    { name: 'Oats', serving: '50g', protein: 5, carbs: 27, fat: 3, calories: 150 },
    { name: 'Brown Rice', serving: '100g', protein: 2.6, carbs: 23, fat: 0.9, calories: 111 },
    { name: 'Banana', serving: '1 medium', protein: 1.3, carbs: 27, fat: 0.3, calories: 105 },
    { name: 'Whole Wheat Bread', serving: '1 slice', protein: 4, carbs: 14, fat: 1, calories: 80 },
    { name: 'Pasta', serving: '100g', protein: 13, carbs: 71, fat: 1.1, calories: 371 },
    { name: 'Quinoa', serving: '100g', protein: 8, carbs: 39, fat: 4, calories: 222 },
  ],
  fats: [
    { name: 'Olive Oil', serving: '1 tbsp', protein: 0, carbs: 0, fat: 14, calories: 120 },
    { name: 'Almonds', serving: '28g', protein: 6, carbs: 6, fat: 14, calories: 164 },
    { name: 'Avocado', serving: '100g', protein: 3, carbs: 9, fat: 15, calories: 160 },
    { name: 'Peanut Butter', serving: '2 tbsp', protein: 8, carbs: 7, fat: 16, calories: 188 },
    { name: 'Coconut Oil', serving: '1 tbsp', protein: 0, carbs: 0, fat: 14, calories: 117 },
    { name: 'Walnuts', serving: '28g', protein: 4.3, carbs: 3.9, fat: 18.5, calories: 185 },
  ],
};

interface Meal {
  name: string;
  serving: string;
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

export function suggestMeals(goal: string, tdee: number, weight: number): string[] {
  const suggestions: string[] = [];
  
  if (goal === 'bulking' || goal === 'lean_bulking') {
    suggestions.push('🍗 Grilled Chicken Breast with Brown Rice and Broccoli');
    suggestions.push('🥩 Ground Beef with Sweet Potato and Veggies');
    suggestions.push('🍌 Oatmeal with Banana, Peanut Butter, and Almonds');
    suggestions.push('🥚 Egg Scramble with Whole Wheat Toast and Salmon');
    suggestions.push('🍚 Salmon with Quinoa and Mixed Vegetables');
  }
  
  if (goal === 'cutting' || goal === 'moderate_cut' || goal === 'aggressive_cut') {
    suggestions.push('🍗 Chicken Breast with Steamed Broccoli and Brown Rice');
    suggestions.push('🐟 Tuna with Green Salad and Olive Oil');
    suggestions.push('🥚 Egg Whites with Oatmeal and Berries');
    suggestions.push('🥒 Turkey Breast with Sweet Potato and Asparagus');
    suggestions.push('🥬 Grilled Fish with Quinoa and Mixed Greens');
  }
  
  if (goal === 'maintenance' || goal === 'recomp') {
    suggestions.push('🍗 Balanced Chicken Meal with Rice and Veggies');
    suggestions.push('🥩 Lean Beef with Sweet Potato and Salad');
    suggestions.push('🍌 Greek Yogurt Parfait with Granola and Berries');
    suggestions.push('🍚 Fish with Brown Rice and Roasted Vegetables');
    suggestions.push('🥚 Scrambled Eggs with Whole Wheat Toast and Avocado');
  }
  
  return suggestions;
}

export function getMealExample(): string {
  return `
Example Daily Meal Plan:
• Breakfast: Oatmeal (50g) + Banana + 2 tbsp Peanut Butter
• Snack: Greek Yogurt (200g) + Almonds (28g)
• Lunch: Chicken Breast (200g) + Brown Rice (150g) + Broccoli (200g)
• Pre-Workout: Banana + Whey Protein Shake
• Post-Workout: Chicken (150g) + White Rice (100g)
• Dinner: Salmon (180g) + Sweet Potato (150g) + Asparagus (150g)
• Evening Snack: Cottage Cheese (100g)
  `;
}
