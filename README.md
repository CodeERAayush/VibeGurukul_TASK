# Course Explorer App

https://github.com/user-attachments/assets/24156b7e-576c-4125-9d1b-98c706dc2c0c



A React Native mobile application that allows users to browse, search, and enroll in courses. The app provides an intuitive interface for exploring educational content with additional features like theme customization and search functionality.

## Features

### Core Features
- Browse available courses with detailed information
- View comprehensive course details
- Enroll in courses
- Track enrolled courses
- Bottom tab navigation for seamless user experience

### Additional Features
1. **Search Functionality**
   - Real-time course search
   - Filter courses by name or instructor
   - Debounced Search

2. **Theme Customization**
   - Toggle between light and dark modes
   - Persistent theme preferences
   - Accessibility-friendly contrast ratios

## Technology Stack

- React Native
- React Navigation
- Context API for themes
- Redux Toolkit for enrolled courses
- Redux-Persist for persistant data
- Styled Components
- React Native Vector Icons
- Async Storage for local data persistence

## Installation

```bash
# Clone the repository
git clone https://github.com/CodeERAayush/VibeGurukul_TASK.git

# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android
```

## Project Structure

```
src/
├── components/
│   ├── CourseCardHorizontal.jsx
│   ├── CourseCardVertical.jsx
│   ├── EmptyComponent.jsx
│   ├── Header.jsx
│   ├── LessionItem.jsx
│   ├── SearchBar.jsx
│   ├── TabBar.jsx
│   ├── Typography.jsx
│   └── UtilityButton.jsx
├── screens/
│   ├── Home/
│   ├── CourseDetails/
│   ├── Search/
│   └── Enrolled/
├── context/
│   └── Theme.js
├── navigation/
│   ├── stacknavigator.js
│   └── bottomnavigator.js
├── helpers/
│   ├── DummyCources.json
│   └── NewCources.json
├── redux/
│   ├── slices/
│   └── store/
├── assets/
│   ├── Animations/
│   ├── Fonts/
│   ├── Icon/
│   ├── Image/
│   └── Colors/
└── utils/
```

## Implementation Approach

### State Management
- Utilized Context API for theme state management 
- Utilized Redux-Toolkit for Enrolled Course state management 
- Kept data persistent across the app 

### Navigation
- Bottom tab navigator for main screens
- Stack navigator for course details and search

### UI/UX Considerations
- Responsive design for various screen sizes
- Smooth animations and transitions
- Intuitive user interface
- Accessibility features

### Data Persistence
- Redux-Persist for enrolled courses
- Theme preferences persistence


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Contact

Your Name - [@Aayush Pandey](https://www.linkedin.com/in/aayush-pandey-a8b65b203/)
Project Link: [Project Link](https://github.com/CodeERAayush/VibeGurukul_TASK)
