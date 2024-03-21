// Create an array of objects for the initial freelancers
const freeLancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70
  }
];

// Create an array with a list of sample freelancers
// This list will be used to add additional lancers to the initial array list
const sampleFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


// Create a render function that will list these freelancers, their price, and occupation on the HTML page
const render = () => {
  // Use DOM selectors and methods to create 'li' elements for each freelancers (object) in the array
  const lancers = document.querySelector("#lancers");
  // Loop through the array using map
  const lancersElement = freeLancers.map((lancers) => {
    const element = document.createElement("li");
    element.classList.add("border");
    element.innerText = `Name: ${lancers.name} --- Occupation: ${lancers.occupation} --- Starting Price: $${lancers.price}`
    return element
  });
  // Add the created "li" elements above to the parent element with id=lancers
  // Use spread operator to add each element from the array created by .map method
  lancers.replaceChildren(...lancersElement);
};


// Create a function to add new freelancers 1 by 1 to the initial array list
const addFreelancers = () => {
// Loop through the sampleFreelancers array and push each element to the initial array
  for (let i = 0; i < sampleFreelancers.length; i++) {
    freeLancers.push(sampleFreelancers[i]);
    render()
  }
};

// render the initial list
render();

addFreelancers();

 // Rerun this function at specific time intervals
const addFreelancersIntervalId = setInterval(addFreelancers, 100000);

  // Create a function to find the mean price all all the freelancers
  const meanPrice = () => {
    const totalPrice = freeLancers.reduce((total, currentPrice) => {
      return total + currentPrice.price
    }, 0)
    return totalPrice
  };

  console.log(meanPrice())

    // Update this mean price as new freelancers are added to the array 