import { Workout } from "@/types/workout";

const PLAN_KEY = "fitlog_today_plan";
const SAVED_KEY = "fitlog_saved_workouts";
const COMPLETED_KEY = "fitlog_completed_ids";

export const getStoredPlan = (): Workout[] => {
if (typeof window === "undefined") return [];

try {
const data = localStorage.getItem(PLAN_KEY);
return data ? (JSON.parse(data) as Workout[]) : [];
} catch {
return [];
}
};

export const setStoredPlan = (plan: Workout[]): void => {
if (typeof window === "undefined") return;

localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
};

export const getStoredSaved = (): Workout[] => {
if (typeof window === "undefined") return [];

try {
const data = localStorage.getItem(SAVED_KEY);
return data ? (JSON.parse(data) as Workout[]) : [];
} catch {
return [];
}
};

export const setStoredSaved = (saved: Workout[]): void => {
if (typeof window === "undefined") return;

localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
};

export const getStoredCompleted = (): number[] => {
if (typeof window === "undefined") return [];

try {
const data = localStorage.getItem(COMPLETED_KEY);
return data ? (JSON.parse(data) as number[]) : [];
} catch {
return [];
}
};

export const setStoredCompleted = (
completedIds: number[]
): void => {
if (typeof window === "undefined") return;

localStorage.setItem(
COMPLETED_KEY,
JSON.stringify(completedIds)
);
};