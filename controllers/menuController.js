const menuService = require('../services/menuService');

const getMenus = async (req, res, next) => {
  try {
    const menus = await menuService.getAll(req.query.kategori);
    res.status(200).json({ data: menus });
  } catch (error) { next(error); }
};

const getMenuById = async (req, res, next) => {
  try {
    const menu = await menuService.getById(req.params.id);
    res.status(200).json({ data: menu });
  } catch (error) { next(error); }
};

const createMenu = async (req, res, next) => {
  try {
    const menu = await menuService.create(req.body);
    res.status(201).json({ data: menu });
  } catch (error) { next(error); }
};

const updateMenu = async (req, res, next) => {
  try {
    const menu = await menuService.update(req.params.id, req.body);
    res.status(200).json({ data: menu });
  } catch (error) { next(error); }
};

const deleteMenu = async (req, res, next) => {
  try {
    await menuService.remove(req.params.id);
    res.status(204).end();
  } catch (error) { next(error); }
};

module.exports = { getMenus, getMenuById, createMenu, updateMenu, deleteMenu };
