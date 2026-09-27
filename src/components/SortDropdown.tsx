"use client";

import { ChevronDown } from "lucide-react";

import type { SortOption } from "@/lib/utils";

interface SortDropdownProps {
sortBy: SortOption;
setSortBy: (value: SortOption) => void;
}

const SortDropdown = ({
sortBy,
setSortBy,
}: SortDropdownProps) => {
const handleChange = (
event: React.ChangeEvent<HTMLSelectElement>
) => {
setSortBy(event.target.value as SortOption);
};

return ( <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg"> <span className="text-gray-400">
Sort By </span>


  <div className="relative">
    <select
      value={sortBy}
      onChange={handleChange}
      aria-label="Sort workouts by"
      className="cursor-pointer appearance-none rounded-md border border-[#1C1F26] bg-[#15171C] py-2 pl-3 pr-9 text-sm text-white transition focus:border-[#CCFF00] focus:outline-none sm:text-base lg:text-lg"
    >
      <option value="duration">
        Duration
      </option>

      <option value="calories">
        Calories
      </option>

      <option value="rating">
        Rating
      </option>
    </select>

    <ChevronDown
      className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 sm:h-5 sm:w-5"
    />
  </div>
</div>


);
};

export default SortDropdown;
