import { useState } from 'react';
import Select from './Select';

export default function() {
    const [classID, setClassID] = useState('');
    const [tutorType, setTutorType] = useState('');
    const [classIfOther, setClassIfOther] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`
            Input   |   Value
        ------------+-----------
        Class       | ${classID}
        Tutor Type  | ${tutorType}
        Description | ${description}`);
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

            <Select
                currentVal={classID}
                options={[
                    { value: '', text: 'Please select a class' },
                    { value: 'ENG150', text: 'Intro to Literary Analysis' },
                    { value: 'MATH140', text: 'Calculus II' },
                    { value: 'PHIL150', text: 'Symbolic Logic' },
                    { value: 'OTHER', text: 'Other (Extracurricular)' },
                ]}
                handleChange={handleClassSelect}
            />

            <Select
                currentVal={tutorType}
                options={[
                    { value: '', text: 'Please select a tutoring type' },
                    { value: 'WRITING', text: 'Writing' },
                    {
                        value: 'CONTENT',
                        text: 'Content',
                        isDisabled: classID === 'OTHER',
                    },
                ]}
                handleChange={e => setTutorType(e.target.value)}
            />

            {classID !== '' && tutorType !== '' ? (
                <textarea
                    placeholder="What do you need help with?"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );
}
