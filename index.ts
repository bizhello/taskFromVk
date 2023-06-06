const splitTextIntoSMS = (str: string): Array<string> => {
    const maxLengthFragment: number = 140
    const lengthPrefix = 4

    const words: Array<string> = str.split(' ')
    
    let currentFragment = '';
    const fragments: Array<string> = words.reduce((acc, word) => {
        const currentLengthFragment = currentFragment.length + word.length + acc.length.toString().length + lengthPrefix;
        const pastWord = currentFragment + (currentFragment.length > 0 ? ' ' : '')

        if (currentLengthFragment <= maxLengthFragment) {
          currentFragment = pastWord + word;
        } else {
          acc.push(currentFragment);
          currentFragment = word;
        }
    
        return acc;
      }, []);

    fragments.push(currentFragment);

    const fragmentsLength = fragments.length

    if (fragmentsLength === 1) {
        return fragments;
    }

    return fragments.map((item, index) => `${item} ${index + 1}/${fragmentsLength}`);
}

module.exports = splitTextIntoSMS
