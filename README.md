# Etch a Sketch Project

A project to practice vanilla JS DOM manipulation. An Odin Project assignment.

[Live Demo](https://tomahawk-jupiter.github.io/etch-a-sketch/)

## Overview

An Etch a Sketch style drawing board. Move the mouse over the canvas area to draw on it.

A resolution can be selected for smaller cell sizes allowing more detail.

## Board and Cell Size

Set the `canvasWidth` variable in `index.js` for the size of the board.

Don't actually set the size of the `.canvas-container` div with this value it will be too small to fit the cells and will be hidden behind them (I don't know why this is). The div will resize to fit the contents by itself.

This means the board won't be the exact size of the `canvasWidth` value but will be close.

Divide the canvas width by the number of cells to get the width / height for each cell.

## Appending the Cells with a loop

Use a nested loop. The first loop creates a row, the second loop adds the column cells for the row. At the end of each row iteration, it is appended to the Canvas.
