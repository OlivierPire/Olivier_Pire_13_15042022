import React from 'react';

const Features = ({src, alt, title, content}) => {
    return (
        <section className="features">
            {/* <h2 className="sr-only">Features</h2> */}
            <div className="feature-item">
                <img src={src} alt={alt}  className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>
                    {content}
                </p>
            </div>
        </section>
    );
};

export default Features;