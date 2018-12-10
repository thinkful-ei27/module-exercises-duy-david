const Item = (function () {
  var validateName = function(name){
    if (!name){
      throw TypeError('Name does not exist');
    }
  }
    
  var create = function (name){
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  }
  return {
validateName,
create
  };
}() );
