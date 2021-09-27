const galleryController = {};

galleryController.find = (req, res) => {
	res.render('index');
};

module.exports = galleryController;
