import React from 'react';

const Home = () => {
  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">
          Hi, I'm <span className="fw-semibold">Rommi Kaestria</span>, a
          Educontent Creator
        </p>
      </header>
      <section className="mb-5">
        <h2 className="h3 mb-3">About Me</h2>
        <p>
          I am a passionate Teaching with experience in Data Analysis. I love
          creating innovative solutions and building amazing projects.
        </p>
      </section>
      <section className="mb-5">
        <h2 className="h3 mb-3">My Projects</h2>
        <p>Check out some of my work below:</p>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Project 1</h3>
                <p className="card-text">
                  A brief description of your project.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Project 2</h3>
                <p className="card-text">
                  A brief description of your project.
                </p>
              </div>
            </div>
          </div>
          {/* Tambahkan lebih banyak project jika diperlukan */}
        </div>
      </section>
    </div>
  );
};

export default Home;
