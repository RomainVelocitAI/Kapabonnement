# Kapabonnement - Setup Guide

This project includes dynamic form configurations for three template types: snack (restaurant), devis (contractor), and vitrine (showcase).

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Cloudinary
1. Sign up for a free account at [cloudinary.com](https://cloudinary.com/)
2. Go to your dashboard and copy:
   - Cloud Name
   - API Key  
   - API Secret
3. Update `.env.local` with your credentials:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Access Configuration Forms
- Restaurant Template: http://localhost:3000/config-snack.html
- Contractor Template: http://localhost:3000/config-devis.html
- Showcase Template: http://localhost:3000/config-vitrine.html

## ✨ Features Implemented

### Dynamic Form Logic
- ✅ Form validation (required fields, SIREN validation for devis)
- ✅ File size limits (Logo 2MB, Favicon 1MB, Photos 5MB, Menu PDF 10MB)
- ✅ Progress bar updates during async operations
- ✅ Dynamic sections toggle based on checkboxes
- ✅ Color pickers with real-time preview updates

### Vercel API Endpoint
- ✅ `/api/upload-image.js` - Handles image uploads to Cloudinary
- ✅ Supports base64 image data conversion
- ✅ Returns secure URLs for uploaded images
- ✅ Graceful error handling and validation
- ✅ Supports multiple file types (images, PDFs)

### File Upload Features
- ✅ Logo upload (max 2MB)
- ✅ Favicon upload (max 1MB) 
- ✅ Photo gallery (up to 10 photos, max 5MB each)
- ✅ PDF menu upload (max 10MB) - only for snack template
- ✅ Real-time preview of uploaded files
- ✅ File removal functionality

### Form-Specific Features

#### Snack Template (Restaurant)
- Company info with social media links
- Menu PDF upload and integration
- Services, testimonials, and FAQ sections
- Photo gallery for food and restaurant images

#### Devis Template (Contractor)
- ✅ SIREN number validation (9 digits)
- Portfolio photo uploads
- Service categories and pricing
- Project showcase sections

#### Vitrine Template (Showcase)
- General business information
- Photo gallery for products/services
- About section with statistics
- Contact and social media integration

### Webhook Integration
- ✅ Data format matches original Netlify function
- ✅ Webhook endpoint: `https://n8n.srv765302.hstgr.cloud/webhook-test/template-config`
- ✅ Complete configuration data sent including:
  - Template type
  - Company information
  - Colors and branding
  - Uploaded file URLs from Cloudinary
  - Section configurations
  - File counts and metadata
  - Timestamp

## 🔄 Data Flow

```
Client Form → File Upload → Vercel API → Cloudinary → Webhook → N8N
```

1. User fills form and uploads files
2. Files converted to base64 and sent to `/api/upload-image`
3. Vercel API uploads to Cloudinary and returns secure URLs
4. Form data with Cloudinary URLs sent to webhook
5. N8N processes the complete configuration

## 🛠️ Development

### Project Structure
```
/api/upload-image.js     # Vercel API endpoint for image uploads
/public/config-*.html    # Form configuration files
/.env.local             # Environment variables (Cloudinary)
/package.json           # Dependencies including Cloudinary
```

### Environment Variables Required
- `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Your Cloudinary API key  
- `CLOUDINARY_API_SECRET` - Your Cloudinary API secret

### Deployment
This project is ready for Vercel deployment:
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🔍 Testing

All three forms are fully functional with:
- ✅ Client-side validation
- ✅ File upload processing
- ✅ Progress tracking
- ✅ Error handling
- ✅ Webhook data transmission

Test each template by filling the forms and uploading files to verify the complete flow works correctly.