import moment from 'moment';

export function dateToText(timestamp) {
  return timestamp ? moment(timestamp).format('DD.MM.YYYY') : ''; 
}

export function distanceToText(distance) {
  return distance ? distance.toFixed(1) : '';
}

export function dateTyping(prev, value) {
  if (prev.length < value.length) {
    if (!/\d$/.test(value) || value.length > 10) {
      return value.slice(0, value.length - 1);
    } 

    if (value.length === 2) {
      return value + '.';
    }

    if (value.length === 3) {
      return value.slice(0, value.length - 1) + '.' + value[value.length - 1];
    }

    if (value.length === 5) {
      return value + '.20';
    } 

    if (value.length === 6) {
      return value.slice(0, value.length - 1) + '.20' + value[value.length - 1];
    }
  } 

  if (prev.length > value.length) {
    if (value.length === 3) {
      return value.slice(0, value.length - 1);       
    }
    if (value.length === 8) {
      return value.slice(0, value.length - 3);       
    }
  }

  return value;
}


export function distanceTyping(prev, value) {
  if (prev.length < value.length) {
    if (!/\d$/.test(value) || value.length > 4) {
      return value.slice(0, value.length - 1);
    } 

    if (value.length === 2) {
      return value + '.';
    } 

    if (value.length === 3) {
      return value.slice(0, value.length - 1) + '.' + value[value.length - 1];
    }
  } 

  if (prev.length > value.length) {
    if (value.length === 3) {
      return value.slice(0, value.length - 1);       
    }
  }

  return value;
}

export function dateToInt(str) {
  if (!moment(str, 'DD.MM.YYYY').isValid()) {
    return null;
  }
  return moment(str, 'DD.MM.YYYY').unix();
}

export function distanceToInt(str) {
  let result = Number.parseFloat(str);
  if(isNaN(result)) {
    return null;
  }

  result = +result.toFixed(1);
  if ((result < 0) || (result > 99.9)) {
    result = null;
  }

  return result;
}