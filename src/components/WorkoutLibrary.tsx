"use client";

import { useState } from "react";

import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

import { sortWorkouts } from "@/lib/utils";
import type { SortOption } from "@/lib/utils";
import type { Workout } from "@/types/workout";

interface WorkoutLibraryProps {
initialWorkouts: Workout[];
}

const WorkoutLibrary = ({
initialWorkouts,
}: WorkoutLibraryProps) => {
const [sortBy, setSortBy] =
useState<SortOption | "default">("default");

const sortedWorkouts =
sortBy === "default"
? initialWorkouts
: sortWorkouts(initialWorkouts, sortBy);

return ( <section
   id="library"
   className="w-full py-8 sm:py-10 lg:py-12"
 > <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"> <div> <h2 className="font-oswald text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
THE LIBRARY </h2>

      <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
        Twelve lifts covering every major muscle group.
      </p>
    </div>

    <SortDropdown
      sortBy={sortBy === "default" ? "duration" : sortBy}
      setSortBy={setSortBy}
    />
  </div>

  {sortedWorkouts.length > 0 ? (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedWorkouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
        />
      ))}
    </div>
  ) : (
    <div className="rounded-xl border border-[#1C1F26] bg-[#15171C] py-16 text-center">
      <p className="text-sm text-gray-400">
        No workouts available.
      </p>
    </div>
  )}
</section>


);
};

export default WorkoutLibrary;
