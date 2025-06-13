import multer from 'multer';


const storage = multer.memoryStorage();


const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype) {
    return cb(null, true);
  }
  cb(new Error('Apenas imagens JPEG ou PNG são permitidas'));
};


const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, 
});

export default upload;