# TODO: Configure Server and Routes for Vercel Deployment with Neon Postgres and Vercel Blob

- [x] Update package.json to include @vercel/blob dependency
- [x] Modify db/config.js to use process.env.DATABASE_URL for Neon Postgres connection
- [x] Rewrite storage/storage.js to use multer.memoryStorage() and upload files to Vercel Blob, returning the Blob URL
- [x] Update dataHandler.js to store Blob URLs instead of local paths for images/logos
- [x] Adjust server.js: remove static serve for '/upload', update routes to handle Blob URLs
- [x] Ensure vercel.json is correct for Blob integration
