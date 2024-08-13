# CLI Keys

`cli-keys` is a simple command-line tool for storing and retrieving key-value pairs using a JSON file. It's designed to be easy to use and extend for various CLI-based storage needs.

## Features

- **Set key-value pairs:** Store any key-value pair in a JSON file.
- **Get values by key:** Retrieve the value associated with a specific key.
- **Persistent storage:** The key-value pairs are stored in a `data.json` file, making them persistent across sessions.

## Installation

To install the `cli-keys` package globally on your system, run the following command:

```bash
npm install -g cli-keys
```
## Usage

Once installed, you can use the `clikeys` command to set and get key-value pairs.

### Set a Key-Value Pair

To set a key-value pair, use the following command:

```bash
clikeys set <key> <value>
```
This command will store the key username with the value Dheeraj in the data.json file.

### Get the Value for a Key

To retrieve the value for a specific key, use the following command:

```bash
clikeys get <key>
```
### Contributing
Feel free to submit issues or pull requests. Contributions are welcome!

