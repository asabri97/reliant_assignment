// components/Table.js
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import TableHeader from "./TableHeader"; // Import TableHeader component
import TableRow from "./TableRow"; // Import TableRow component
import TableCell from "./TableCell"; // Import TableCell component

const Table = ({ data, onSplit }) => {
  // State to track unreviewed and reviewed indexes, active values, and next unreviewed index
  const [unreviewedIndexes, setUnreviewedIndexes] = useState([]);
  const [reviewedIndexes, setReviewedIndexes] = useState([]);
  const [activeValues, setActiveValues] = useState({});
  const [nextUnreviewedIndex, setNextUnreviewedIndex] = useState(null);

  // Initialize unreviewed and active values
  useEffect(() => {
    const initialUnreviewed = data.reduce((acc, row, index) => {
      if (row.options.length > 1) {
        acc.push(index);
      }
      return acc;
    }, []);
    setUnreviewedIndexes(initialUnreviewed);

    const initialActiveValues = data.reduce((acc, row, index) => {
      acc[index] = row.options[0];
      return acc;
    }, {});
    setActiveValues(initialActiveValues);

    if (initialUnreviewed.length > 0) {
      setNextUnreviewedIndex(initialUnreviewed[0]);
    }
  }, [data]);

  // Handle change in dropdown selection
  const handleChange = (newValue, rowIndex) => {
    setActiveValues((prev) => ({
      ...prev,
      [rowIndex]: newValue,
    }));
    if (!reviewedIndexes.includes(rowIndex)) {
      setReviewedIndexes((prev) => [...prev, rowIndex]);
      setUnreviewedIndexes((prev) =>
        prev.filter((index) => index !== rowIndex)
      );
      navigateToNextUnreviewed(rowIndex);
    }
  };

  // Navigate to next unreviewed index
  const navigateToNextUnreviewed = (currentRowIndex) => {
    const nextIndex = unreviewedIndexes.find(
      (index) => index > currentRowIndex
    );
    setNextUnreviewedIndex(nextIndex);
    if (nextIndex !== undefined) {
      setTimeout(() => {
        const nextSelect = document.querySelector(
          `#cell-${nextIndex}-options select`
        );
        if (nextSelect) {
          nextSelect.focus();
        }
      }, 100);
    }
  };

  // Handle splitting a row into a new row
  const handleSplit = (rowIndex) => {
    const activeValue = activeValues[rowIndex];
    const newRow = {
      ...data[rowIndex],
      options: data[rowIndex].options.filter(
        (option) => option !== activeValue
      ),
    };
    onSplit(newRow, rowIndex);
  };

  // Define table columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "options",
        header: "Options",
        cell: ({ getValue, row }) => (
          <TableCell
            value={getValue()}
            rowIndex={row.index}
            activeValue={activeValues[row.index] || getValue()[0]}
            handleChange={handleChange}
            handleSplit={handleSplit}
            reviewedIndexes={reviewedIndexes}
            nextUnreviewedIndex={nextUnreviewedIndex}
          />
        ),
      },
    ],
    [unreviewedIndexes, reviewedIndexes, activeValues, nextUnreviewedIndex]
  );

  // Create table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <table className="custom-table">
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              nextUnreviewedIndex={nextUnreviewedIndex}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
