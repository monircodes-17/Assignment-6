import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { fetchAllWorkouts } from "@/lib/api";

export default async function HomePage() {
const workouts = await fetchAllWorkouts();

return ( <div> <Hero /> <WorkoutLibrary initialWorkouts={workouts} /> </div>
);
}
