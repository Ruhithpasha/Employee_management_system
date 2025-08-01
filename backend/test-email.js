const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmailConfiguration() {
    console.log('🧪 Testing Email Configuration...\n');
    
    // Check if credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your-app-password-here') {
        console.log('❌ Email credentials not configured properly');
        console.log('Please update the .env file with your Gmail app password');
        console.log('\nInstructions:');
        console.log('1. Go to https://myaccount.google.com/apppasswords');
        console.log('2. Generate an app password for "Mail"');
        console.log('3. Replace "your-app-password-here" in .env with the 16-character password');
        return;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Test email content
    const testEmail = {
        from: process.env.EMAIL_USER,
        to: 'ruhithpasha813@gmail.com',
        subject: '🧪 KGN IT Solutions - Email Test',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1>✅ Email Configuration Test</h1>
                    <p>KGN IT Solutions - Employee Management System</p>
                </div>
                <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                    <h2>Hello!</h2>
                    <p>This is a test email to verify that your email configuration is working correctly.</p>
                    
                    <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 5px;">
                        <strong>✅ Success!</strong>
                        <p>If you're reading this email, your Gmail configuration is working perfectly!</p>
                    </div>
                    
                    <p>Your forgot password functionality should now work correctly.</p>
                    
                    <p>Best regards,<br>
                    <strong>KGN IT Solutions Team</strong></p>
                </div>
                <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
                    <p>© 2025 KGN IT Solutions. Test email sent at ${new Date().toLocaleString()}</p>
                </div>
            </div>
        `
    };

    try {
        console.log('📧 Sending test email to:', testEmail.to);
        const info = await transporter.sendMail(testEmail);
        console.log('✅ Test email sent successfully!');
        console.log('📮 Message ID:', info.messageId);
        console.log('📬 Check your inbox (and spam folder) for the test email');
        
    } catch (error) {
        console.log('❌ Failed to send test email:');
        console.log('Error:', error.message);
        
        if (error.message.includes('Invalid login')) {
            console.log('\n💡 Common solutions:');
            console.log('1. Make sure 2FA is enabled on your Gmail account');
            console.log('2. Use an App Password (not your regular Gmail password)');
            console.log('3. Generate a new App Password from: https://myaccount.google.com/apppasswords');
        }
    }
}

testEmailConfiguration();
