// Task 2: Configure the JavaScript for Drawing Context

// Get canvas and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Variables to track drawing state
let isDrawing = false;
let startX, startY;
let currentShape = 'line';
let selectedColor = '#000000';

// Set up event listeners for canvas
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

// Start drawing
function startDrawing(e) {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    ctx.beginPath();
    ctx.strokeStyle = selectedColor;
}

// Stop drawing
function stopDrawing() {
    isDrawing = false;
}
// Task 3: Implement Shape Drawing Logic

// Event listener for shape selection
document.querySelectorAll('input[name="shape"]').forEach(input => {
    input.addEventListener('change', (e) => {
        currentShape = e.target.value;
    });
});

// Draw shapes based on the current selection
function draw(e) {
    if (!isDrawing) return;

    // Clear the canvas for live shape preview
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const endX = e.offsetX;
    const endY = e.offsetY;
    const width = endX - startX;
    const height = endY - startY;

    // Draw based on selected shape
    if (currentShape === 'line') {
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
    } else if (currentShape === 'rectangle') {
        ctx.strokeRect(startX, startY, width, height);
    } else if (currentShape === 'circle') {
        const radius = Math.sqrt(width ** 2 + height ** 2);
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
    }

    ctx.stroke();
}
