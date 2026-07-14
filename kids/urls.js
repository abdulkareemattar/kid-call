import express from 'express';
import { addKid, getKidsOf } from './kids.js';
import { validateAddingKid, validateGetKidsOf } from './validators.js';

export const router = express.Router();

router.post('/', validateAddingKid, addKid);
router.get('/admin/all', getAllKids);
router.get('/:id', validateGetKidsOf, getKidsOf);
router.post('/:id/call', validateCallKid, callKid);

router.patch('/:id/confirm', validateConfirmKid, confirmKid);