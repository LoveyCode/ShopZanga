exports.uploadImage = (req, res) => {
  res.json({
    success: 1,
    image_url: req.file.path, // This is the Cloudinary URL!
  });
};