To run the project locally, we need to make sure that Node and npm is installed in your system. in the terminal and run the command npm start to start the local server. The project will run on your local machine and can view in website.

The overall structure of the code consists of components and state management using React. The main component is "ExpenseTracker", which handles the state for managing expenses and rendering the user interface. The input fields, expense lists, and total cost are all rendered within this component.

State in the application is managed using the 'useState' hook from React or even Redux, a state management libary. Why 'useState' ? It allows us to initialize and update the state variables and it is simple and efficient way to manage state with the functional components.

'The bignumber.js' library is used for calculations to handle decimal numbers with high precision. It is used for financial and situations where accurate decimal calculations are required. Here, in expense tracker, bignumber.js is used to calculate the price and the percentage in a precise manner.

The user interface should be simple and easy to use when a user wants to access the interface it should be easily understandable which is reliable. Those expenses should be listed as clear and in a organized format. Total cost should be displayed at bottom for easy reference. Mainly, it makes the user to add and track the expenses adequately.

Tasks:

To create a form for user to enter the expense details
To manage and display the list of expenes with calculated prices
To implement the function of adding and deleting the expenses
Using bignumber.js for precise calculations
Then To design a clean User Interface in a simple way as mentioned
