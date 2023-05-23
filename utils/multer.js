exports.fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb("تنها پسوند JPEG پشتیبانی میشود", false);
    }
};
