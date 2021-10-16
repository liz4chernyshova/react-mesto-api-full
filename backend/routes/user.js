const router = require('express').Router();
const { celebrate, CelebrateError, Joi } = require('celebrate');
const isURL = require('validator');
const {
  getAllUsers,
  getUser,
  getCurrentUser,
  updateUserInfo,
  updateAvatar,
} = require('../controllers/user');

router.get('/users', getAllUsers);

router.get('/users/me', getCurrentUser);

router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex(),
  }),
}), getUser);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUserInfo);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().custom((value) => {
      if (!isURL(value, { require_protocol: true })) {
        throw new CelebrateError(value.url);
      }
      return value;
    }).required(),
  }),
}),
updateAvatar);

module.exports = router;
