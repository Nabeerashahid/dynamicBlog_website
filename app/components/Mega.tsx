import React from 'react'
import BlogCard from '../components/Blogcard';
import { title } from 'process';
export default function Mega() {

  const posts = [


    {
      id: '1',
      title : 'Nextjs',
      description: "Explore the Nextjs, the Backbone of every webpage",
      date: "2024-11-10",
      imageUrl: "/images/nextjs.jpeg",
    },

    {
      id: '2',
      title : 'Talwind css',
      description: "Talwind css is the building block of webdevelopment ",
      date: "2024-11-10",
      imageUrl: "../images/nextJs2.jpg",
    },

    {
      id: '3',
      title : 'Nextjs Vs Remix',
      description: "Next.js is versatile; Remix focuses on nested routing and optimized server-side data handling.",
      date: "2024-11-10",
      imageUrl: "../images/nextjs3.webp",
    },

    {
      id: '4',
      title : 'Nextjs Vs React',
      description: " Next.js extends React with built-in routing, server-side rendering, and performance optimizations.",
      date: "2024-11-10",
      imageUrl: "../images/nextjs4.jpeg",
    },
    
    {
      id: '5',
      title : 'Learn Nextjs',
      description: " A React framework with server-side rendering, static site generation, and built-in routing",
      date: "2024-11-10",
      imageUrl: "../images/nextjs5.png",
    },

    {
      id: '6',
      title : 'Nextjs Enterprise',
      description: " Scalable and optimized for enterprise apps.",
      date: "2024-11-10",
      imageUrl: "../images/nextjs6.jpeg",
    },

    {
      id: '7',
      title : 'Welcome to Nextjs',
      description: " Build fast, scalable, and modern web applications effortlessly",
      date: "2024-11-10",
      imageUrl: "../images/nextjs7.png",
    },

    {
      id: '8',
      title : 'Welcome to Nextjs',
      description: " Boost your app's performance effortlessly.",
      date: "2024-11-10",
      imageUrl: "../images/nextjs8.png",
    },

    {
      id: '9',
      title : ' Nextjs Project',
      description: " Next.js is a React framework for fast, scalable web apps with SSR and SSG.",
      date: "2024-11-10",
      imageUrl: "../images/nextjs9.png",
    },

  ];
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-blue-600 animate-color-change'> Exploring the World of AI and Technology.
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
               <BlogCard post={post} isDarkBackground = {index % 2 === 0} />
                </div>
              </div>
        ))}
      </div>
    </div>
  )
}
