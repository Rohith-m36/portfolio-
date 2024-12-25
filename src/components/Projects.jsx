import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import MovieApp from '../assets/MovieApp.png'
import RecipeFinder from '../assets/RecipeFinder.png'
import trendifyshopping from '../assets/trendifyshopping.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Portfolio,
          live: "https://rohitsingh93300-portfolio.vercel.app/",
          github: "https://github.com/rohitsingh93300/portfolio"
        },
        {
          title: 'Movie App',
          desc: 'Developed a movie platform with search, ratings, and cast details, featuring smooth navigation and responsive design for an enhanced user experience.',
          image: MovieApp,
          live: "https://moviettt.netlify.app/",
          github: "https://github.com/Rohith-m36/movie-app"
        },
        {
          title: 'Recipe Finder',
          desc: 'I built a responsive recipe app with React.js, integrating an API for dynamic recipe details and seamless navigation.',
          image: RecipeFinder,
          live: "https://foodrecipesrrr.netlify.app/",
          github: "https://github.com/Rohith-m36/food-recipe"
        },
        {
          title: 'E-commerce',
          desc: 'Created a responsive e-commerce site with dynamic product search and filtering, featuring a user-friendly UI and modern design practices.',
          image:  trendifyshopping,
          live: "https://trendifyshopping.netlify.app/",
          github: "https://github.com/Rohith-m36/shopping"
        },
      
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
