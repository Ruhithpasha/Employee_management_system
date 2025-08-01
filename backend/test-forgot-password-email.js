const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Employee = require('./models/Employee');
const emailService = require('./services/emailService');
require('dotenv').config();

async function testForgotPasswordEmail() {
    try {
        console.log('🧪 Testing Forgot Password Email Functionality...\n');
        
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Create or find test employee
        const testEmail = 'ruhithpasha813@gmail.com';
        let employee = await Employee.findOne({ email: testEmail });
        
        if (!employee) {
            const hashedPassword = await bcrypt.hash('password123', 12);
            employee = new Employee({
                firstName: 'Ruhith',
                email: testEmail,
                password: hashedPassword
            });
            await employee.save();
            console.log('✅ Created test employee:', testEmail);
        } else {
            console.log('✅ Found existing employee:', testEmail);
        }

        // Generate reset token
        const crypto = require('crypto');
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpires = Date.now() + 3600000; // 1 hour

        // Save token to database
        employee.resetPasswordToken = resetToken;
        employee.resetPasswordExpires = resetTokenExpires;
        await employee.save();
        console.log('✅ Generated and saved reset token');

        // Send password reset email
        console.log('📧 Sending password reset email...');
        const emailResult = await emailService.sendPasswordResetEmail(
            employee.email, 
            resetToken, 
            employee.firstName
        );
        
        if (emailResult.success) {
            console.log('✅ Password reset email sent successfully!');
            if (emailResult.messageId !== 'dev-mode') {
                console.log('📮 Message ID:', emailResult.messageId);
                console.log('📬 Check your inbox for the password reset email');
            } else {
                console.log('🔗 Development mode - Reset URL:', emailResult.resetUrl);
            }
        }

        await mongoose.disconnect();
        console.log('✅ Test completed successfully');

    } catch (error) {
        console.error('❌ Test failed:', error);
        await mongoose.disconnect();
        process.exit(1);
    }
}

testForgotPasswordEmail();
