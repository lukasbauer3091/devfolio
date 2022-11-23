import React from 'react';

import Section from '../section';

const SectionGpa = ({ gpa }) => {
    return (
        <Section title="Graduating GPA">
            <div className="mb-6">
                <p>{gpa}</p>
            </div>
        </Section>
    );
};

export default SectionGpa;