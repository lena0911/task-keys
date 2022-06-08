import { IItem } from './index';
import { useState, useEffect } from 'react';

interface IProps {
    initialData: IItem[];
    sorting: 'ASC' | 'DESC';
}

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    if (props.sorting == 'ASC') props.initialData.sort((a, b) => a.id - b.id);
    else props.initialData.sort((a, b) => b.id - a.id);

    return (
        <div>
            {props.initialData.map((user) => {
                if (user.id == id) {
                    return (
                        <input
                            autoFocus={true}
                            onChange={(e) => setName(e.currentTarget.value)}
                            key={user.id}
                            defaultValue={user.name}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    user.name = name;
                                    setId(0);
                                }
                                if (e.key == 'Escape') {
                                    setId(0);
                                }
                            }}
                        />
                    );
                } else {
                    return (
                        <div onClick={() => setId(user.id)} key={user.id}>
                            {user.name}
                        </div>
                    );
                }
            })}
        </div>
    );
}
