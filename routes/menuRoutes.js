const express = require('express');
const menuController = require('../controllers/menuController');
const cekApiKey = require('../middlewares/cekApiKey');
const { validateMenu } = require('../validators/menuValidator');

const router = express.Router();

router.get('/', menuController.getMenus);
router.get('/:id', menuController.getMenuById);
router.post('/', cekApiKey, validateMenu, menuController.createMenu);
router.put('/:id', cekApiKey, validateMenu, menuController.updateMenu);
router.delete('/:id', cekApiKey, menuController.deleteMenu);

module.exports = router;
