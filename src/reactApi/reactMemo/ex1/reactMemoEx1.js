import React from 'react';

export const ReactMemoExample = React.memo(({ text, clickHandler }) => {
    console.log('render ReactMemoExample');
    return (
        <button onClick={clickHandler}>{text}</button>
    )
});

