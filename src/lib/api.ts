import type { Workout } from "@/types/workout";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export const fetchAllWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(BASE_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await response.json();

  return data;
};

export const fetchWorkoutById = async (
  id: string
): Promise<Workout | null> => {
  const workouts = await fetchAllWorkouts();

  const workout = workouts.find(
    (item) => String(item.id) === id
  );

  return workout ?? null;
};

