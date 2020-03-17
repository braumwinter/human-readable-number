const READER = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

module.exports = function toReadable(number) {
    if(number === 0) {
        return 'zero';
    }

    let str = '';

    let hundred = Math.trunc(number / 100);

    if (hundred > 0) {
        for (let key in READER) {
            if (key == hundred) {
                str = str + READER[key] + ' hundred';
            }
        }
    }

    if ((number % 100) < 20) {
        let remainder = number % 100;

        if (str.length) {
            str += ' ';
        }

        for (let key in READER) {
            if (key == remainder) {
                str = str + READER[key];
            }
        }
    } else {
        let ten = Math.trunc(number % 100 / 10);
        ten *= 10;

        if (str.length) {
            str += ' ';
        }

        for (let key in READER) {
            if (key == ten) {
                str = str + READER[key];
            }
        }

        let units = number % 10;

        if (units) {
            if(str.length) {
                str += ' ';
            }

            for (let key in READER) {
                if (key == units ) {
                    str = str + READER[key];
                }
            }
        }
    }

    let result_str = str.trim();

    return result_str;
};
