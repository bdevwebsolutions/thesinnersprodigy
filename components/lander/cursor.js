import React from 'react'
import {CursorContainer} from './styles';
import Angel from '../../media/svg/cursor_angel.svg';
import Devil from '../../media/svg/cursor_devil.svg';


//ICONS


export const Cursor = () => {


    return (
        <CursorContainer>
            <>
                <button><Angel/></button>
                <button><Devil/></button>
            </>
        </CursorContainer>
    )
}