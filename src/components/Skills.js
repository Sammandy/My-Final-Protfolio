import React from 'react';
//icons

//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const skills = {
    frontend: [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Next.js',
        'Tailwind CSS',
    ],
    backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs'
    ],
    "Developers-Tool": [
        'GitHub',
        'Git',
        'Visual Studio Code',
        'MetaMask'
    ],
    "Frameworks and library": [
        'Web3.js',
        'Ganache',
    ]
};

const Skills = () => {
    return (
        <motion.div variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} className='flex-1 p-6'>
            <h2 className='h2 text-accent text-left-center font-bold md:ml-8'>Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-8'>
                <div>
                    <h3 className='h3 text-accent font-bold mb-4 ml-8'>Frontend</h3>
                    <ul className='list-disc list-inside ml-8 text-blue-50'>
                        {skills.frontend.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='h3 text-accent font-bold mb-4'>Backend</h3>
                    <ul className='list-disc list-inside text-blue-50'>
                        {skills.backend.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='h3 text-accent font-bold mb-4'>Developers-Tool</h3>
                    <ul className='list-disc list-inside text-blue-50'>
                        {skills["Developers-Tool"].map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <br />
                    <h3 className='h3 text-accent font-bold mb-4'>Frameworks and library</h3>
                    <ul className='list-disc list-inside text-blue-50'>
                        {skills["Frameworks and library"].map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;
