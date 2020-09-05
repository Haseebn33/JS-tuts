    console.log('Hello JavaScript'); // first line of code to print on console
    //  alert(' Hello'); // alert

    //Variables
    var b = 'Javascript';
    console.log(b);

    var a = 80;
    var b = 60;
    var c = a + b;
    console.log(c);

    document.getElementById('text').innerHTML = 'Hello JS'; // output would be visible on html page not on console

    var name = prompt('What is your Name?');
    document.getElementById('pname').innerHTML = 'Hello ' + name + ','; // Displays the name obtained via prompt on the HTML page

    // Numbers

    var a1 = 55.5;
    var b1 = 69.86122;
    var c1 = a1 + b1;
    console.log(c1);

    c1++; // increment
    console.log(c1);


    c1--;
    console.log(c1);


    // functions
    /*   SYNTAX
        function name(params) {
            
        }

        */

    function fun() {

        console.log('This is a function');

    }

    fun(); // FUNCTION CALL

    /* create a function that takes name and returns  Hello followed by name



    */


    function greeting(yourName) {

        var greet = 'Hello ' + yourName;
        console.log(greet);
    }
    //  var name = prompt('What is your name ?');
    //  greeting(name); // function call

    //function with arguements

    // function to add 2 numbers

    function addNum(a, b) {
        var sum = a + b;
        console.log(sum);

    }

    addNum(5, 10);


    //While loop
    /*
    while (condition) {
        
    }

    */
    /*
        var num = 0;
        while (num < 100) {
            num += 10;
            console.log(num);
        }

    */

    //for
    /*

    SYNTAX

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    */


    for (let num = 0; num <= 100; num++) {
        console.log(num);
    }

    //DATATYPES

    var age = 18; // number
    let name = 'Abhi'; //String
    /* let fullName = (first: 'Abhijeet'
         last: 'Kumar'); //object*/
    let truth = false; //boolean
    let fruits = ['apple', 'banana', 'grapes']; // array
    let random; // undefined
    let ab = null; //  null value

    //Strings

    let fruit = 'banana';
    let commonFruits = 'Apple\nBanana\nGrapes'; //New line
    console.log('Length of string =', commonFruits.length);

    console.log(fruit.indexOf('n')); // To find the specified character location
    console.log(fruit.slice(2, 6)); // To slie  the specified character location