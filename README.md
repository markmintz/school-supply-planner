# School Supply Planner

A modern React web application designed to help teachers, students, and parents manage and track school supplies needed for various classes. This is a proof-of-concept application with all data stored in memory.

## Features

### For Teachers
- View classes you teach
- See all required supplies for your classes
- Access detailed supply lists for each class
- Get suggestions for helping parents and students with supply management

### For Students
- View your enrolled classes
- See all supplies you need across all classes
- Check off supplies as you acquire them
- Filter supplies by category
- Print shopping lists

### For Parents
- View all classes your children are enrolled in
- See consolidated supply lists for all your children
- Track which supplies have been obtained
- Print comprehensive shopping lists

## Key Features
- **Role-based Access**: Different views and functionality based on user type
- **Modern UI**: Clean, responsive design that works on all devices
- **Supply Tracking**: Interactive checkboxes to track obtained supplies
- **Class Management**: Detailed views of each class and its requirements
- **Filtering & Sorting**: Organize supplies by category and name
- **Print Support**: Print-friendly supply lists
- **Demo Mode**: Easy user switching for testing different roles

## Technology Stack
- **Frontend**: React 18 with functional components and hooks
- **Routing**: React Router DOM for navigation
- **Styling**: Modern CSS with responsive design
- **State Management**: React Context API for authentication
- **Data**: Mock data stored in memory (no backend required)

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd school-supply-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open the application**
   - Navigate to `http://localhost:3000` in your web browser
   - The application will automatically reload when you make changes

### Demo Users

The application comes with pre-populated demo users for testing:

#### Teachers
- **Mrs. Johnson** - `johnson@school.edu`
  - Teaches Mathematics 5A
- **Mr. Smith** - `smith@school.edu`
  - Teaches Science 5A
- **Ms. Davis** - `davis@school.edu`
  - Teaches English 5A

#### Students
- **Emma Thompson** - `emma.thompson@student.school.edu`
  - Grade 5 student enrolled in multiple classes
- **Jake Martinez** - `jake.martinez@student.school.edu`
  - Grade 5 student
- **Sophia Chen** - `sophia.chen@student.school.edu`
  - Grade 5 student with art classes

#### Parents
- **David Thompson** - `david.thompson@parent.school.edu`
  - Parent of Emma Thompson
- **Carlos Martinez** - `carlos.martinez@parent.school.edu`
  - Parent of Jake Martinez

*Note: Any password will work for demo users - this is for demonstration purposes only.*

## Application Structure

```
src/
├── components/          # React components
│   ├── Dashboard.js     # Main dashboard view
│   ├── LoginPage.js     # Login and user selection
│   ├── Layout.js        # App layout with navigation
│   ├── ClassDetail.js   # Individual class details
│   ├── SupplyList.js    # Complete supply list view
│   └── ProtectedRoute.js # Route protection
├── context/
│   └── AuthContext.js   # Authentication context
├── data/
│   └── mockData.js      # Mock data and helper functions
├── App.js               # Main app component
├── App.css              # Application styles
└── index.js             # App entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Features in Detail

### Dashboard
- Welcome message personalized by user role
- Quick overview of classes and supplies
- Supply categories with preview of items
- Easy navigation to detailed views

### Class Details
- Complete information about each class
- Organized supply lists by category
- Teacher-specific notes and suggestions
- Print functionality for supply lists

### Supply Management
- Complete list of all required supplies
- Filter by category (Writing, Art, Math, etc.)
- Sort by name or category
- Progress tracking with checkboxes
- Visual progress indicators

### User Experience
- Responsive design for mobile, tablet, and desktop
- Modern, clean interface
- Intuitive navigation
- Print-friendly layouts
- Accessibility considerations

## Customization

### Adding New Data
Edit `src/data/mockData.js` to:
- Add new users, classes, or supply items
- Modify relationships between users and classes
- Update supply requirements for classes

### Styling
Modify `src/App.css` to:
- Change color schemes
- Adjust layouts
- Update component styling
- Add new visual elements

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements
- Backend integration with real database
- User registration and password management
- Supply sharing between families
- Notification system for new requirements
- Shopping list export to external services
- Mobile app version

## License
This project is a proof-of-concept for educational purposes.

## Support
For questions or issues with this demo application, please refer to the code comments and documentation within the source files.
