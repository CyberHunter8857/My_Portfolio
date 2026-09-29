// projects.js
// Install react-icons if not already: npm install react-icons

import { FaMicrochip, FaBrain } from 'react-icons/fa'; // IoT, AI icons

const Projects = [
    {
        id: 1,
        title: 'Smart Attendance System',
        description:
            'BLE beacon-based automated attendance tracking with geofencing and anti-spoofing security measures for campus environments.',
        technologies: ['React', 'Node.js', 'Express.js', 'BLE', 'IoT'],
        category: 'IoT & Security',
        status: 'In Development',
        image: 'https://raw.githubusercontent.com/CyberHunter8857/SmartDraw-AI_Powered_Calculator/refs/heads/main/poster.png',
        domain: {
            name: 'IoT & Security',
            icon: FaMicrochip, // Chip icon for IoT
        },
    },
    {
        id: 2,
        title: 'SmartDraw AI-powered Calculator',
        description:
            'A powerful AI-powered calculator that solves mathematical expressions, equations, and analyzes graphical problems through hand-drawn input. Built with React frontend and Node.js backend, powered by Google’s Gemini AI.',
        technologies: [
            'React',
            'Vite',
            'Tailwind CSS',
            'React Draggable',
            'React KaTeX',
            'Axios',
            'Node.js',
            'Express.js',
            'Google Generative AI',
            'CORS',
            'dotenv',
        ],
        category: 'AI & Web App',
        status: 'Completed',
        image: 'https://raw.githubusercontent.com/CyberHunter8857/SmartDraw-AI_Powered_Calculator/refs/heads/main/poster.png',
        domain: {
            name: 'AI & Web App',
            icon: FaBrain, // Brain icon for AI
        },
    },
];

export default Projects;
