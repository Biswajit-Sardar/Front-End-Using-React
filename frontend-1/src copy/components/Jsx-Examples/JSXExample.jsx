import './JSXExample.css';

function JSXExample() {
    const name = "Alice";
    const calculations = {
        sum: (a, b) => a + b,
        multiply: (a, b) => a * b,
    };

    const age = 25;
    const hobbies = ["Reading", "Traveling", "Cooking"];
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="jsx-example">
            <h2>JSX Example</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Age in 5 Years: {age + 5}</p>
            <p>Name Uppercase: {name.toUpperCase()}</p>
            <p>Today's Date: {currentDate}</p>
            <p>Sum: {calculations.sum(10, 5)}</p>
            <p>Product: {calculations.multiply(4, 7)}</p>
            <h3>Hobbies: {hobbies.join(", ")}</h3>
            <p>Random number: {Math.floor(Math.random() * 100)}</p>
        </div>
    );
}
export default JSXExample;
