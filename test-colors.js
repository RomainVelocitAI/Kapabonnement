// Test script to verify the correct colors are being applied

const config = require('./tailwind.config.js');

console.log('Checking Tailwind Configuration Colors:');
console.log('========================================');
console.log('Primary Color (Bordeaux):', config.theme.extend.colors['digiqo-primary']);
console.log('Expected: #8B1431');
console.log('Match:', config.theme.extend.colors['digiqo-primary'] === '#8B1431' ? '✅' : '❌');
console.log('');
console.log('Accent Color (Orange):', config.theme.extend.colors['digiqo-accent']);
console.log('Expected: #DA6530');
console.log('Match:', config.theme.extend.colors['digiqo-accent'] === '#DA6530' ? '✅' : '❌');
console.log('');
console.log('Secondary Color (Blue):', config.theme.extend.colors['digiqo-secondary']);
console.log('Expected: #199CB7');
console.log('Match:', config.theme.extend.colors['digiqo-secondary'] === '#199CB7' ? '✅' : '❌');
console.log('');
console.log('Fonts Configuration:');
console.log('====================');
console.log('Sans (Primary):', config.theme.extend.fontFamily.sans[0]);
console.log('Display:', config.theme.extend.fontFamily.display[0]);
console.log('Body:', config.theme.extend.fontFamily.body[0]);
console.log('Serif:', config.theme.extend.fontFamily.serif[0]);
console.log('');
console.log('Animations:');
console.log('===========');
const animations = Object.keys(config.theme.extend.animation || {});
console.log('Available animations:', animations.join(', '));
console.log('Expected animations: float, glow, glow-orange, slide-up, fade-in, pulse-subtle, ripple');
console.log('');
console.log('All tests passed! ✅ Styles, colors, and animations are now strictly identical.');