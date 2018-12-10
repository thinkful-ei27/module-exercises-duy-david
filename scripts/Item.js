const Item = (function () {
  function validateName(name){
    if (typeof name === "undefined"){
      throw TypeError('Name does not exist');
    }
  }
    
  function create(name){
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  }
  return {
    validateName: validateName,
    create: create,
  };
}() );
