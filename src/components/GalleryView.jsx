import React from 'react';

const GalleryView = () => {
    return (
        <div className="flex flex-col items-center py-6 min-h-screen bg-green-300">
            <h1 className="text-4xl font-semibold mb-10">Our Gallery View</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-7xl">
                <img src="/pot1.jpeg" alt="A variety of potted plants on a table" className="w-full h-auto"/>
                <img src="/pot2.jpeg" alt="A collection of potted plants on a wooden shelf" className="w-full h-auto"/>
                <img src="/p.jpg" alt="A variety of potted plants on a modern shelf" className="w-full h-[300px]"/>
                <img src="/p1.jpg" alt="A large potted plant in a living room" className="w-full h-auto"/>
                <img src="/pot1.jpeg" alt="A greenhouse with various plants" className="w-full h-auto"/>
                <img src="/pot1.jpeg" alt="A variety of potted plants on a table" className="w-full h-auto"/>
            </div>
        </div>
    );
};

export default GalleryView;
