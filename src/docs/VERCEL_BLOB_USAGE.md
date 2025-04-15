# Using Vercel Blob for Optimized Video Delivery

This document explains how to use the Vercel Blob integration we've set up for smooth video streaming in your Apple-style landing page.

## What is Vercel Blob?

Vercel Blob is a storage solution optimized for delivering assets via Vercel's global CDN. It provides:

- High-performance video streaming
- Global distribution through Vercel's CDN
- Automatic optimizations for different devices
- Simplified file management

## Setup Required

1. Create a `.env.local` file in your project root with these variables:

```
BLOB_READ_WRITE_TOKEN=your_token_here
```

2. Get your Blob token from the Vercel dashboard:
   - Go to your project on Vercel
   - Navigate to Storage → Blob
   - Create a new store (or use existing)
   - Generate a read/write token

## Components Created

We've added several components to make video delivery smoother:

1. **BlobVideoPlayer**: An optimized video player component
2. **VideoUploader**: For uploading new videos to Vercel Blob
3. **API Route**: `/api/blob` to handle uploads
4. **Utility Functions**: In `utils/blobVideo.js`

## How to Use in Your Project

### Uploading Videos

1. Import the `VideoUploader` component:
   ```jsx
   import VideoUploader from './components/VideoUploader';
   ```

2. Use it in your admin or content management component:
   ```jsx
   <VideoUploader
     onUploadComplete={(url) => {
       console.log("Video uploaded to:", url);
       // Save this URL to your video source
     }}
   />
   ```

3. After uploading, you'll get a Blob URL like:
   ```
   https://[project].blob.vercel-storage.com/[filename]-[random-suffix].[extension]
   ```

### Playing Videos

Our updated `VideoCarousel` component now automatically uses the `BlobVideoPlayer` for better performance.

For any other video component, you can:

1. Import BlobVideoPlayer:
   ```jsx
   import BlobVideoPlayer from './components/BlobVideoPlayer';
   ```

2. Use it instead of standard video elements:
   ```jsx
   <BlobVideoPlayer
     src={videoUrl}
     muted
     playsInline
     preload="auto"
     onEnded={() => console.log('Video ended')}
   />
   ```

## API Route Usage

The `/api/blob` endpoint handles file uploads. It returns a JSON response with the URL of the uploaded file:

```json
{
  "url": "https://your-project.blob.vercel-storage.com/video-name-random.mp4"
}
```

## Deployment Notes

When deploying to Vercel:

1. Add your `BLOB_READ_WRITE_TOKEN` to your Vercel project environment variables
2. Make sure to enable the Vercel Blob feature in your project settings

## Optimizing Existing Videos

To optimize your existing videos with Vercel Blob:

1. Upload them using the `VideoUploader` component
2. Replace the URLs in your `constants/index.js` file with the new Blob URLs
3. The `getOptimizedVideoUrl` utility will automatically enhance delivery

## Benefits for Your Site

- Faster video loading times
- Smoother playback with less buffering
- Reduced bandwidth usage
- Better mobile experience
