"use client";

import type { Workout } from "@/types/workout";

interface WorkoutStatsProps {
plan?: Workout[];
}

export default function WorkoutStats({
plan = [],
}: WorkoutStatsProps) {
const totalExercises = plan.length;

const totalMinutes = plan.reduce(
(total, workout) =>
total +
(typeof workout.duration === "number" &&
Number.isFinite(workout.duration)
? workout.duration
: 0),
0
);

const totalCalories = plan.reduce(
(total, workout) =>
total +
(typeof workout.caloriesBurned === "number" &&
Number.isFinite(workout.caloriesBurned)
? workout.caloriesBurned
: 0),
0
);

return ( <div className="mb-8 grid grid-cols-3 gap-3 rounded-xl border border-[#1C1F26] bg-[#15171C] p-4 sm:gap-4 sm:p-5 lg:p-6"> <div> <p className="text-xs font-medium text-gray-400 sm:text-sm">
Exercises </p>

    <p className="mt-1 font-oswald text-2xl font-extrabold text-[#CCFF00] sm:text-3xl lg:text-4xl">
      {totalExercises}
    </p>
  </div>

  <div className="border-l border-[#1C1F26] pl-3 sm:pl-5 lg:pl-6">
    <p className="text-xs font-medium text-gray-400 sm:text-sm">
      Minutes
    </p>

    <p className="mt-1 font-oswald text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
      {totalMinutes}
    </p>
  </div>

  <div className="border-l border-[#1C1F26] pl-3 sm:pl-5 lg:pl-6">
    <p className="text-xs font-medium text-gray-400 sm:text-sm">
      Calories
    </p>

    <p className="mt-1 font-oswald text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
      {totalCalories}
    </p>
  </div>
</div>


);
}
