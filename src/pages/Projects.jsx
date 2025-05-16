import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">My Projects</h1>
        <p className="text-xl text-gray-600">Here are some of the projects I've worked on:</p>
      </header>
      
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Project 1</h2>
              <p className="text-gray-700">
                Description of Project 1. Highlight the technologies used and
                the main features.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Project 2</h2>
              <p className="text-gray-700">
                Description of Project 2. Explain your role and what you
                accomplished.
              </p>
            </div>
          </div>
          {/* Tambahkan lebih banyak project sesuai kebutuhan */}
        </div>
      </section>
      
      <footer className="text-center mt-12 pt-6 border-t">
        <p>
          Interested in more? Contact me for details about my other work!
        </p>
      </footer>
    </div>
  );
};

export default Projects;
