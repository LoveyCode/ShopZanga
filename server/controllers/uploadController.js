exports.uploadImage = (req, res) => {
  res.json({
    success: 1,
    image_url: `https://zanga-dtb7.onrender.com/images/${req.file.filename}`,
  });
};
