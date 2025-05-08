import React from 'react';
import { useAppContext } from '../Context/Context';

const BlogArticles = () => {
    const { blog_Cards } = useAppContext();
    const getTag = (index) => {
        switch (index) {
          case 1:
            return 'Laws & Regulations';
          case 2:
            return 'Lifestyle';
          case 3:
            return 'Architecture & Interior Design';
          default:
            return 'Laws & Regulations';
            case 4:
                return 'Laws & Regulations';
            case 5:
                return 'Uncategorized';
        }
      };
      

    return (
        <div className="w-[80rem] mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blog_Cards.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={item.Image}
                            alt={item.Title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-[3px] mb-2">
                             {getTag(index)}

                            </span>
                            <h2 className="text-lg cursor-pointer hover:text-red-600 font-semibold text-gray-800 mb-2">
                                {item.Title}
                            </h2>
                            <p className="text-sm text-gray-600 mb-3">{item.Description}</p>
                            <div className="text-xs text-gray-500 flex items-center">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                {item.Date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <div className="bg-gray-200 w-full   h-0.5 rounded-xl mt-20"></div>
        </div>
    );
};

export default BlogArticles;
