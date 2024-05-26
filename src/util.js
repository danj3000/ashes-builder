import React from 'react';

export function imageUrl(cardStub) {
    if (cardStub && cardStub.includes('http')) {
        return cardStub;
    }
    if (cardStub && cardStub.includes('.')) {
        return `https://cdn.ashes.live/images/cards/${cardStub}`;
    }
    return `https://cdn.ashes.live/images/cards/${cardStub}.jpg`;
}

export const FilterContext = React.createContext(null);
