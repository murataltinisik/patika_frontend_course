const Filters = ({ current, setFilter }) => (
  <ul className="filters">
    {["all", "active", "completed"].map((type) => (
      <li key={type}>
        {/* 
          Each filter option is rendered as a clickable <a> tag.
          When clicked, it calls setFilter with the selected type.
          The 'selected' class is applied to the active filter.
        */}
        <a
          className={current === type ? "selected" : ""} // Highlight the active filter
          onClick={() => setFilter(type)} // Update the current filter
        >
          {/* 
            Capitalize the first letter of the filter type for display.
            Example: "active" becomes "Active"
          */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </a>
      </li>
    ))}
  </ul>
);

export default Filters;
