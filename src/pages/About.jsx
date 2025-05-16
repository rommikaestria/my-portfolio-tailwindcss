import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-5 fw-bold">About Me</h1>
      </header>
      <section className="mb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="fs-5">
                  Hello! My name is{' '}
                  <span className="fw-semibold">Rommi Kaestria</span>, and I am
                  a EduContent Creator with a passion for Coding . I have 12
                  years of experience in House Development, specializing in
                  PHP,Python,Javascript,Dart,SQL.
                </p>
                <p className="fs-5">
                  I enjoy solving complex problems, learning new technologies,
                  and collaborating with others to create impactful projects. My
                  goal is to continuously grow as a professional and contribute
                  to meaningful innovations.
                </p>
                <p className="fs-5">
                  When I'm not working, I love Watching Movies,listening to
                  lofi,watch sports like basketball and football, exploring new
                  ideas, and connecting with like-minded individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center mt-5 pt-4 border-top">
        <p className="mb-0">
          Feel free to reach out if you'd like to collaborate or learn more
          about me!
        </p>
      </footer>
    </div>
  );
};

export default About;
