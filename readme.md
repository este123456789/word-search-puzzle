<!-- npx tailwindcss -i ./src/input.css -o ./dist/output.css -->

# Word Search Puzzle Solver

A web-based application to solve a 14x14 word search puzzle by finding words in a character matrix. The application accepts a comma-separated matrix and a list of words, searches for each word horizontally, vertically, or diagonally (in any direction), and displays whether each word was found. The frontend is styled with Tailwind CSS, features a dark mode toggle, and adopts a video game-inspired aesthetic resembling a classic word search puzzle.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux](#linux)
- [Running the Application](#running-the-application)
- [Considerations](#considerations)
- [Code Explanation for Web Developers](#code-explanation-for-web-developers)
- [Resources](#resources)

## Overview
This project implements a client-side web application as specified in the programming test. It processes:
- A 14x14 matrix of characters (196 comma-separated values).
- A list of words to search for (one per line).
The application checks for words in eight directions (horizontal: left/right; vertical: up/down; diagonal: all four orientations) and classifies each word as "Found" or "Not Found." The UI is built with HTML, styled with Tailwind CSS, and powered by vanilla JavaScript, featuring a retro game-like design with a dark mode toggle.

## Prerequisites
To run this project locally, ensure the following are installed on your system:
- **Web Browser**: A modern browser (e.g., Chrome, Firefox, Edge) for testing the application.
- **Node.js and npm** (optional, for local server):
  - Version: 16.x or higher recommended.
  - Used to run a local server for proper file serving (avoids CORS issues).
- **Git**: To clone the repository.
- **Text Editor**: For viewing/editing code (e.g., VS Code, Sublime Text).
- **Internet Connection**: Required for the Tailwind CSS CDN and Google Fonts (unless using a local Tailwind setup).
- **Local Server Tool** (recommended):
  - `serve` (Node.js package) or equivalent to serve HTML files locally.

No additional dependencies are required since Tailwind CSS is included via CDN, and the project uses vanilla JavaScript.

## Installation
Follow the instructions below based on your operating system to set up the project locally.

### Windows
1. **Install Git**:
   - Download Git from [git-scm.com](https://git-scm.com/downloads).
   - Run the installer, accepting default settings.
   - Verify installation:
     ```bash
     git --version
     ```
2. **Install Node.js and npm** (for local server):
   - Download the LTS version from [nodejs.org](https://nodejs.org).
   - Run the installer, ensuring "Add to PATH" is enabled.
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```
3. **Clone the Repository**:
   - Open Command Prompt or PowerShell.
   - Navigate to your desired directory:
     ```bash
     cd C:\path\to\your\folder
     ```
   - Clone the repo:
     ```bash
     git clone https://github.com/your-username/word-search-puzzle.git
     cd word-search-puzzle
     ```
4. **Install a Local Server** (optional, recommended):
   - Install `serve` globally:
     ```bash
     npm install -g serve
     ```
   - Verify:
     ```bash
     serve --version
     ```

### macOS
1. **Install Git**:
   - Git is often pre-installed. Check:
     ```bash
     git --version
     ```
   - If not installed, install via Homebrew:
     ```bash
     brew install git
     ```
   - If Homebrew is not installed, get it from [brew.sh](https://brew.sh):
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
2. **Install Node.js and npm**:
   - Install via Homebrew:
     ```bash
     brew install node
     ```
   - Verify:
     ```bash
     node --version
     npm --version
     ```
   - Alternatively, download from [nodejs.org](https://nodejs.org).
3. **Clone the Repository**:
   - Open Terminal.
   - Navigate to your directory:
     ```bash
     cd ~/path/to/your/folder
     ```
   - Clone:
     ```bash
     git clone https://github.com/your-username/word-search-puzzle.git
     cd word-search-puzzle
     ```
4. **Install a Local Server**:
   - Install `serve`:
     ```bash
     npm install -g serve
     ```
   - Verify:
     ```bash
     serve --version
     ```

### Linux
1. **Install Git**:
   - On Ubuntu/Debian:
     ```bash
     sudo apt update
     sudo apt install git
     ```
   - On Fedora:
     ```bash
     sudo dnf install git
     ```
   - Verify:
     ```bash
     git --version
     ```
2. **Install Node.js and npm**:
   - On Ubuntu/Debian:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
     sudo apt install -y nodejs
     ```
   - On Fedora:
     ```bash
     sudo dnf install nodejs
     ```
   - Verify:
     ```bash
     node --version
     npm --version
     ```
3. **Clone the Repository**:
   - Open a terminal.
   - Navigate to your directory:
     ```bash
     cd ~/path/to/your/folder
     ```
   - Clone:
     ```bash
     git clone https://github.com/your-username/word-search-puzzle.git
     cd word-search-puzzle
     ```
4. **Install a Local Server**:
   - Install `serve`:
     ```bash
     npm install -g serve
     ```
   - Verify:
     ```bash
     serve --version
     ```

## Running the Application
1. **Navigate to Project Directory**:
   ```bash
   cd word-search-puzzle
   ```
2. **Serve the Application**:
   - Use `serve`:
     ```bash
     serve
     ```
   - Alternatively, use Python’s built-in server (if Python is installed):
     ```bash
     python3 -m http.server 8000
     ```
   - Or use VS Code’s Live Server extension.
3. **Access the Application**:
   - Open your browser and go to `http://localhost:3000` (port may vary; check the server output).
4. **Test the Application**:
   - **Matrix Input**: Paste a 14x14 matrix (196 comma-separated characters), e.g.:
     ```
     P,E,R,R,O,S,A,N,T,A,M,O,N,O,L,I,B,R,O,V,A,C,A,D,O,R,A,S,G,A,T,O,U,N,E,F,A,N,T,E,L,O,M,A,N,A,T,I,Z,O,R,O,L,A,G,U,C,O,N,E,J,O,P,A,L,M,A,S,O,R,S,E,R,P,I,E,N,T,E,V,I,L,O,O,L,O,B,O,J,A,G,U,A,R,A,T,O,N,H,O,R,I,Z,O,N,T,A,L,A,C,A,L,C,A,N,G,U,R,O,L,E,O,N,S,O,O,Y,A,N,I,M,A,L,A,C,O,N,E,J,O,O,S,O,P,A,L,A,B,R,A,H,O,L,A,P,A,N,T,E,R,A,S,A,N,A,S,O,L,M,O,N,O,C,O,L,M,A,O,R,U,G,A,N,E,C,O,L,O,R,O,S,O,L,O,O,N
     ```
   - **Words Input**: Paste words (one per line), e.g.:
     ```
     PERRO
     GATO
     MANATI
     CONEJO
     SERPIENTE
     LOBO
     JAGUAR
     CANGURO
     LEON
     MONO
     PANTERA
     ORUGA
     TIGRE
     OSO
     HORIZONT
     ```
   - Click "Solve Puzzle" to see results.
   - Toggle dark mode using the top-right button (sun/moon icon).

## Considerations
- **Internet Dependency**:
  - The application uses Tailwind CSS and Google Fonts via CDN, requiring an internet connection.
  - For offline use, install Tailwind locally:
    ```bash
    npm init -y
    npm install -D tailwindcss
    npx tailwindcss init
    ```
    Create `src/input.css`:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
    Update `tailwind.config.js`:
    ```javascript
    module.exports = {
      content: ['./*.html'],
      theme: { extend: {} },
      plugins: [],
    }
    ```
    Build:
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css
    ```
    Update `index.html` to link `dist/output.css` instead of the CDN.
- **Browser Compatibility**:
  - Tested on Chrome, Firefox, and Edge. Some older browsers may not support modern CSS (e.g., Tailwind’s `dark:`).
- **Input Validation**:
  - The matrix must have exactly 196 characters. Extra/missing commas cause errors.
  - Words should be non-empty and separated by newlines.
- **Performance**:
  - Suitable for a 14x14 matrix. Larger matrices may require optimization (e.g., indexing first letters).
- **Local Server**:
  - Opening `index.html` directly (`file://`) may cause CORS issues. Use a local server for reliable testing.

## Code Explanation for Web Developers
The project consists of two main files: `index.html` and `script.js`. Below is a detailed breakdown for developers.

### File Structure
```
word-search-puzzle/
├── index.html        # Frontend UI
├── script.js         # Logic and dark mode toggle
├── README.md         # This documentation
└── docs/
    └── user-guide.docx  # User guide (to be created)
```

### `index.html`
- **Purpose**: Defines the UI, styled with Tailwind CSS and a game-like aesthetic.
- **Structure**:
  - **Head**:
    - Includes Tailwind CSS via CDN for styling.
    - Imports `Press Start 2P` font (Google Fonts) for a pixelated, retro look.
    - Adds custom scrollbar styles for theme consistency.
  - **Body**:
    - **Header**: Displays the title ("Word Search Quest") and a tagline with Tailwind classes (e.g., `text-green-500`, `dark:text-blue-400`).
    - **Dark Mode Toggle**: A button with sun/moon SVG icons, styled as a game control (`bg-green-500`, `rounded-full`).
    - **Form**: Contains textareas for matrix and words, styled with Tailwind (`border-green-300`, `focus:ring-2`).
    - **Results Section**: A list (`<ul>`) for displaying results, with dynamic classes for found (`text-green-500`) and not-found (`text-red-500`) words.
  - **Tailwind Features**:
    - Uses utility classes for layout (`flex`, `grid`), spacing (`p-4`, `mb-6`), and colors (`bg-gray-100`, `dark:bg-gray-800`).
    - Implements dark mode with `dark:` prefix.
    - Ensures responsiveness with mobile-first classes (`md:text-4xl`).

### `script.js`
- **Purpose**: Handles puzzle logic, form submission, and dark mode toggling.
- **Key Functions**:
  - **Form Submission**:
    - Listens for `submit` on `#wordSearchForm`.
    - Calls `solvePuzzle()` to process inputs.
  - **solvePuzzle()**:
    - **Input Parsing**:
      - Splits matrix input by commas, trims spaces, and converts to uppercase (`matrixFlat`).
      - Validates matrix size (196 elements).
      - Builds a 14x14 2D array (`matrix`).
      - Splits words by newlines, trims, and filters empty entries.
    - **Search**:
      - Maps each word to an object `{ word, found }` using `searchWord()`.
    - **Output**:
      - Calls `displayResults()` to show results.
    - **Debugging**: Logs matrix length and array (`console.log('Matrix elements:', matrixFlat.length, matrixFlat)`).
  - **searchWord(matrix, word)**:
    - Iterates over each cell in the matrix.
    - Checks eight directions (horizontal, vertical, diagonal) using `directions` array.
    - Returns `true` if the word is found, `false` otherwise.
  - **checkDirection(matrix, word, startRow, startCol, dr, dc)**:
    - Tests if a word exists starting at `(startRow, startCol)` in direction `(dr, dc)`.
    - Verifies boundaries and character matches.
  - **displayResults(results)**:
    - Clears the `#results` list.
    - Creates `<li>` elements for each word, with Tailwind classes for styling (`text-green-500` for found, `text-red-500` for not found).
  - **Dark Mode Toggle**:
    - Initializes theme based on `localStorage` or system preference (`prefers-color-scheme`).
    - Toggles `dark` class on `<html>` when the `#themeToggle` button is clicked.
    - Updates sun/moon icons and saves preference to `localStorage`.

### Technical Notes
- **Algorithm**:
  - The search is brute-force, checking every cell and direction. Time complexity is O(R * C * D * W * L), where R=C=14 (rows/columns), D=8 (directions), W is word count, and L is max word length.
  - Suitable for small matrices; larger ones may need optimization (e.g., trie-based search).
- **Error Handling**:
  - Validates matrix size (196 characters).
  - Trims inputs to handle extra spaces.
  - Filters empty words.
- **Dark Mode**:
  - Uses Tailwind’s `dark:` classes for seamless theme switching.
  - Persists user choice across sessions.
- **Extensibility**:
  - Easily adaptable for different matrix sizes by adjusting the validation (`196`) and loop ranges.
  - Could add visualization of the matrix grid or highlight found words.

## Resources
- **Technologies**:
  - HTML, JavaScript (vanilla)
  - Tailwind CSS (CDN: [cdn.tailwindcss.com](https://cdn.tailwindcss.com))
  - Google Fonts (`Press Start 2P`)
- **Tools**:
  - Git for version control
  - Node.js for local server (`serve`)
- **No External Libraries**:
  - Pure JavaScript implementation for core logic.
- **User Guide**:
  - A `user-guide.docx` will be created in `docs/` with screenshots and instructions for non-technical users.

---

### Notes for Use
- Replace `https://github.com/your-username/word-search-puzzle.git` with your actual repository URL when hosting.
- The `user-guide.docx` is referenced but not created here; you can generate it with a word processor, including screenshots of the UI, input instructions, and dark mode toggling.
- If you encounter the "196 characters" error, check the console (`Matrix elements:` log) to debug input issues (e.g., extra commas).

This `README.md` provides a complete guide for installing, running, and understanding the project across Windows, macOS, and Linux, with a detailed explanation for developers. Save it as `README.md` in your project root and push to GitHub:

```bash
git add README.md
git commit -m "Added comprehensive README documentation"
git push
```
