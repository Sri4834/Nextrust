# NexGenTrust - Advanced Zero Trust Security Platform

## Overview

NexGenTrust is an enterprise-grade zero trust security platform designed to implement core security principles for modern organizations. The platform combines real-time IP monitoring, role-based access control, and dynamic file management to provide comprehensive security for sensitive data.

## Project Information

**Website Name:** NexGenTrust  
**Version:** 1.0.0  
**Type:** Zero Trust Security Platform  
**Technology Stack:** HTML, CSS, JavaScript (Vanilla)  
**Architecture:** Client-side session management with LocalStorage persistence
**YOU CAN ACCESS THIS WEBSITE HERE :-** https://v0-zero-trust-vault.vercel.app/

## Key Features

### 1. **Authentication System**
- User registration with role selection (Admin, Manager, Employee)
- Secure login with credential verification
- Support for both demo users and registered users
- Session management with IP tracking

### 2. **Real-Time IP Monitoring**
- Automatic IP address polling every 5 seconds
- VPN detection via IP change detection
- Automatic session termination on IP mismatch
- Trusted IP verification system

### 3. **Role-Based Access Control (RBAC)**
Three user roles with distinct permissions:

- **Admin**: Full access to all system files and maximum privileges
- **Manager**: Access to team, project, and departmental files
- **Employee**: Access to handbook and technical documentation

### 4. **Secure File Management**
- 12+ professional sample files with category separation
- Dynamic file downloads with custom popup preview
- IP-based and role-based file access restrictions
- Restricted file visibility for unauthorized roles (visible but locked)

### 5. **Security Features**
- Real-time security event logging
- Suspicious IP detection with instant alerts
- Auto-logout on security threats
- Custom popup alert system for all notifications
- Session tracking and activity monitoring

### 6. **Professional UI**
- Modern glassmorphism design with backdrop filters
- Responsive layout for all devices
- Beautiful custom popup alerts
- Color-coded status indicators
- Intuitive sidebar navigation

## Zero Trust Principles Implemented

### 1. **Verify Every Access**
Every user and device is verified before accessing resources, regardless of network location or previous access history.

### 2. **IP Monitoring**
Real-time IP address tracking and validation. Detect unauthorized access attempts or VPN usage instantly with 5-second polling intervals.

### 3. **Role-Based Access**
Granular access control with three role levels. Each role has specific file permissions with least privilege enforcement.

### 4. **Assume Breach**
Automatic logout and session termination on IP anomalies. The system assumes every connection might be compromised.

### 5. **Real-Time Logging**
Comprehensive security event logging. Track all access attempts, file downloads, and suspicious activities in the dashboard.

### 6. **Least Privilege**
Users only get access to resources they need. Restricted files are visible but locked for unauthorized roles preventing unauthorized downloads.

## File Structure

\`\`\`
NexGenTrust/
├── landing.html          # Landing page with project information
├── index.html            # Login page
├── signup.html           # User registration page
├── dashboard.html        # Main dashboard with file management
├── styles.css            # All styling (responsive design)
├── auth.js               # Authentication and login logic
├── signup.js             # Registration and validation logic
├── app.js                # Dashboard functionality and file management
└── README.md             # This file
\`\`\`

## User Credentials

### Demo Users (Pre-registered)
\`\`\`
Admin Account:
- Username: admin
- Password: admin123
- Role: Admin

Manager Account:
- Username: manager
- Password: manager123
- Role: Manager

Employee Account:
- Username: employee
- Password: emp123
- Role: Employee
\`\`\`

### Sample Registered User
After signing up, users can create custom accounts with any username, email, and role selection.

## How to Use

### 1. **Getting Started**
- Open `landing.html` to see the platform overview
- Click "Sign Up" to create a new account or use demo credentials
- Select your role during registration

### 2. **Login Process**
1. Enter username and password
2. Select your role from dropdown
3. System fetches your current IP
4. IP is stored as "trusted IP" for this session
5. Redirects to dashboard

### 3. **Dashboard Navigation**
- **Overview**: Session info and IP status
- **Files**: Browse and download files based on role
- **Security**: View security logs and activity

### 4. **File Access**
- **Public Files**: Accessible to all roles
- **Restricted Files**: 
  - Admin: Full access to all files
  - Manager: Access to team and project files
  - Employee: Limited access (can see but cannot download restricted files)

### 5. **VPN/IP Change Detection**
- System monitors IP every 5 seconds
- When VPN is enabled (IP changes):
  - "Suspicious IP detected" alert appears
  - User is automatically logged out after 3 seconds
  - Session is cleared and redirected to login

## Security Features Explained

### IP Monitoring
- **Initial Login**: System captures your current IP as "trusted IP"
- **Continuous Monitoring**: Every 5 seconds, system checks if your IP matches
- **VPN Detection**: When VPN is enabled, IP changes and triggers security alert
- **Auto-Logout**: Prevents unauthorized access from different locations

### Role-Based Permissions

**Admin Files (9 files)**
- System Administration Guide
- Server Infrastructure Report
- Financial Report Q4 2024
- Employee Handbook
- Strategic Plan 2025
- Operations Manual
- Technical Documentation
- Client Contract
- Security Audit

**Manager Files (4 files)**
- Team Performance Report
- Project Management Guide
- Departmental Guidelines
- Operations Manual

**Employee Files (3 files)**
- Employee Handbook
- Technical Documentation
- Daily Operations Checklist

### Restricted File Access
- Employees can **see** all restricted files in the dashboard
- When clicking download on restricted files, a popup appears:
  - "Access Denied - Insufficient Privileges"
  - Users are informed of their access limitations

## Technical Implementation

### Frontend Architecture
- **HTML**: Semantic structure with proper form handling
- **CSS**: Advanced styling with glassmorphism, gradients, and animations
- **JavaScript**: Event-driven architecture with real-time monitoring

### Data Storage
- **Session Storage**: Temporary user session data and IP tracking
- **Local Storage**: User registration data persistence
- **Browser Storage**: File metadata and access logs

### Security Measures
- Client-side validation of credentials
- Real-time IP monitoring and verification
- Session-based authentication
- Role-based permission checking
- Comprehensive activity logging

## Testing the Platform

### Test Admin Features
1. Login as admin (admin/admin123)
2. Access all 9 available files
3. Download any file successfully
4. Enable VPN to trigger IP detection

### Test Manager Features
1. Login as manager (manager/manager123)
2. View only 4 accessible files
3. See restricted files but cannot download
4. Monitor IP changes in real-time

### Test Employee Features
1. Login as employee (emp123)
2. View all files in the interface
3. Try to download restricted file → Access Denied popup
4. Download allowed files successfully

### Test IP Monitoring
1. Login with any account
2. Enable VPN or change network
3. Wait for 5-second polling to detect change
4. Observe "Suspicious IP detected" alert
5. Automatic logout after 3 seconds

## Color Scheme

- **Primary**: #0066cc (Deep Blue)
- **Secondary**: #00d4ff (Cyan)
- **Danger**: #ff3366 (Red)
- **Success**: #00cc66 (Green)
- **Warning**: #ff9900 (Orange)
- **Dark BG**: #0a0e27 (Dark Navy)
- **Card BG**: #1a1f3a (Slightly Lighter Navy)

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Backend integration with Node.js/Express
- Database persistence (MongoDB/PostgreSQL)
- OAuth authentication integration
- Two-factor authentication (2FA)
- Biometric authentication support
- Advanced threat detection AI
- Real-time notifications
- File encryption at rest
- Audit trail with timestamp verification

## API Used

- **IP Detection**: https://api.ipify.org (Public IP detection)
- **Storage**: Browser LocalStorage & SessionStorage

## Deployment

### To Deploy Locally
1. Download all files
2. Open `landing.html` in your browser
3. Navigate through the application

### To Deploy Online
1. Upload all files to web hosting (Vercel, Netlify, GitHub Pages)
2. Ensure all files are accessible from the same directory
3. Update API endpoints if needed

## Security Notes

- This is a demonstration platform for educational purposes
- Demo credentials should be changed in production
- Implement proper backend authentication for production use
- Add HTTPS for all connections
- Use secure password hashing (bcrypt, argon2)
- Implement database-level encryption
- Add CORS and CSRF protection

## Support & Documentation

For more information on Zero Trust security principles, visit:
- https://www.nist.gov/publications/zero-trust-architecture
- https://www.microsoft.com/en-us/security/business/zero-trust

## License

MIT License - Free to use and modify for educational purposes

## Author

NexGenTrust Development Team

---

**Version 1.0.0** | Built with HTML, CSS, and JavaScript | Zero Trust Architecture | Enterprise Security Platform
