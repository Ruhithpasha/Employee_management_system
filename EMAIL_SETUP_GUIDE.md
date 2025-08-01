# Email Configuration Guide for KGN IT Solutions EMS

## Option 1: Gmail Configuration (Recommended for Testing)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification"
3. Follow the setup process to enable 2FA

### Step 2: Generate App Password
1. Go to Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Name it "EMS Password Reset"
5. Copy the generated 16-character password

### Step 3: Update .env File
Add these lines to your `/backend/.env` file:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## Option 2: Development Mode (Current Setup)
The system currently logs reset tokens to the console. Check the backend terminal output for:
```
🔗 Password Reset Token (DEV MODE):
Email: user@example.com
Reset URL: http://localhost:5174/reset-password?token=abc123...
Token: abc123...
Expires in 1 hour
```

## Option 3: Other Email Providers

### Outlook/Hotmail:
```javascript
// In emailService.js, replace the transporter config:
this.transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### Custom SMTP:
```javascript
// In emailService.js, replace the transporter config:
this.transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## Testing the Setup

1. After configuring email, restart the backend server
2. Try the forgot password functionality
3. Check your email inbox (and spam folder)
4. If emails still don't arrive, check the backend console for error messages

## Security Notes

- Never commit your email credentials to version control
- Use environment variables for all sensitive data
- Consider using email services like SendGrid or AWS SES for production
- App passwords are more secure than regular passwords for automated systems
