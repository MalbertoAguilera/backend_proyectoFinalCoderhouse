//funcion para cortar el array y pasarlo a un array de que contiene 3 elementos por posicion
const arrayOfArray = (array) => {
  const newArray = [];
  const cutSize = 3;
  for (let index = 0; index < array.length; index += cutSize) {
    newArray.push(array.slice(index, index + cutSize));
  }
  return newArray;
};

module.exports = arrayOfArray;
