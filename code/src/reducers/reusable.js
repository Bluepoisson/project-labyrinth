import { game } from './game';

const START_URL = 'https://wk16-backend.herokuapp.com/start'
const username = '',

export const generateNewgame = () => {
return ( dispatch) => {
    fetch(START_URL, {
        method: 'POST',
        header: { 'Content-type': application/JSON},
        body: JSON.stringify({ username: username })
    })
        .then(res => res.json())
        .then(data => 
            dispatch(game.actions.generateNewgame(data)));

    }
   
}