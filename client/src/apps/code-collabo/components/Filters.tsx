import React from "react";
import useScreenDimensions from "../hooks/useScreenDimensions";

export default function FiltersComponent({ className, isFilterOpen, toggleFilter }: { className?: string, isFilterOpen?: boolean, toggleFilter?: () => void  }) {
  const  { isMobile }  = useScreenDimensions();
  return (
    <>
      {/* TODO: We are constructing our own select element/library - the normal html select is generally hard to style or work with */}
      {isMobile && <div onClick={toggleFilter}>&gt;</div>}
      <span>Filter By: </span>
      <select name='interest' className={className}>
        <option value="">Interest</option>
      </select>
      <select name='skill-set' className={className}>
        <option value="">Skill Set</option>
      </select>
    </>
  );
}
