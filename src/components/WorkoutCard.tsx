"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
workout: Workout;
}

const FALLBACK_IMAGE =
"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop";

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } =
workout;

return (
<Link
href={`/workout/${id}`}
className="group flex flex-col overflow-hidden rounded-xl border border-[#1C1F26] bg-[#15171C] transition hover:border-gray-600"
> <div className="relative aspect-video w-full overflow-hidden bg-[#0C0D10]">
<Image
src={image || FALLBACK_IMAGE}
alt={name || "Workout"}
fill
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
className="object-cover transition duration-300 group-hover:scale-105"
/> </div>

  <div className="flex flex-1 flex-col justify-between space-y-5 p-5">
    <div>
      {muscleGroups?.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {muscleGroups.map((muscle, index) => (
            <span
              key={`${muscle}-${index}`}
              className="rounded bg-[#CCFF00] px-2.5 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>
      )}

      <h3 className="font-oswald text-xl font-bold uppercase text-white transition group-hover:text-[#CCFF00] sm:text-2xl">
        {name}
      </h3>

      <p className="mt-1.5 text-sm text-gray-400">
        {equipment}
      </p>
    </div>

    <div className="flex items-center justify-between border-t border-[#1C1F26] pt-4 text-sm text-gray-400">
      <div className="flex items-center gap-1.5">
        <Clock className="h-4 w-4" />
        <span>{duration} min</span>
      </div>

      <div className="flex items-center gap-1.5">
        <Flame className="h-4 w-4 text-orange-400" />
        <span>{caloriesBurned} kcal</span>
      </div>

      <div className="flex items-center gap-1.5">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span>{rating}</span>
      </div>
    </div>
  </div>
</Link>


);
};

export default WorkoutCard;
