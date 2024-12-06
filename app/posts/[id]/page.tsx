'use client';
import React from 'react'
import CommentSection from "../../components/Commentsection";
import Authorecard from "../../components/Authorecard";
import Footer from "../../components/Footer";
import { title } from 'process';

const posts = [
  {
    id:'1',
    title:"Nextjs 14",
    image: "../images/nextjs.jpeg",
    description: 'Nextjs base code',
  },

  {
    id: '2',
    title : 'Talwind css',
    image: "../images/nextJs2.jpg",
    description: "Talwind css is the building block of webdevelopment ",
  },

  {
    id: '3',
    title : 'Nextjs Vs Remix',
    image: "../images/nextjs3.webp",
    description: "Next.js is versatile; Remix focuses on nested routing and optimized server-side data handling.",
  },

  {
    id: '4',
    title : 'Nextjs Vs React',
    description: " Next.js extends React with built-in routing, server-side rendering, and performance optimizations.",
    date: "2024-11-10",
    image: "../images/nextjs4.jpeg",
  },
  
  {
    id: '5',
    title : 'Learn Nextjs',
    description: " A React framework with server-side rendering, static site generation, and built-in routing",
    date: "2024-11-10",
    image: "../images/nextjs5.png",
  },

  {
    id: '6',
    title : 'Nextjs Enterprise',
    description: " Scalable and optimized for enterprise apps.",
    date: "2024-11-10",
    image: "../images/nextjs6.jpeg",
  },

  {
    id: '7',
    title : 'Welcome to Nextjs',
    description: " Build fast, scalable, and modern web applications effortlessly",
    date: "2024-11-10",
    image: "../images/nextjs7.png",
  },

  {
    id: '8',
    title : 'Welcome to Nextjs',
    description: " Boost your app's performance effortlessly.",
    date: "2024-11-10",
    image: "../images/nextjs8.png",
  },

  {
    id: '9',
    title : ' Nextjs Project',
    description: " Next.js is a React framework for fast, scalable web apps with SSR and SSG.",
    date: "2024-11-10",
    image: "../images/nextjs9.png",
  },
]

export default function Post ({ params }: {params: {id:string}}) {
  const { id }  = params;
  const post = posts.find((p) => p.id === id);

  
  if(!post) {
    return(
      <h2 className='text-2xl font-bold text-center mt-10'> Post Not Found</h2>
    );
  }

  const renderParagraph = (description: string) => {
    return (
      <p className='mt-4 text-justify'>
        {description.trim()}
      </p>
    );
  };


  return(
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {" "}
        {post.title}
        </h1> 

      {post.image && (
        <img 
        src={post.image}
        alt={post.title}
        className='w-full h-auto rounded-md mt-4' />
      )}
         <div className='mt-6 text-lg text-slate-700'>
          {renderParagraph(post.description)}
         </div>

      <CommentSection postId={post.id} />
      <Authorecard />
      <Footer />
      </div>
  )
}