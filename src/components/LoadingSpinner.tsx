const LoadingSpinner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      role="status"
      aria-label="Loading workouts"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#1C1F26] border-t-[#CCFF00]" />

      <p className="mt-4 text-xs uppercase tracking-widest text-gray-400">
        Loading Workouts...
      </p>
    </div>
  );
};

export default LoadingSpinner;

