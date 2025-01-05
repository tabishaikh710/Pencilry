import React from "react";

import style from "../../style/JobSearchFilter.module.css";




function JobSearchFilter() {
  return (
    <div className={style.container}> {/* Corrected the opening tag */}
      <input
        type="text"
        placeholder="Search for a job"
        className={style.searchInput}
      />
    </div>
  );
}

export default JobSearchFilter;
