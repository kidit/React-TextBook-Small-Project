import { useRef, useCallback, useState } from 'react';
import {produce} from 'immer';

const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: '', username: '' });
    const [data, setData] = useState({
        array: [],
        uselessValue: null
    });

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        // Directly use produce without passing the current state to ensure immutability
        setForm(draft => {
            draft[name] = value;
        });
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        const info = {
            id: nextId.current++,
            name: form.name,
            username: form.username
        };

        // Use the functional update form to access the most current state
        setData(
            produce(draft => {
                draft.array.push(info);
            })
        );

        // Reset form state without needing to directly reference the form state
        setForm({ name: '', username: '' });
    }, [form.name, form.username]);

    const onRemove = useCallback(id => {
        // Use the functional update form to access the most current state
        setData(
            produce(draft => {
                draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
            })
        );
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="id"
                    value={form.username}
                    onChange={onChange} />
                <input
                    name="name"
                    placeholder="name"
                    value={form.name}
                    onChange={onChange} />
                <button type="submit">Register</button>
            </form>
            <div>
                <ul>
                    {data.array.map(info => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
