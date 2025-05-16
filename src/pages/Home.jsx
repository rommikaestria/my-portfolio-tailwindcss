import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600">
          Hi, I'm{' '}
          <span className="font-semibold">Rommi Kaestria</span>, an Educontent
          Creator
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          I am a passionate Teaching with experience in Data Analysis. I love
          creating innovative solutions and building amazing projects.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        <p className="mb-6">Check out some of my work below:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600">
                A brief description of your project.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600">
                A brief description of your project.
              </p>
            </div>
          </div>
          {/* Tambahkan lebih banyak project jika diperlukan */}
        </div>
      </section>
    </div>
  );
};

export default Home;
