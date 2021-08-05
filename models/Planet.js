// Set up dependency
const mongoose = require('mongoose');

// Schema
const planetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    official: { type: Boolean, required: true },
    planetType: { type: String, required: true },
    lengthOfDay: Number,
})

const Planet = mongoose.model('Planet', planetSchema);

// Export data
module.exports = Planet;

// Data for the planets for later

// const planets = [
//     {
//         name: 'Mercury',
//         official: true,
//         type: 'terrestrial planet',
//         lengthOfDay: 4222.6,
//     },
//     {
//         name: 'Venus',
//         official: true,
//         type: 'terrestrial planet',
//         lengthOfDay: 2802.0
//     },
//     {
//         name: 'Earth',
//         official: true,
//         type: 'terrestrial planet',
//         lengthOfDay: 24.0,
//     },
//     {
//         name: 'Mars',
//         official: true,
//         type: 'terrestrial planet',
//         lengthOfDay: 708.7,
//     },
//     {
//         name: 'Jupiter',
//         official: true,
//         type: 'gas giant',
//         lengthOfDay: 9.9,
//     },
//     {
//         name: 'Saturn',
//         official: true,
//         type: 'gas giant',
//         lengthOfDay: 10.7,
//     },
//     {
//         name: 'Uranus',
//         official: true,
//         type: 'gas giant',
//         lengthOfDay: 17.2,
//     },
//     {
//         name: 'Neptune',
//         official: true,
//         type: 'gas giant',
//         lengthOfDay: 16.1,
//     },
//     {
//         name: 'Pluto',
//         official: false,
//         type: 'dwarf planet',
//         lengthOfDay: 153.3,
//     }
// ];

// module.exports = planets;