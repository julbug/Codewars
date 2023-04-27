// DESCRIPTION:
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.



//My Solution:
var number = function(busStops){
    let passengers = 0;
   
     for (let i = 0; i < busStops.length; i++) {
       passengers += busStops[i][0];    // people getting on
       passengers -= busStops[i][1];    // people getting off
     }
   
     return passengers >= 0 ? passengers : 0;
   };

// The number function is used to figure out how many people are left on a bus after it goes through a series of bus stops.

// Imagine the bus as a big box. At each bus stop, some people get on the bus, and some people get off. Each bus stop is represented by a pair of numbers. The first number tells us how many people get on the bus at that stop, and the second number tells us how many people get off the bus at that stop.

// The number function takes a list of these pairs of numbers, called busStops, as input. It starts with zero people on the bus.

// Then, it goes through each bus stop, one by one. At each stop, it adds the number of people getting on the bus to the current total number of people on the bus. After that, it subtracts the number of people getting off the bus from the current total.

// Finally, the function gives us the number of people who are still on the bus after going through all the stops. If the result is a negative number (which shouldn't happen according to the provided test cases), it returns zero instead.

// So, using the number function, we can find out how many people are left on the bus after it finishes all its stops.