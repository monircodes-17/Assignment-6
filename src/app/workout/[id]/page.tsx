import { fetchWorkoutById } from "@/lib/api";
import WorkoutDetails from "@/components/WorkoutDetails";
import { notFound } from "next/navigation";

export default async function WorkoutDetailPage({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

let workout = null;

try {
workout = await fetchWorkoutById(id);
} catch (error) {
console.error("Error fetching workout:", error);
}

// ডাটা না থাকলে 404 পেজে রিডাইরেক্ট করবে
if (!workout || Object.keys(workout).length === 0) {
notFound();
}

return ( <div className="py-8"> <WorkoutDetails workout={workout} /> </div>
);
}
