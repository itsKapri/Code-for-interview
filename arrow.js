const obj = {
    name: 'John',
    regularFunction: function() {
      console.log(this); // 'this' is the 'obj' object
    },
    arrowFunction: () => {
      console.log("arrow",this); // 'this' is the global object (window in browsers)
    },
  };
  
  obj.regularFunction(); // 'this' is the 'obj' object
  obj.arrowFunction(); // 'this' is the global object (window in browsers)
  