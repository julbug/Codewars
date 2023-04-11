// DESCRIPTION:
// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0


//My Solution:
function sakuraFall(v) {
    // Check if velocity is non-positive
    if (v <= 0) {
      return 0;
    }
    // Calculate time for petal to reach ground
    const t = 400 / v;
    return t;
  }

// 1. The function sakuraFall takes one input parameter v which represents the velocity of the petal in cm/s.
// 2. First check if the velocity is non-positive (less than or equal to 0). If it is, we return 0 as the time it takes for the petal to reach the ground.
// 3. If the velocity is positive, calculate the time it takes for the petal to reach the ground using the formula distance = velocity * time. Here, the distance is 400 cm (the height of a typical cherry blossom tree) and the velocity is v cm/s. Solve for time and return it as the output of the function.
// 4. Note that the variable t is in seconds, which matches the unit of time given in the problem statement.


//**The height of a typical cherry blossom tree is around 5 to 15 meters (or 16 to 49 feet). For the purpose of this problem, let's assume a height of 10 meters (or 400 centimeters) from which the petal falls. Therefore, we can use the distance of 400 cm in the calculation of the time it takes for the petal to reach the ground. */