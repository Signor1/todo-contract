# Todo Contract

This is a Todo contract built with Solidity and tested using Hardhat. The contract provides CRUD (Create, Read, Update, Delete) functionality for managing a list of todo items.

## Features

- Add a new todo item
- Retrieve a todo item by index
- Retrieve all todo items
- Update the title of a todo item
- Remove a todo item

## Getting Started

### Installation

1. Clone this repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   cd <repository-folder>
   npm install
   ```

### Usage

1. Compile the contracts:

   ```
   npx hardhat compile
   ```

2. Run the tests:

   ```
   npx hardhat test
   ```

### Deployment

To deploy the contract to a live network:

1. Update the deployment configuration in `hardhat.config.js`.
2. Run the deployment script:

   ```
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

### Contract Interaction

Once deployed, you can interact with the contract using a web3 provider like MetaMask or through the Hardhat console.

## Testing

The contract is thoroughly tested using Hardhat's testing framework. The tests cover all functionalities of the contract including adding, retrieving, updating, and removing todo items.

To run the tests:

```
npx hardhat test
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
