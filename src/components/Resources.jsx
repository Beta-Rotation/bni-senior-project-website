import React from "react";

const Resources = () => {
    return (
        <React.Fragment>
            <h3>Project Resources</h3>
            <ul>
                <li>
                    <a href="https://trello.com/b/4FAl6wly/senior-project" target="_blank" rel="noopener noreferrer">Trello Board</a> - Team Trello board used for tracking work stories.
                </li>
                <li>
                    <a href="http://bnibetarotation.se.rit.edu:8888" target="_blank" rel="noopener noreferrer">Algorithm Backtrester*</a> - Algorithm backtester hosted on a Jupyter Notebook.
                </li>
            </ul>
                <br /><br />
            <h3>Code Repositories (GitHub)</h3>
            <ul>
                <li>
                    <a href="https://github.com/scioffi/bni-senior-project-website" target="_blank" rel="noopener noreferrer">Team Website</a> - This website's code
                </li>
                <li>
                    <a href="https://github.com/scioffi/bni-frontend" target="_blank" rel="noopener noreferrer">Fontend Application*</a> - Frontend Web Application (JavaScript)
                </li>
                <li>
                    <a href="https://github.com/scioffi/bni-backend" target="_blank" rel="noopener noreferrer">Backend Application*</a> - Backend Web Application (Python)
                </li>
                <li>
                    <a href="https://github.com/scioffi/bni-algorithm-service" target="_blank" rel="noopener noreferrer">Algorithm Service*</a> - Algorithm service job and database scripts (Ruby)
                </li>
            </ul>
                <br /><br />
            <em><strong>* Due to Non-Disclosure Agreements (NDA) with the Sponsor, resources denoted by * are are protected under this NDA and require pre-approved authorization.</strong></em>
        </React.Fragment>
    );
};

export default Resources;