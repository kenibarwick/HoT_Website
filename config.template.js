// Google Maps API Configuration Template
// Copy this file to 'config.js' and add your actual API key
// The 'config.js' file is gitignored for security

const GOOGLE_MAPS_CONFIG = {
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_HERE'
};

// Make it available globally
window.GOOGLE_MAPS_CONFIG = GOOGLE_MAPS_CONFIG;

/*
SETUP INSTRUCTIONS:
1. Copy this file to 'config.js'
2. Replace 'YOUR_GOOGLE_MAPS_API_KEY_HERE' with your actual API key
3. Never commit the real config.js file - it's gitignored for security
4. For production, set up proper domain restrictions in Google Cloud Console
*/
