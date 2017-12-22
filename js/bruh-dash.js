var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function(array){
      return array[0];
      // array.shift() works as well //
  },

  // returns the last element of an array
  last: function(array){
      return array[array.length -1];
      // array.pop() works as well //
  },

  // returns the index of the first matching element from left to right
  indexOf: function(array, value){
      return array.indexOf(value);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function(array, value){
      return array.lastIndexOf(value);
  },

  // returns an array with all elements except for the last element
  initial: function(array){
      array.pop();
      return array;
  },
  
  // returns an array with all falsey values removed
  compact: function(array){
        return array.filter(Boolean);
      },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function(array, start, end){
      return array.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, n){ 
    if (n === 0){
        return array;
    // if n equals 0 amount of elements, whole array is returned //
      }else if (n){
        array.splice(0, n);
        return array;
    // if n amount is specified, return array starting from beginning //
    // array.splice(0,n) = [1,2]
    // array = [3,4,5]
      }else{
        array.shift();
        return array;
    // if n amount is not specified, return array without first element //
    // array.shift() = [1]
    // array = [2,3,4,5]
      }  
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, n){
    if (n === 0){
     return array;
    // if n is 0; return whole array //
    }else if (n){
      array.splice(-n);
      return array;
    // if n is specified, return array starting from end (-) //
    // array.splice(-2) = [4,5] //
    // array = [1,2,3] //
    }else{
      array.pop();
      return array;
    // if n is not specified, return array without last element //
    // array.pop() = [5] //
    // array = [1,2,3,4] //
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function(array, n){
    if (n === 0){
      array = [];
      return array;
    }else if (n > array.length){
      return array;
    }else if (n){
      array.splice(n);
      return array;
    }else if (array){
      return [array[0]];
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function() {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
