// DESCRIPTION:
// Given the molecular mass of two molecules M1 and M2,their masses present m1 and m2 in a vessel of volume V at a specific temperature Text, find the total pressure Ptotal exerted by the molecules.



//My Solution:
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const gasConstant = 0.082; // units: L·atm·K⁻¹·mol⁻¹
    const kelvinTemperature = temp + 273.15; // convert Celsius to Kelvin
  
    const moles1 = givenMass1 / molarMass1;
    const moles2 = givenMass2 / molarMass2;
    const totalMoles = moles1 + moles2;
  
    const pressure = totalMoles * gasConstant * kelvinTemperature / volume; // units: atm
  
    return pressure;
  }