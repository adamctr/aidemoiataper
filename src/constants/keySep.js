const SEPARATOR = "%%%";
const KEY_SEP = "[Touch]";
const splitKeySentence = (sentence) => sentence.split(SEPARATOR);
const showKeyTemp = (key) => `${SEPARATOR}${KEY_SEP}${key}${SEPARATOR}`;

export { SEPARATOR, KEY_SEP, splitKeySentence, showKeyTemp };
