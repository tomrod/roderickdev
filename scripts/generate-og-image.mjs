import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

const W = 1200;
const H = 630;

const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// Background — warm off-white matching site --bg
ctx.fillStyle = '#f5f3ef';
ctx.fillRect(0, 0, W, H);

// Left accent bar
ctx.fillStyle = '#c8b8a2';
ctx.fillRect(72, 72, 3, H - 144);

// Name
ctx.fillStyle = '#1c1b18';
ctx.font = 'bold 56px sans-serif';
ctx.fillText('Thomas Roderick, PhD', 104, 220);

// Rule
ctx.strokeStyle = '#d6d1c8';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(104, 258);
ctx.lineTo(W - 72, 258);
ctx.stroke();

// Tagline
ctx.fillStyle = '#6b6860';
ctx.font = '28px sans-serif';
ctx.fillText('Economist · AI systems practitioner', 104, 310);
ctx.fillText('Applied ML · Causal inference · AI governance', 104, 352);

// Domain
ctx.fillStyle = '#1c1b18';
ctx.font = '22px monospace';
ctx.fillText('roderick.dev', 104, H - 100);

// Bottom rule
ctx.strokeStyle = '#d6d1c8';
ctx.beginPath();
ctx.moveTo(104, H - 120);
ctx.lineTo(W - 72, H - 120);
ctx.stroke();

writeFileSync('public/og-image.png', canvas.toBuffer('image/png'));
console.log('Generated public/og-image.png (1200×630)');
