import sortedUniq from 'lodash/sortedUniq';

const sortSize = (option) => {
  option.list.sort((a, b) => {

    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return option;
};

const sortOthers = (option) => {
  option.list.sort((a, b) => {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return option;
}

export const itemOptions = (items, options) => {
  console.log(items)
  items.map(item => {
    options.map(option => {
      if(!option.list) {
        option.list = [];
      }
      if(option.list.indexOf(item[option.id]) === -1) {
        option.list.push(item[option.id]);
      }
    });
  });
  options.map(option => {
    //console.log(option)
    switch(option.id) {
    // case 'Size':
    //   sortSize(option);
    //   break;
    default:
      sortOthers(option);
    }
  });
  return options;
};
