"use client";

import Image from "next/image";
import Link from "next/link";
import {
ArrowLeft,
Bookmark,
Calendar,
} from "lucide-react";

import { usePlan } from "@/context/PlanContext";
import type { Workout } from "@/types/workout";

interface WorkoutDetailsProps {
workout: Workout;
}

const FALLBACK_IMAGE =
"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop";

export default function WorkoutDetails({
workout,
}: WorkoutDetailsProps) {
const { plan, addToPlan, addToSaved } = usePlan();

if (!workout) {
return null;
}

const {
id,
name,
image,
muscleGroups,
equipment,
difficulty,
sets,
reps,
duration,
caloriesBurned,
rating,
description,
instructions,
} = workout;

const categories = Array.isArray(muscleGroups)
? muscleGroups
: [];

const workoutInstructions = Array.isArray(instructions)
? instructions
: [];

const isAlreadyInPlan = plan.some(
(item) => item.id === id
);

const isPlanFull = plan.length >= 5;

const disablePlanButton =
isAlreadyInPlan || isPlanFull;

return ( <div className="space-y-5">
{/* Back to Library */} <Link
     href="/"
     className="inline-flex items-center gap-2 text-base font-medium text-gray-400 transition hover:text-white sm:gap-2.5 sm:text-lg lg:gap-3 lg:text-xl"
   > <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
Back to Library </Link>

  <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
    {/* Workout Image */}
    <div className="relative h-[380px] w-full overflow-hidden rounded-xl border border-[#1C1F26] bg-[#15171C] sm:h-[480px]">
      <Image
        src={image || FALLBACK_IMAGE}
        alt={name || "Workout"}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>

    {/* Workout Information */}
    <div className="space-y-5">
      <div>
        <h1 className="font-oswald text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
          {name || "Untitled Workout"}
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
          {description || "No description available."}
        </p>

        {categories.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {categories.map((category, index) => (
              <span
                key={`${category}-${index}`}
                className="rounded bg-[#CCFF00] px-2.5 py-0.5 text-xs font-bold uppercase text-black"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Workout Details */}
      <div className="space-y-3 rounded-xl border border-[#1C1F26] bg-[#15171C] p-4">
        <div className="flex justify-between gap-3 border-b border-[#1C1F26] pb-2.5">
          <span className="font-oswald text-sm uppercase text-gray-400">
            Equipment
          </span>
          <span className="text-right text-sm font-medium text-white">
            {equipment || "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-3 border-b border-[#1C1F26] pb-2.5">
          <span className="font-oswald text-sm uppercase text-gray-400">
            Difficulty
          </span>
          <span className="text-right text-sm font-medium text-white">
            {difficulty || "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-3 border-b border-[#1C1F26] pb-2.5">
          <span className="font-oswald text-sm uppercase text-gray-400">
            Sets
          </span>
          <span className="text-sm font-medium text-white">
            {sets ?? "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-3 border-b border-[#1C1F26] pb-2.5">
          <span className="font-oswald text-sm uppercase text-gray-400">
            Reps
          </span>
          <span className="text-sm font-medium text-white">
            {reps || "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-3 border-b border-[#1C1F26] pb-2.5">
          <span className="font-oswald text-sm uppercase text-gray-400">
            Duration
          </span>
          <span className="text-sm font-medium text-white">
            {duration ?? 0} min
          </span>
        </div>

        <div className="flex justify-between gap-3 border-b border-[#1C1F26] pb-2.5">
          <span className="font-oswald text-sm uppercase text-gray-400">
            Calories
          </span>
          <span className="text-sm font-medium text-white">
            {caloriesBurned ?? 0} kcal
          </span>
        </div>

        <div className="flex justify-between gap-3">
          <span className="font-oswald text-sm uppercase text-gray-400">
            Rating
          </span>
          <span className="text-sm font-medium text-white">
            {rating ?? 0}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="space-y-3">
        <h3 className="font-oswald text-lg font-bold uppercase text-white">
          Instructions
        </h3>

        {workoutInstructions.length > 0 ? (
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-gray-300 sm:text-base">
            {workoutInstructions.map((step, index) => (
              <li
                key={`${id}-step-${index}`}
                className="leading-6"
              >
                {step}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-gray-500">
            No instructions available for this workout.
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2.5 pt-1 sm:flex-row">
        <button
          type="button"
          onClick={() => addToPlan(workout)}
          disabled={disablePlanButton}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 font-oswald text-base font-bold uppercase transition ${
            disablePlanButton
              ? "cursor-not-allowed bg-gray-700 text-gray-400"
              : "bg-[#CCFF00] text-black hover:bg-[#B3FF00]"
          }`}
        >
          <Calendar className="h-4 w-4" />

          {isAlreadyInPlan
            ? "Already in Plan"
            : isPlanFull
              ? "Plan Full"
              : "Add to Today's Plan"}
        </button>

        <button
          type="button"
          onClick={() => addToSaved(workout)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#1C1F26] px-4 py-3 font-oswald text-base font-bold uppercase text-white transition hover:border-gray-500"
        >
          <Bookmark className="h-4 w-4" />
          Save for Later
        </button>
      </div>
    </div>
  </div>
</div>


);
}
