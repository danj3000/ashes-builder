export const CardType = {
    Upgrade: 'Alteration Spell',
    Phoenixborn: 'Phoenixborn',
    ActionSpell: 'Action Spell',
    ReactionSpell: 'Reaction Spell',
    ReadySpell: 'Ready Spell',
    Ally: 'Ally',
    Conjuration: 'Conjuration',
    ConjuredAlteration: 'Conjured Alteration Spell',
    Aspect: 'Aspect',
    ConjuredAspect: 'Conjured Aspect',
    Chimera: 'Chimera',
    Behaviour: 'Behaviour'
};

export const ConjurationTypes = [CardType.Conjuration, CardType.ConjuredAlteration];

export const Magic = {
    Ceremonial: 'ceremonial',
    Charm: 'charm',
    Divine: 'divine',
    Illusion: 'illusion',
    Natural: 'natural',
    Sympathy: 'sympathy',
    Time: 'time',
    // Rage: 'rage'
};

export const MagicTypes = [
    'ceremonial',
    'charm',
    'divine',
    'illusion',
    'natural',
    'sympathy',
    'time'
];

export const Level = {
    Basic: 'basic',
    Class: 'class',
    Power: 'power'
};

// to support ashes.live text parse code
export const diceList = ["ceremonial", "charm", "illusion", "natural", "divine", "sympathy", "time"]
