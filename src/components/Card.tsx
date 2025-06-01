import React from 'react'

interface CardProps {
    title?: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title,children}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4">
        {title && <h2 className="text-lg font-semibold mb-2"> {title} </h2>}
        {children}
    </div>
  )
};

export default Card