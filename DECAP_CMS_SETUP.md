# Decap CMS Setup for ARC Website

## Overview

This website uses Decap CMS (formerly Netlify CMS) for content management. It allows authorized users to create, edit, and manage blog posts through a web interface.

## Current Setup Status

**Error**: "Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway."

This means Netlify Identity and Git Gateway need to be properly configured.

## Setup Instructions

### 1. Enable Netlify Identity

1. Go to your Netlify dashboard: https://app.netlify.com/
2. Select your site (ym1ktc.netlify.app)
3. Navigate to **Site settings** → **Identity**
4. Click **"Enable Identity"**
5. In Identity settings, configure:
   - **Registration**: Set to "Invite only" (recommended for security)
   - **External providers**: Optionally enable GitHub, Google, etc.
   - **Field validation**: No changes needed for basic setup

### 2. Configure Git Gateway

**This is the crucial step that's currently missing:**

1. In your site's Identity settings
2. Go to **"Services"** tab
3. Click **"Enable Git Gateway"**
4. This allows Decap CMS to commit directly to your GitHub repository
5. **Important**: Git Gateway requires the Identity service to be enabled first

### 3. Configure Custom Domain Access

Since you're using https://radio.org.tr/, ensure:

1. The custom domain is properly configured in Netlify
2. Identity service works on both domains:
   - https://ym1ktc.netlify.app/admin/
   - https://radio.org.tr/admin/

### 4. Invite Users

After Identity and Git Gateway are enabled:

1. In Identity tab, click **"Invite users"**
2. Enter email addresses of content editors
3. They will receive invitation emails
4. Users must accept invitations to access the CMS

### 5. Access the CMS

- Primary URL: `https://radio.org.tr/admin/`
- Backup URL: `https://ym1ktc.netlify.app/admin/`
- Users can log in with their invited credentials
- The CMS will redirect to `/decapcms/` for the actual interface

## Features

### Turkish Interface

- All field labels are in Turkish
- Configured for Turkish content creators
- Default author set to "TA1SPH"

### Blog Post Management

- Create new blog posts
- Edit existing posts
- Upload featured images
- Organize with categories and tags
- Markdown editor for content

### File Structure

- Blog posts are stored in `src/data/post/`
- Images are stored in `src/assets/images/`
- Posts use the format: `YYYY-MM-DD-slug.md`

## Configuration Files

### `/public/decapcms/config.yml`

Main configuration file that defines:

- Backend (Git Gateway)
- Collections (Blog posts)
- Fields and their types
- Media handling

### `/public/decapcms/index.html`

The CMS interface HTML file

### `/public/_redirects`

Netlify redirect rules for admin routing

## Usage

1. Users navigate to `/admin/`
2. They are redirected to the CMS interface
3. After authentication, they can:
   - Create new blog posts
   - Edit existing posts
   - Upload images
   - Manage categories and tags

## Security

- Only invited users can access the CMS
- All changes are committed to the main repository
- GitHub Actions will automatically deploy changes
- Content is version-controlled through Git

## Troubleshooting

### Current Issue: CORS Error

❌ **CORS Error**: `Access to script at 'https://identity.netlify.com/v1/netlify-identity-widget.js' from origin 'https://radio.org.tr' has been blocked by CORS policy`

**This means**: Netlify Identity is not properly configured for your custom domain `radio.org.tr`

### Solutions (Try in order):

#### Solution 1: Configure Custom Domain in Netlify Identity
1. Go to https://app.netlify.com/sites/ym1ktc/settings/identity
2. Check **"Site domains"** section
3. Add `radio.org.tr` to allowed domains
4. Save and wait 5-10 minutes for DNS propagation

#### Solution 2: Use Primary Netlify Domain for Admin
- Use https://ym1ktc.netlify.app/admin/ instead of custom domain for CMS access
- This should work immediately as it's the primary domain

#### Solution 3: Alternative Git-based Workflow (Recommended)
- Use GitHub-based editing instead of Netlify CMS
- Content editors can edit markdown files directly in GitHub
- Changes auto-deploy to Netlify

### Quick Test:
Try accessing: https://ym1ktc.netlify.app/admin/
If this works, the issue is custom domain configuration.

### Common Issues:

1. **"Unable to access identity settings"**: Enable Identity service and Git Gateway in Netlify dashboard
2. **Can't log in**: Check if Identity is enabled and user is invited
3. **Can't save posts**: Ensure Git Gateway is enabled and connected to GitHub
4. **Images not uploading**: Check media folder permissions in repository
5. **Custom domain issues**: Ensure Identity works on both netlify.app and custom domain
6. **404 on /admin/**: Check that _redirects file is deployed correctly.

### Quick Verification Steps:

1. Check Identity status: https://app.netlify.com/sites/ym1ktc/settings/identity
2. Check Git Gateway: Should show "Connected" status when properly configured
3. Test admin access: https://radio.org.tr/admin/
4. Check browser console for JavaScript errors

### Support

For technical issues, contact the development team or check the Decap CMS documentation at https://decapcms.org/docs/

**Netlify-specific help:** https://docs.netlify.com/visitor-access/identity/
