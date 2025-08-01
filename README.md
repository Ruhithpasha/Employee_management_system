# Employee Management System

A full-stack web application for managing employees and tasks with authentication using MongoDB, Express.js, React, and Node.js.

## Features

- **Authentication System**: Secure login for Admins and Employees using JWT tokens
- **Registration System**: Public registration for both employees and admins (admin requires special key)
- **Role-Based Access**: Different dashboards for Admin and Employee roles
- **Task Management**: Create, assign, and track task status
- **MongoDB Integration**: Persistent data storage with MongoDB
- **Modern UI**: Beautiful React frontend with Tailwind CSS
- **RESTful API**: Express.js backend with proper middleware

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **React** with Vite
- **Tailwind CSS** for styling
- **Context API** for state management
- **Fetch API** for HTTP requests

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB installed and running
- Git

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/employee_management
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ADMIN_REGISTRATION_KEY=ADMIN_SECRET_2025
   ```

4. **Start MongoDB**
   ```bash
   sudo systemctl start mongodb  # Linux
   # or
   brew services start mongodb    # macOS
   # or run mongod directly
   ```

5. **Seed the database**
   ```bash
   npm run seed
   ```

6. **Start the backend server**
   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login for admin/employee
- `POST /api/auth/register` - Register new employee (admin only)
- `POST /api/auth/register/employee` - Public employee registration
- `POST /api/auth/register/admin` - Public admin registration (requires admin key)

### Employee Routes
- `GET /api/employee/profile` - Get employee profile
- `PUT /api/employee/task/:taskId` - Update task status

### Admin Routes
- `GET /api/admin/employees` - Get all employees
- `POST /api/admin/employees` - Create new employee
- `POST /api/admin/employees/:employeeId/tasks` - Assign task to employee
- `DELETE /api/admin/employees/:employeeId` - Delete employee
- `GET /api/admin/dashboard` - Get dashboard statistics

## Default Login Credentials

### Admin
- **Email**: `admin@me.com`
- **Password**: `123`

### Employees
1. **Ruhith**
   - **Email**: `e@e.com`
   - **Password**: `123`

2. **Sneha**
   - **Email**: `employee2@example.com`
   - **Password**: `123`

## Project Structure

```
ems/
├── backend/
│   ├── models/
│   │   ├── Admin.js
│   │   └── Employee.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── admin.js
│   │   └── employee.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── seed.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Auth/
    │   │   ├── Dashboard/
    │   │   ├── pageComponents/
    │   │   └── TaskList/
    │   ├── context/
    │   │   └── AuthProvider.jsx
    │   ├── services/
    │   │   └── apiService.js
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Features Overview

### For Admins
- View all employees and their task statistics
- Create new employee accounts
- Assign tasks to employees
- Delete employee accounts
- Dashboard with overall statistics

### For Employees
- View assigned tasks
- Update task status (New → Active → Completed/Failed)
- Personal dashboard with task counts
- Task filtering and management

## Registration Process

### Employee Registration
1. Click "Register here" on the login page
2. Select "Employee" as user type
3. Fill in:
   - First Name
   - Email Address
   - Password (minimum 6 characters)
   - Confirm Password
4. Click "Register as Employee"
5. Automatic login after successful registration

### Admin Registration
1. Click "Register here" on the login page
2. Select "Admin" as user type
3. Fill in:
   - First Name
   - Email Address
   - Password (minimum 8 characters)
   - Confirm Password
   - Admin Registration Key: `ADMIN_SECRET_2025`
4. Click "Register as Admin"
5. Automatic login after successful registration

> **Note**: The admin registration key can be changed in the backend `.env` file under `ADMIN_REGISTRATION_KEY`.

## Authentication Flow

1. **Login**: User provides email/password
2. **Verification**: Backend verifies credentials against MongoDB
3. **Token Generation**: JWT token created with user info
4. **Frontend Storage**: Token stored in localStorage
5. **Protected Routes**: Token validated for API requests
6. **Logout**: Token removed from storage and context

## Database Schema

### Employee Model
```javascript
{
  firstName: String,
  email: String (unique),
  password: String (hashed),
  role: String (default: 'employee'),
  taskCounts: {
    active: Number,
    newTask: Number,
    completed: Number,
    failed: Number
  },
  tasks: [TaskSchema]
}
```

### Admin Model
```javascript
{
  email: String (unique),
  password: String (hashed),
  role: String (default: 'admin'),
  firstName: String
}
```

### Task Schema
```javascript
{
  active: Boolean,
  newTask: Boolean,
  completed: Boolean,
  failed: Boolean,
  taskTitle: String,
  taskDescription: String,
  taskDate: String,
  category: String
}
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected API routes with middleware
- Role-based access control
- Input validation and sanitization
- CORS configuration for cross-origin requests

## Development

### Running Tests
```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### Building for Production
```bash
# Frontend
cd frontend
npm run build

# Backend is ready for production deployment
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running: `sudo systemctl status mongodb`
   - Check the connection string in `.env`

2. **Port Already in Use**
   - Change the port in `.env` file for backend
   - Frontend will automatically use next available port

3. **CORS Issues**
   - Verify frontend URL in backend CORS configuration
   - Check if both servers are running on correct ports

4. **Authentication Errors**
   - Clear localStorage in browser
   - Verify JWT_SECRET in `.env` file
   - Check token expiration (24 hours by default)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
