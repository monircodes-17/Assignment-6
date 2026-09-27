import type { Workout } from "@/types/workout";

export type SortOption =
| "duration"
| "calories"
| "rating";

export const sortWorkouts = (
workouts: Workout[],
sortBy: SortOption
): Workout[] => {
if (!Array.isArray(workouts)) {
return [];
}

return [...workouts].sort((a, b) => {
switch (sortBy) {
case "duration":
// ছোট → বড়
return a.duration - b.duration;


  case "calories":
    // ছোট → বড়
    return a.caloriesBurned - b.caloriesBurned;

  case "rating":
    // বড় → ছোট
    return b.rating - a.rating;

  default:
    return 0;
}


});
};
