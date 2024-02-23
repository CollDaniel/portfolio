import React from 'react';
import Skills from '../Components/skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';

function ResumePage() {
    return (
        <MainLayout>
            <Resume />
            <Skills />
        </MainLayout>
    )
}

export default ResumePage
