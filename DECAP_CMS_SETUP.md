# Decap CMS Setup for ARC Website

## Overview

This website uses Decap CMS (formerly Netlify CMS) for content management. It allows authorized users to create, edit, and manage blog posts through a web interface.

## Setup Instructions

### 1. Enable Netlify Identity

1. Go to your Netlify dashboard
2. Navigate to your site settings
3. Go to "Identity" tab
4. Click "Enable Identity"
5. In Identity settings, configure:
   - Registration: "Invite only" (recommended)
   - External providers: Enable GitHub, Google, etc. as needed
   - Git Gateway: Enable this service

### 2. Configure Git Gateway

1. In your site's Identity settings
2. Go to "Services" tab
3. Enable "Git Gateway"
4. This allows Decap CMS to commit directly to your GitHub repository

### 3. Invite Users

1. In Identity tab, click "Invite users"
2. Enter email addresses of content editors
3. They will receive invitation emails

### 4. Access the CMS

- CMS URL: `https://your-site.netlify.app/admin/`
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

### Common Issues:

1. **Can't log in**: Check if Identity is enabled and user is invited
2. **Can't save posts**: Ensure Git Gateway is enabled
3. **Images not uploading**: Check media folder permissions
4. **Changes not deploying**: Verify GitHub Actions workflow

### Support

For technical issues, contact the development team or check the Decap CMS documentation at https://decapcms.org/docs/
