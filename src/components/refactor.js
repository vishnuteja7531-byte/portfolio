const fs = require('fs');

const path = 'f:\\\\portfolio\\\\app\\\\src\\\\sections\\\\ClosingHero.tsx';
let data = fs.readFileSync(path, 'utf8');

const startMarker = "                {/* Dashboard redesign */}";
const endMarker = "            </div>\\r\\n        </section>";

const startIndex = data.indexOf(startMarker);
const endIndex = data.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const prefix = data.substring(0, startIndex);
    const suffix = data.substring(endIndex);

    let result = prefix + startMarker + '\\n                <AtheraLabsDashboard />\\n' + suffix;

    if (!result.includes('import AtheraLabsDashboard')) {
        result = result.replace(
            "import { motion } from 'framer-motion';",
            "import AtheraLabsDashboard from '../components/AtheraLabsDashboard';\\nimport { motion } from 'framer-motion';"
        );
    }

    fs.writeFileSync(path, result, 'utf8');
    console.log('Successfully replaced dashboard component');
} else {
    console.log('Could not find markers');
}
