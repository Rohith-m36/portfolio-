import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';

const Education = () => {

    const experienceAndEducation = [
        {
            id: 1,
            name: "Bachelor's in Technology - Computer Science and Engineering",
            type: "Education",
            details: "Completed my Bachelor's degree from Malla Reddy University, Hyderabad with a final percentage of 7.98(CGPA)."
        },
        {
            id: 2,
            name: "Machine Learning Virtual Internship - Bharat Intern",
            type: "Internship",
            details: "Completed an internship in Machine Learning with Bharat Intern, gaining practical knowledge in machine learning algorithms and data analysis."
        },
        {
            id: 3,
            name: "Data Analysis with Python - IIT Roorkee",
            type: "Certification",
            details: "Completed a certification in Data Analysis with Python from IIT Roorkee via NPTEL, strengthening my data analysis skills."
        },
        {
            id: 4,
            name: "AWS Cloud - AWS Academic",
            type: "Certification",
            details: "Completed a certification in AWS Cloud, learning about cloud services and architecture."
        },
        {
            id: 5,
            name: "Data Analysis with Python - IBM",
            type: "Certification",
            details: "Completed a certification in Data Analysis with Python from IBM, focusing on data manipulation and visualization techniques."
        },
        {
            id: 6,
            name: "Front-End Developer Intern - Abilio IT Solutions",
            type: "Internship",
            details: "June 2024 – November 2024\n• Designed and developed responsive websites using React.js, JavaScript, HTML, and CSS.\n• Ensured cross-browser compatibility and optimized performance.\n• Utilized Sass for maintainable and efficient CSS structures."
        },
    ];

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>My Education & Internship Experience</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {experienceAndEducation.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                    <p className='text-sm mt-1'>{item.type}</p>
                                </div>
                                <p className='py-3'>{item.details}</p>
                                <div className='flex justify-between items-center'>
                                    <Quote className='text-red-400' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Education;
