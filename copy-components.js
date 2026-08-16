const fs = require('fs').promises;
const path = require('path');

const NEEDED_COMPONENTS = [
  'LiquidEther',
  'GlitchText',
  'AnimatedList',
  'ProjectBox',
  'ProfileCard'
];

async function copyComponents() {
  const sourceDir = path.join(__dirname, 'temp-reactbits/src/components');
  const targetDir = path.join(__dirname, 'src/components');

  for (const component of NEEDED_COMPONENTS) {
    try {
      // Copy JSX files
      await fs.copyFile(
        path.join(sourceDir, `${component}.jsx`),
        path.join(targetDir, `${component}.jsx`)
      );
      
      // Copy CSS files if they exist
      try {
        await fs.copyFile(
          path.join(sourceDir, `${component}.css`),
          path.join(targetDir, `${component}.css`)
        );
      } catch (cssErr) {
        console.log(`No CSS file for ${component}`);
      }
      
      console.log(`Copied ${component} files successfully`);
    } catch (err) {
      console.error(`Error copying ${component}:`, err);
    }
  }
}

copyComponents().then(() => {
  console.log('Component restoration complete');
});