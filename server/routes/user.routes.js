import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();


// Post user Login
router.route('/postLogin').post(UserController.postLogin);


export default router;
