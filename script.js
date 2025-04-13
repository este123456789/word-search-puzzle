document.getElementById('wordSearchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    solvePuzzle();
});

function solvePuzzle() {
    // Get inputs
    const matrixInput = document.getElementById('matrix').value.trim();
    const wordsInput = document.getElementById('words').value.trim();

    // Parse matrix
    const matrixFlat = matrixInput.split(',').map(char => char.trim().toUpperCase());
    console.log('Matrix elements:', matrixFlat.length, matrixFlat); // Debug
    if (matrixFlat.length !== 196) { // 14 * 14 = 196
        alert(`Matrix must contain exactly 196 characters (14x14). Found: ${matrixFlat.length}`);
        return;
    }
    const matrix = [];
    for (let i = 0; i < 14; i++) {
        matrix.push(matrixFlat.slice(i * 14, (i + 1) * 14));
    }

    // Parse words
    const words = wordsInput.split('\n').map(word => word.trim().toUpperCase()).filter(word => word);

    // Search for words
    const results = words.map(word => ({
        word,
        found: searchWord(matrix, word)
    }));

    // Display results
    displayResults(results);
}

function searchWord(matrix, word) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [
        [0, 1], [0, -1], // Horizontal: right, left
        [1, 0], [-1, 0], // Vertical: down, up
        [1, 1], [1, -1], // Diagonal: down-right, down-left
        [-1, 1], [-1, -1] // Diagonal: up-right, up-left
    ];

    // Check each cell as a starting point
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Try each direction
            for (const [dr, dc] of directions) {
                if (checkDirection(matrix, word, row, col, dr, dc)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function checkDirection(matrix, word, startRow, startCol, dr, dc) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Check if the word fits in this direction
    for (let k = 0; k < word.length; k++) {
        const newRow = startRow + k * dr;
        const newCol = startCol + k * dc;

        // Check boundaries
        if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
            return false;
        }

        // Check if characters match
        if (matrix[newRow][newCol] !== word[k]) {
            return false;
        }
    }
    return true;
}

function displayResults(results) {
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';
    results.forEach(({ word, found }) => {
        const li = document.createElement('li');
        li.textContent = `${word}: ${found ? 'Found' : 'Not Found'}`;
        li.className = found ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400';
        resultsList.appendChild(li);
    });
}