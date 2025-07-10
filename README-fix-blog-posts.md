# Blog Post Fixing Script

This Node.js script automatically fixes common issues in blog posts when migrating from WordPress to Astro, specifically:

1. **HTML entities to Unicode conversion** - Converts HTML entities like `&#x1f3af;` to proper Unicode characters like 🎯
2. **WordPress caption shortcodes to Markdown** - Converts WordPress `[caption]` shortcodes to clean Markdown image syntax
3. **Image URL conversion** - Converts WordPress image URLs to proper Astro asset import paths

## Features

- **Automatic backup creation** before making any changes
- **Comprehensive HTML entity support** - Handles both named (`&amp;`) and numeric (`&#x1f3af;`, `&#123;`) entities
- **WordPress caption conversion** - Converts `[caption]` shortcodes to Markdown images with optional captions
- **Smart image path conversion** - Converts WordPress upload URLs to Astro asset paths (`~/assets/images/...`)
- **Image reference fixing** - Automatically matches broken image references with existing files
- **Detailed logging** - Complete logs of all changes made
- **Error handling** - Robust error handling with detailed error messages
- **Safe operation** - Only modifies files that actually need changes

## Usage

```bash
# Run the script
node fix-blog-posts.cjs
```

## What it fixes

### 1. HTML Entities
**Before:**
```markdown
title: '&#x1f3af; Dual Band Flower Pot Anteni'
```

**After:**
```markdown
title: '🎯 Dual Band Flower Pot Anteni'
```

### 2. WordPress Caption Shortcodes
**Before:**
```markdown
[caption id="attachment_223" align="aligncenter" width="300"]<img class="wp-image-223 size-medium" src="https://radio.org.tr/wp-content/uploads/2025/04/DMR-HS-300x300.png" alt="D.MR. Hot Spot" width="300" height="300" /> Örnek D.M.R. HotSpot[/caption]
```

**After:**
```markdown
![D.MR. Hot Spot](~/assets/images/2025/04/DMR-HS-300x300.png)
*Örnek D.M.R. HotSpot*
```

### 3. Image Path Conversion
**Before:**
```markdown
![Image](/assets/images/2025/04/image.png)
```

**After:**
```markdown
![Image](~/assets/images/2025/04/image.png)
```

## Configuration

You can modify the configuration at the top of the script:

```javascript
const config = {
    postsDirectory: './src/data/post',        // Where your blog posts are located
    assetsDirectory: './src/assets/images',   // Where your images are stored
    backupDirectory: './blog-posts-backup',   // Where backups are created
    logFile: './fix-blog-posts.log'           // Log file location
};
```

## Output

The script provides detailed console output and creates comprehensive logs:

```
✅ Blog post processing completed successfully!
📄 Check ./fix-blog-posts.log for detailed logs
💾 Backup created in ./blog-posts-backup

Processing Summary:
- Total files processed: 38
- Files with changes: 13
- Files with errors: 0
- Files unchanged: 25
```

## Safety Features

- **Automatic backup** - Creates a complete backup of all posts before making changes
- **Dry run capability** - Logs what would be changed without actually modifying files
- **Atomic operations** - Either all changes to a file succeed, or none are applied
- **Image validation** - Only converts image references if the target file actually exists
- **Detailed logging** - Every change is logged with before/after details

## Supported HTML Entities

The script includes comprehensive support for:
- Common HTML entities (`&amp;`, `&lt;`, `&gt;`, etc.)
- Unicode emoji entities (`&#x1f3af;` → 🎯)
- Extended character entities (`&mdash;`, `&hellip;`, etc.)
- Numeric entities (both decimal and hexadecimal)

## Error Handling

The script handles various error conditions gracefully:
- Missing files or directories
- Permission issues
- Malformed content
- Missing images
- Invalid HTML entities

All errors are logged with detailed information for troubleshooting.

## Requirements

- Node.js (any recent version)
- File system permissions to read/write in the project directory

## Changelog

### v1.0.0
- Initial release with HTML entity conversion, WordPress caption conversion, and image path fixing
- Comprehensive logging and backup system
- Support for 500+ HTML entities and Unicode characters
- Smart image file matching and validation