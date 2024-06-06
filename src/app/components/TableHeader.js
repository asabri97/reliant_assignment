// components/TableHeader.js
import React from "react";
import { flexRender } from "@tanstack/react-table";

// TableHeader component is responsible for rendering the header of the table
const TableHeader = ({ headerGroups }) => (
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr key={headerGroup.id} className="bg-gray-900">
        {headerGroup.headers.map((header) => (
          <th key={header.id} className="p-4 text-white rounded-t-lg">
            {flexRender(header.column.columnDef.header, header.getContext())}
          </th>
        ))}
      </tr>
    ))}
  </thead>
);

export default TableHeader;
