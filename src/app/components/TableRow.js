// components/TableRow.js
import React from "react";
import { flexRender } from "@tanstack/react-table";

// TableRow component is responsible for rendering each row in the table
const TableRow = ({ row, nextUnreviewedIndex }) => (
  <tr
    className={`transition ${
      nextUnreviewedIndex === row.index
        ? "bg-gray-200 text-black"
        : "hover:bg-gray-300 hover:text-black"
    } hover:relative hover:transform hover:scale-105 hover:z-10 hover:shadow-lg hover:overflow-visible`}
  >
    {row.getVisibleCells().map((cell) => (
      <td key={cell.id} className="p-4 rounded-lg">
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </td>
    ))}
  </tr>
);

export default TableRow;
