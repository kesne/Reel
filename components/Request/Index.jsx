import { useState } from 'react';

export default function() {
    const [classID, setClassID] = useState('');
    const [tutorType, setTutorType] = useState('');
    const [classIfOther, setClassIfOther] = useState(null);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`
            Input  |   Value
        -----------+-----------
        Class      | ${classID}
        Tutor Type | ${tutorType}`);
    };

    const handleClassSelect = e => {
        setClassID(e.target.value);
        if (e.target.value === 'OTHER' && tutorType === 'CONTENT') {
            setTutorType('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Request a Tutor</h2>

            <select value={classID} onChange={handleClassSelect} required>
                <option value="" selected disabled>
                    Please select a class
                </option>
                <option value="ENG150">Intro to Literary Analysis</option>
                <option value="PHIL150">Symbolic Logic</option>
                <option value="MATH140">Calculus II</option>
                <option value="OTHER">OTHER (extracurricular)</option>
            </select>

            <select
                value={tutorType}
                onChange={e => setTutorType(e.target.value)}
                required
            >
                <option value="" selected disabled>
                    Please select a tutoring type
                </option>
                <option value="WRITING">Writing</option>
                <option
                    value="CONTENT"
                    disabled={classID === 'OTHER' ? true : false}
                >
                    Content
                </option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}
