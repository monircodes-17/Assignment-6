"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
Check,
Clock,
Flame,
Star,
X,
} from "lucide-react";

import EmptyState from "@/components/EmptyState";
import SortDropdown from "@/components/SortDropdown";
import WorkoutStats from "@/components/WorkoutStats";
import { usePlan } from "@/context/PlanContext";

import type { SortOption } from "@/lib/utils";

const FALLBACK_IMAGE =
"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop";

const MyPlanPage = () => {
const [activeTab, setActiveTab] = useState<
"today" | "saved"

> ("today");

const [sortBy, setSortBy] =
useState<SortOption>("duration");

const {
plan,
saved,
completedIds,
removeFromPlan,
removeFromSaved,
markAsDone,
} = usePlan();

const currentList =
activeTab === "today" ? plan : saved;

const sortedList = [...(currentList ?? [])].sort(
(a, b) => {
switch (sortBy) {
case "duration":
return a.duration - b.duration;


    case "calories":
      return (
        a.caloriesBurned - b.caloriesBurned
      );

    case "rating":
      return b.rating - a.rating;

    default:
      return 0;
  }
}


);

return ( <div className="space-y-6 py-8"> <div> <h1 className="font-oswald text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
My Plan </h1>


    <p className="mt-2 text-sm text-gray-400 sm:text-base lg:text-lg">
      Cap of five lifts for today. Finish them, then load more.
    </p>
  </div>

  <WorkoutStats plan={currentList ?? []} />

  <div className="flex flex-col justify-between gap-4 border-b border-[#1C1F26] pb-4 sm:flex-row sm:items-center">
    <div className="flex w-fit rounded-lg border border-[#1C1F26] bg-[#15171C] p-1">
      <button
        type="button"
        onClick={() => setActiveTab("today")}
        className={`rounded-md px-4 py-2 font-oswald text-sm font-bold uppercase transition sm:px-5 sm:text-base lg:px-6 lg:text-lg ${
          activeTab === "today"
            ? "bg-[#1C1F26] text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("saved")}
        className={`rounded-md px-4 py-2 font-oswald text-sm font-bold uppercase transition sm:px-5 sm:text-base lg:px-6 lg:text-lg ${
          activeTab === "saved"
            ? "bg-[#1C1F26] text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>

    <SortDropdown
      sortBy={sortBy}
      setSortBy={setSortBy}
    />
  </div>

  {sortedList.length === 0 ? (
    <EmptyState />
  ) : (
    <div className="space-y-4">
      {sortedList.map((workout) => {
        const isCompleted =
          completedIds.includes(workout.id);

        return (
          <div
            key={workout.id}
            className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[#1C1F26] bg-[#15171C] p-4 md:flex-row md:p-5"
          >
            <div className="flex w-full items-center gap-4 md:w-auto md:gap-5">
              <div className="relative h-[88px] w-32 shrink-0 overflow-hidden rounded-lg bg-[#1C1F26] sm:h-[108px] sm:w-40">
                <Image
                  src={
                    workout.image ||
                    FALLBACK_IMAGE
                  }
                  alt={
                    workout.name || "Workout"
                  }
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h3 className="flex flex-wrap items-center gap-2 font-oswald text-base font-bold uppercase text-white sm:text-lg lg:text-xl">
                  <span className="truncate">
                    {workout.name ||
                      "Untitled Workout"}
                  </span>

                  {isCompleted && (
                    <span className="rounded bg-green-900/60 px-2 py-0.5 font-sans text-[11px] uppercase text-green-400 sm:text-xs">
                      Done
                    </span>
                  )}
                </h3>

                <p className="mt-1 text-sm text-gray-400 sm:text-base">
                  {workout.equipment ||
                    "No equipment"}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-400 sm:text-base">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {workout.duration ?? 0} min
                  </span>

                  <span className="flex items-center gap-1">
                    <Flame className="h-4 w-4 text-orange-400" />
                    {workout.caloriesBurned ?? 0} kcal
                  </span>

                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {workout.rating ?? 0}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-end gap-2 sm:gap-3 md:w-auto">
              <Link
                href={`/workout/${workout.id}`}
                className="rounded-md border border-[#1C1F26] px-3 py-2.5 font-oswald text-sm uppercase text-white transition hover:border-gray-500 sm:px-4 sm:text-base"
              >
                View Details
              </Link>

              {activeTab === "today" && (
                <button
                  type="button"
                  onClick={() =>
                    markAsDone(workout.id)
                  }
                  disabled={isCompleted}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-2.5 font-oswald text-sm font-bold uppercase transition sm:px-4 sm:text-base ${
                    isCompleted
                      ? "cursor-not-allowed bg-gray-800 text-gray-500"
                      : "bg-[#CCFF00] text-black hover:bg-[#B3FF00]"
                  }`}
                >
                  <Check className="h-4 w-4" />

                  {isCompleted
                    ? "Completed"
                    : "Mark as Done"}
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  activeTab === "today"
                    ? removeFromPlan(workout.id)
                    : removeFromSaved(workout.id)
                }
                aria-label={`Remove ${workout.name}`}
                className="rounded-md p-2.5 text-gray-400 transition hover:bg-[#1C1F26] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )}
</div>


);
};

export default MyPlanPage;
