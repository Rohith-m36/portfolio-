import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import Mysql from '../assets/Mysql.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Avula Rohith</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            A Full-Stack Developer skilled in creating scalable web applications. Experienced with HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL. Passionate about building responsive, user-friendly websites that solve real-world problems.
                        </p>

                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                    I started my journey in Full-Stack Development with a passion for creating scalable and user-friendly web applications. Proficient in technologies like HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, I have built several projects including a responsive e-commerce website, a recipe search app, and a movie platform. These projects showcase my ability to seamlessly integrate robust backend solutions with modern, intuitive frontend designs, delivering seamless user experiences.
                                </p>

                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            <div className='border border-blue-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-blue-500'>
                                <h3 className='text-2xl font-semibold text-blue-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>

                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={NodeLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Mongodb} alt="" className='w-10' />
                                        <span className='font-semibold'>Mongodb</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Express} alt="" className='w-10' />
                                        <span className='font-semibold'>Express Js</span>
                                    </div>
                                    <div className='border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300'>
                                        <img src={Mysql} alt="" className='w-9' />
                                        <span className='font-semibold'>Mysql</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                            Apart from coding, I am passionate about exploring new technologies and enhancing my skills in areas like machine learning, mobile app development, and web design. I enjoy solving complex problems and implementing creative solutions through my projects. I also love learning about cloud technologies and data analysis, and I actively engage in activities that help me stay ahead of the curve in the tech industry.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
