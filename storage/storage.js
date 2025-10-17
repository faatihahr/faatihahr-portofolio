const multer = require('multer');
const { put } = require('@vercel/blob');

// Konfigurasi penyimpanan memory
const storage = multer.memoryStorage();

// Filter tipe file
function fileFilter(req, file, cb) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Tipe file tidak didukung'), false);
  }
}

const upload = multer({ storage, fileFilter });

// Fungsi untuk upload ke Vercel Blob
async function uploadToBlob(file) {
  const blob = await put(`uploads/${Date.now()}-${file.originalname}`, file.buffer, {
    access: 'public',
  });
  return blob.url;
}

module.exports = { upload, uploadToBlob };
