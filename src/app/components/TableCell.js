// components/TableCell.js
import React, { useRef } from "react";

// TableCell component is responsible for rendering each cell in the table with options
const TableCell = ({
  value,
  rowIndex,
  activeValue,
  handleChange,
  handleSplit,
  reviewedIndexes,
  nextUnreviewedIndex,
}) => {
  const selectRef = useRef(null); // Ref for dropdown select

  return (
    <div
      id={`cell-${rowIndex}-options`}
      className={`flex items-center gap-4 p-2 rounded ${
        value.length > 1 ? "border border-gray-500" : ""
      }`}
    >
      <select
        ref={selectRef}
        value={activeValue}
        onChange={(e) => handleChange(e.target.value, rowIndex)}
        className="p-2 border rounded bg-gray-700 text-white"
      >
        {value.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {reviewedIndexes.includes(rowIndex) ? (
        <span className="text-sm">Reviewed</span>
      ) : (
        <span className="text-sm">Unreviewed</span>
      )}
      {value.length > 1 ? (
        <button
          onClick={() => handleSplit(rowIndex)}
          className="p-2 border rounded bg-blue-700 text-white"
        >
          Split
        </button>
      ) : (
        <span className="text-sm">No options left</span>
      )}
    </div>
  );
};

export default TableCell;
