// JobsList.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Search } from 'lucide-react';
import './JobsList.scss';

const JobsList = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Product Manager",
      location: "New York, NY",
      type: "Remote",
      salary: "$165,600",
      tags: ["Digital", "Product", "Management"],
      date: "Aug 17, 2023"
    },
    {
      id: 2,
      title: "Marketing Project Manager",
      location: "Stamford, CT",
      type: "Remote",
      salary: "$198,000",
      tags: ["Business", "Marketing", "Project"],
      date: "Aug 18, 2023"
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      location: "Brooklyn, NY", 
      type: "Hybrid",
      salary: "$185,000",
      tags: ["React", "Node.js", "TypeScript"],
      date: "Aug 19, 2023"
    },
    {
      id: 4,
      title: "UX/UI Designer",
      location: "Manhattan, NY",
      type: "On-site",
      salary: "$145,000",
      tags: ["Design", "Figma", "User Research"],
      date: "Aug 20, 2023"
    },
    {
      id: 5,
      title: "Data Scientist",
      location: "Jersey City, NJ",
      type: "Remote",
      salary: "$175,000",
      tags: ["Python", "Machine Learning", "SQL"],
      date: "Aug 21, 2023"
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <div className="page-content">
        <section className="jobs-hero">
          <div className="jobs-hero__container">
            <div className="jobs-hero__background"></div>
            
            <div className="jobs-hero__content">
              <h1 className="jobs-hero__title">Finding a job</h1>
              <p className="jobs-hero__subtitle">
                When you're searching for a job, there are a few things you can do to get
                the most out of your search
              </p>
            </div>

            <div className="jobs-hero__search">
              <div className="jobs-hero__search-container">
                <Search className="jobs-hero__search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="jobs-hero__search-input"
                />
                <button className="jobs-hero__search-button">Search</button>
              </div>
            </div>
          </div>
        </section>

        <section className="jobs-filter">
          <div className="jobs-filter__tabs">
            <button className="jobs-filter__tab jobs-filter__tab--active">All Jobs</button>
            <button className="jobs-filter__tab">Trending Jobs</button>
            <button className="jobs-filter__tab">Most Recent Jobs</button>
          </div>
          <div className="jobs-filter__types">
            <button className="jobs-filter__type">Full-time</button>
            <button className="jobs-filter__type">Remote</button>
          </div>
        </section>

        <section className="jobs-list">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-card__icon">
                <span className="job-card__icon-placeholder"></span>
              </div>
              <div className="job-card__content">
                <h2 className="job-card__title">{job.title}</h2>
                <div className="job-card__info">
                  <span>{job.location}</span>
                  <span className="job-card__separator">/</span>
                  <span>{job.type}</span>
                  <span className="job-card__separator">/</span>
                  <span>Avg. Salary {job.salary}</span>
                </div>
                <div className="job-card__tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="job-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="job-card__date">{job.date}</div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default JobsList;