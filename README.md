# Reliant AI - Senior Frontend Developer Assignment

## Project Description

This project is a Next.js 14 application that implements a table using an open-source table library. The objective of the application is to enable users to manage multiple values per cell in the table while allowing only one value to be selected as active at a given time. The application fetches data from an open-source API endpoint, fills the table with multiple values per cell, and provides users with the option to choose a single value for each cell from multiple possibilities.

## Features

1. Utilizes Next.js 14 with App Router for the project setup.
2. Integrates the TanStack Table library to display data fetched from an API.
3. Fetches data from an open-source API endpoint to populate the table.
4. Implements multiple value options for each cell in the table where only one value can be active at a time.
5. Highlights cells that have alternative values and enables users to view and select specific values for each cell.
6. Provides a user-friendly interface for value selection within the table cells.
7. Implements a feature where selecting a value for a cell triggers the next "unreviewed" cell for the user to make a selection.
8. Adds the ability for the user to split the alternative cell value to its own row.

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/reliant-ai-assignment.git
```

2. Navigate to the project directory:

```bash
cd reliant-ai-assignment
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Project

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to http://localhost:3000.

### Extra Steps

If you encounter any issues with the dependencies or the setup, you might need to install some additional packages globally:

1. Install the latest version of Next.js globally:

```bash
npm install -g next
```

2. Ensure you have the latest version of react and react-dom:

```bash
npm install react@latest react-dom@latest
# or
yarn add react@latest react-dom@latest
```

### Project Structure

- `src/app/page.js`: Main entry point of the application.
- `src/app/components/Table.js`: Main table component that manages the table state and renders the table.
- `src/app/components/TableCell.js`: Component responsible for rendering each cell in the table.
- `src/app/components/TableHeader.js`: Component responsible for rendering the table header.
- `src/app/components/TableRow.js`: Component responsible for rendering each row in the table.
- `styles/globals.css`: Global CSS file.

### Additional Information

- The application uses the PokeAPI (`https://pokeapi.co/`) to fetch data for populating the table.
- The table library used is TanStack Table (`@tanstack/react-table`).

### Author

- Abrish Sabri; Reliant AI - Senior Frontend Developer Assignment

### License

This project is licensed under the MIT License.