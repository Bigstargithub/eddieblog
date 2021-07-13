const { Router } = require('express');
const router = Router();
const indexRouter = require('./public');

router.use('/', indexRouter);