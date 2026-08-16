const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_ROOT = '/home/riyansh/Desktop/Portfolio/portfolio';

async function setupProject() {
    // Clone ReactBits repository
    console.log('Cloning ReactBits repository...');
    execSync('git clone https://github.com/DavidHDev/react-bits.git temp-reactbits', {
        cwd: PROJECT_ROOT,
        stdio: 'inherit'
    });

    // Copy needed components
    const components = ['LiquidEther', 'GlitchText', 'AnimatedList', 'ProjectBox', 'ProfileCard'];
    for (const component of components) {
        await fs.copyFile(
            path.join(PROJECT_ROOT, `temp-reactbits/src/components/${component}.jsx`),
            path.join(PROJECT_ROOT, `src/components/${component}.jsx`)
        );
        console.log(`Copied ${component}.jsx`);
    }

    // Clean up
    execSync('rm -rf temp-reactbits', {
        cwd: PROJECT_ROOT,
        stdio: 'inherit'
    });

    // Update package.json
    const packageJson = JSON.parse(await fs.readFile(path.join(PROJECT_ROOT, 'package.json'), 'utf8'));
    packageJson.dependencies = {
        ...packageJson.dependencies,
        "three": "^0.157.0",
        "@react-spring/web": "^9.7.3"
    };
    await fs.writeFile(
        path.join(PROJECT_ROOT, 'package.json'),
        JSON.stringify(packageJson, null, 2)
    );

    // Install dependencies
    console.log('Installing dependencies...');
    execSync('npm install', {
        cwd: PROJECT_ROOT,
        stdio: 'inherit'
    });
}

setupProject().catch(console.error);