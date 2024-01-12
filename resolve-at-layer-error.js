// 
// run the script: 
// node resolve-at-layer-error.js 
// to fix the @layer error
//

import fs from 'fs';
import path from 'path';

const vscodeFolderPath = path.join("", '.vscode');
const settingsFilePath = path.join("", ".vscode", 'settings.json');
const tailwindFilePath = path.join("", ".vscode", 'tailwind.json');

const settingsData = `{
  "css.customData": [
    ".vscode/tailwind.json"
  ]
}`;

const tailwindData = `{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Use the \`@tailwind\` directive to insert Tailwind's \`base\`, \`components\`, \`utilities\` and \`screens\` styles into your CSS.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#tailwind"
        }
      ]
    },
    {
      "name": "@apply",
      "description": "Use the \`@apply\` directive to inline any existing utility classes into your own custom CSS. This is useful when you find a common utility pattern in your HTML that you’d like to extract to a new component.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#apply"
        }
      ]
    },
    {
      "name": "@responsive",
      "description": "You can generate responsive variants of your own classes by wrapping their definitions in the \`@responsive\` directive:\\n\`\`\`css\\n@responsive {\\n  .alert {\\n    background-color: #E53E3E;\\n  }\\n}\\n\`\`\`\\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#responsive"
        }
      ]
    },
    {
      "name": "@screen",
      "description": "The \`@screen\` directive allows you to create media queries that reference your breakpoints by **name** instead of duplicating their values in your own CSS:\\n\`\`\`css\\n@screen sm {\\n  /* ... */\\n}\\n\`\`\`\\n…gets transformed into this:\\n\`\`\`css\\n@media (min-width: 640px) {\\n  /* ... */\\n}\\n\`\`\`\\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#screen"
        }
      ]
    },
    {
      "name": "@variants",
      "description": "Generate \`hover\`, \`focus\`, \`active\` and other **variants** of your own utilities by wrapping their definitions in the \`@variants\` directive:\\n\`\`\`css\\n@variants hover, focus {\\n   .btn-brand {\\n    background-color: #3182CE;\\n  }\\n}\\n\`\`\`\\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#variants"
        }
      ]
    }
  ]
}`;

if (!fs.existsSync(vscodeFolderPath)) {
  fs.mkdirSync(vscodeFolderPath);
}

const parsedSettingsData = JSON.parse(settingsData);
const parsedTailwindData = JSON.parse(tailwindData);

let existingSettingsData = {};
try {
  const existingSettingsContent = fs.readFileSync(settingsFilePath, 'utf8');
  existingSettingsData = JSON.parse(existingSettingsContent);
} catch (error) {
  console.log('No settings file, create new settings.json');
}

const mergedSettingsData = {
  ...existingSettingsData,
  ...parsedSettingsData,
};

let existingTailwindData = {};
try {
  const existingTailwindContent = fs.readFileSync(tailwindFilePath, 'utf8');
  existingTailwindData = JSON.parse(existingTailwindContent);
} catch (error) {
  console.log('No tailwind file, create new tailwind.json\n');
}

const mergedTailwindData = {
  ...existingTailwindData,
  ...parsedTailwindData,
};

// Write the parsed data as JSON to the files
fs.writeFileSync(settingsFilePath, JSON.stringify(mergedSettingsData, null, 2), 'utf8');
console.log('settings.json file updated successfully.');

fs.writeFileSync(tailwindFilePath, JSON.stringify(mergedTailwindData, null, 2), 'utf8');
console.log('tailwind.json file updated successfully.\n');