var flipText = function (text) {
    var flipDict = { 'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'L': '˥', 'M': 'W', 'N': 'И', 'P': 'Ԁ', 'R': 'ᴚ', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'Y': '⅄', 'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'm': 'ɯ', 'n': 'u', 'p': 'd', 'q': 'b', 'r': 'ɹ', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'y': 'ʎ', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '0': '0', '.': '˙', ',': '\'', '\'': ',', '"': ',,', '`': ',', '<': '>', '>': '<', '∴': '∵', '&': '⅋', '_': '‾', '?': '¿', '!': '¡', '[': ']', ']': '[', '(': ')', ')': '(', '{': '}', '}': '{' };
    for (var i in flipDict) {
        flipDict[flipDict[i]] = i;
    }
    var r = [];
    for (var ix = 0; ix < text.length; ix++) {
        var c = text.charAt(ix);
        var f = flipDict[c];
        r.push(typeof f != 'undefined' ? f : c);
    }
    return r.reverse().join('');
};

anything.prototype.flipText = flipText;