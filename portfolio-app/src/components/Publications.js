import React from 'react';
import "./Publications.css"
import publicationList from "../data/publications.json"

const Publications = () => {
  return (
    <div className="publications-container">
      <h2 className="publications-header">Publications</h2>
      <ul className="publications-list">
        {publicationList.map((publication, index) => (
          <li className="publication-item" key={index}>
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="publication-link">
              <h3 className="publication-title">{publication.title}</h3>
            </a>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-journal">{publication.journal}, {publication.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
