
# CosmoChat

CosmoChat is an interactive chat application that leverages the power of Gemini AI to provide users with intelligent and engaging conversations. The application features a landing page with a "Start Chat" button, which transitions to the chat interface. Users can interact with the chatbot and access user details through a modal dialog.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Methodology](#methodology)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Animated landing page with "Start Chat" button
- Interactive chat interface
- Hover animations for user icons and buttons
- Modal dialog for user details
- Responsive design for various screen sizes
- Real-time chat functionality with Gemini AI

## Tech Stack

- **Frontend:**
  - React
  - CSS3
  - Semantic UI
  - Material UI

- **Backend:**
  - Node.js
  - Express
  - Google Gemini AI

- **Others:**
  - Webpack
  - Babel

## Methodology

### Frontend

The frontend of CosmoChat is built using React and CSS3. The landing page includes animations and transitions to enhance user experience. The chat interface is interactive and responsive, ensuring usability across different devices. A modal dialog is used to display user details.

### Backend

The backend is built using Node.js and Express. The application integrates with the Google Gemini AI for generating intelligent chat responses. The backend handles API requests and serves the frontend files.

### Animations

- **Text Animation:** The "Welcome to CosmoChat" text moves horizontally with a `moveText` keyframe animation.
- **Image Animation:** The chatbot icon bounces with a `bounce` keyframe animation.
- **Button Hover Animation:** The "Start Chat" button scales up on hover.
- **Glitter Effect:** A glitter effect is applied when the button is clicked using a pseudo-element.

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/yourusername/cosmochat.git
cd cosmochat
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file in the root directory and add your Google Gemini AI API key:

```
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

### Run the Application

```bash
npm start
# or
yarn start
```

The application will be running on `http://localhost:3000`.

## Usage

### Starting the Chat

1. Open the application in your browser.
2. Click on the "Start Chat" button on the landing page.
3. Interact with the Gemini AI chatbot.

### Viewing User Details

1. Click on the user icon in the top right corner of the chat interface.
2. A modal dialog will appear displaying user details.
3. Click "Close" to hide the modal or "Exit" to return to the landing page.

## Folder Structure

```
cosmochat/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── chatbot_icon.png
│   │   ├── user_icon.png
│   │   └── ...
│   ├── components/
│   │   ├── LandingPage/
│   │   │   ├── LandingPage.jsx
│   │   │   └── LandingPage.css
│   │   ├── Main/
│   │   │   ├── Main.jsx
│   │   │   └── Main.css
│   │   └── UserModal/
│   │       ├── UserModal.jsx
│   │       └── UserModal.css
│   ├── context/
│   │   └── context.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
