"use client";

import React, {
createContext,
useContext,
useEffect,
useState,
} from "react";
import { toast } from "react-toastify";

import { Workout } from "@/types/workout";
import {
getStoredPlan,
getStoredSaved,
setStoredCompleted,
setStoredPlan,
setStoredSaved,
} from "@/lib/storage";

interface PlanContextType {
plan: Workout[];
saved: Workout[];
completedIds: string[];
addToPlan: (workout: Workout) => boolean;
removeFromPlan: (id: string) => void;
addToSaved: (workout: Workout) => boolean;
removeFromSaved: (id: string) => void;
markAsDone: (id: string) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(
undefined
);

interface PlanProviderProps {
children: React.ReactNode;
}

export function PlanProvider({
children,
}: PlanProviderProps) {
const [plan, setPlan] = useState<Workout[]>([]);
const [saved, setSaved] = useState<Workout[]>([]);
const [completedIds, setCompletedIds] = useState<string[]>(
[]
);
const [isLoaded, setIsLoaded] = useState(false);

// Load plan and saved workouts from localStorage
useEffect(() => {
setPlan(getStoredPlan());
setSaved(getStoredSaved());


// Start with no completed workouts
setCompletedIds([]);

setIsLoaded(true);


}, []);

// Save today's plan
useEffect(() => {
if (isLoaded) {
setStoredPlan(plan);
}
}, [plan, isLoaded]);

// Save bookmarked workouts
useEffect(() => {
if (isLoaded) {
setStoredSaved(saved);
}
}, [saved, isLoaded]);

// Save completed workout IDs
useEffect(() => {
if (isLoaded) {
setStoredCompleted(completedIds);
}
}, [completedIds, isLoaded]);

const addToPlan = (workout: Workout): boolean => {
if (plan.some((item) => item.id === workout.id)) {
toast.info("Workout is already in Today's Plan!");
return false;
}


if (plan.length >= 5) {
  toast.error(
    "Plan full! Maximum 5 workouts allowed in Today's Plan."
  );
  return false;
}

setPlan((prev) => [...prev, workout]);
toast.success("Added to Today's Plan!");

return true;


};

const removeFromPlan = (id: string): void => {
setPlan((prev) =>
prev.filter((workout) => workout.id !== id)
);


toast.info("Removed from Today's Plan");


};

const addToSaved = (workout: Workout): boolean => {
if (saved.some((item) => item.id === workout.id)) {
toast.info("Workout is already saved!");
return false;
}

setSaved((prev) => [...prev, workout]);
toast.success("Saved for later!");

return true;


};

const removeFromSaved = (id: string): void => {
setSaved((prev) =>
prev.filter((workout) => workout.id !== id)
);

toast.info("Removed from Saved");


};

const markAsDone = (id: string): void => {
if (completedIds.includes(id)) {
return;
}


setCompletedIds((prev) => [...prev, id]);

toast.success("Workout marked as completed!");


};

return (
<PlanContext.Provider
value={{
plan,
saved,
completedIds,
addToPlan,
removeFromPlan,
addToSaved,
removeFromSaved,
markAsDone,
}}
>
{children}
</PlanContext.Provider>
);
}

export function usePlan(): PlanContextType {
const context = useContext(PlanContext);

if (context === undefined) {
throw new Error(
"usePlan must be used within a PlanProvider"
);
}

return context;
}
