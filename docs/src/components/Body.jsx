import React from 'react';

export default function Body() {
    return (
        <div className="app_body">
            <div className="info-div">
                <p className="text">This is the page for the AyED II subject's repository. You will find here links to my profiles and the subject's repository.</p>
                <div className="buttons">
                    <button className="btn btn-info"><a className="link" href="https://souto751.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio</a></button>
                    <button className="btn btn-primary"><a className="link" href="https://www.linkedin.com/in/souto751/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                    <button className="btn btn-warning"><a className="link" href="https://github.com/Souto751" target="_blank" rel="noreferrer">GitHub</a></button>
                    <button className="btn btn-success"><a className="link" href="https://github.com/Souto751/isft151-ayed-2" target="_blank" rel="noreferrer">Repository</a></button>
                </div>
            </div>
        </div>
    )
}
