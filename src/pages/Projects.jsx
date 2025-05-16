import React from 'react';

const Projects = () => {
  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-5 fw-bold">My Projects</h1>
        <p className="lead">Here are some of the projects I've worked on:</p>
      </header>
      <section className="mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title h5">Project 1</h2>
                <p className="card-text">
                  Description of Project 1. Highlight the technologies used and
                  the main features.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title h5">Project 2</h2>
                <p className="card-text">
                  Description of Project 2. Explain your role and what you
                  accomplished.
                </p>
              </div>
            </div>
          </div>
          {/* Tambahkan lebih banyak project sesuai kebutuhan */}
        </div>
      </section>
      <footer className="text-center mt-5 pt-4 border-top">
        <p className="mb-0">
          Interested in more? Contact me for details about my other work!
        </p>
      </footer>
    </div>
  );
};

export default Projects;
