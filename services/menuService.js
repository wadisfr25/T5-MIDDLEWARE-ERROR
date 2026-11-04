const menus = require('../data/menuData');
const AppError = require('../errors/AppError');

const getAll = async (kategori) => {
  if (!kategori) return menus;
  return menus.filter((menu) => menu.kategori === kategori);
};

const getById = async (id) => {
  const menu = menus.find((item) => item.id === Number(id));
  if (!menu) throw new AppError('Menu tidak ditemukan', 404, 'NOT_FOUND');
  return menu;
};

const ensureUniqueName = (nama, excludedId) => {
  const duplicate = menus.some((item) =>
    item.id !== excludedId && item.nama.toLowerCase() === nama.toLowerCase()
  );
  if (duplicate) throw new AppError('Nama menu sudah digunakan', 409, 'NAMA_DUPLIKAT');
};

const create = async (payload) => {
  ensureUniqueName(payload.nama);
  const id = menus.length ? Math.max(...menus.map((item) => item.id)) + 1 : 1;
  const menu = { id, ...payload };
  menus.push(menu);
  return menu;
};

const update = async (id, payload) => {
  const menu = await getById(id);
  ensureUniqueName(payload.nama, menu.id);
  Object.assign(menu, payload);
  return menu;
};

const remove = async (id) => {
  const menu = await getById(id);
  menus.splice(menus.indexOf(menu), 1);
};

module.exports = { getAll, getById, create, update, remove };
