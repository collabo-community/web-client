import React from "react";
import useScreenDimensions from "../hooks/useScreenDimensions";

import projects from '@/apps/code-collabo/styles/modules/projects.module.css';

export default function FiltersComponent() {
  const  { isMobile }  = useScreenDimensions();
  return (
    <>
      {/* TODO: We are constructing our own select element/library - the normal html select is generally hard to style or work with */}
      <span className={isMobile ? projects.filterbyText : ''}>Filter By: </span>
      <div className={isMobile ? projects.side_menubar__filter : ''}>
        <select name='interest' className={projects.select_elem}>
          <option value="">Interest</option>
        </select>
        <select name='skill-set' className={projects.select_elem}>
          <option value="">Skill Set</option>
        </select>
      </div>
    </>
  );
}
