function isSubstring(string, substring) 
{
    const stringLength = string.length;
    const substringLength = substring.length;

    for (i = 0; i < stringLength - substringLength; i++) {
        for (j = 0; j < substringLength; j++) {
            if (string[i + j] !== substring[j]) break;
            if (j === substringLength - 1) return true;
        }
    }
    return false;
}

module.exports = isSubstring;
