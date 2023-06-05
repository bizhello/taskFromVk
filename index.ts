const splitTextIntoSMS = (str: string): Array<string> => {
    const words: Array<string> = str.split(' ')

    const elements: Array<string> = []
    let currentElement: string = ''

    for (let i = 0; i < words.length; i++) {
        const word = words[i]

        if ((currentElement.length + word.length + 4) < 140) {
            currentElement += (currentElement.length == 0 ? '' : " ") + word
        } else {
            elements.push(currentElement)
            currentElement = word
        }
    }

    elements.push(currentElement)

    if(elements.length == 1) {
        return elements
    } else {
        return elements.map((item, index) => `${item} ${index+1}/${elements.length}`)
    }

}

module.exports = splitTextIntoSMS
