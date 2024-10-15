# Internet Speed Test Web App

This project is a web application that allows users to test their internet download and upload speeds in real-time. It uses Node.js and Express on the backend and performs tests using public files for accurate speed measurement.

## Features
- **Download Speed Test**: Measures the time to download a file and calculates download speed in Mbps.
- **Upload Speed Test**: Measures the time to upload dummy data to the server and calculates upload speed in Mbps.

## Setup and Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the server:**
    ```bash
    node server.js
    ```

4. **Access the app in your browser:**
    - Go to `http://localhost:3000`

## How It Works

- The app tests your internet speed by downloading a publicly hosted file and uploading a dummy file.
- The **/testfile** endpoint serves as the download file, while **/upload** handles the file upload process.

## Contributing

Feel free to submit issues or fork the repository and submit pull requests.

## License
This project is open-source under the MIT License.
