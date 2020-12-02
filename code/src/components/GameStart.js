import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import Button from './Button';

const NewGameStart = () => {
    const [inputValue, setInputValue] = useState('');
    const username = useSelector(store => store.game.username)
    const dispatch = useDispatch

    const updateUserName = () => {
        dispatch(game.actions.updateUserName(inputValue))
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Type your username'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
              <Button 
              onButtonClick={updateUsername}
              text='Enter'
            />
          
        </div>
        

    );
};

export default NewGameStart;
