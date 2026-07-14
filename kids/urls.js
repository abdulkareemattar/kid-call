import express from 'express';
import { addKid, getKidsOf, confirmKid,callKid,getAllKids } from './kids.js';
import { validateAddingKid, validateGetKidsOf, validateConfirmKid,validateCallKid } from './validators.js';

export const router = express.Router();

router.post('/', validateAddingKid, addKid);
router.get('/admin/all', getAllKids);
router.post('/:id/call', validateCallKid, callKid);

router.patch('/:id/confirm', validateConfirmKid, confirmKid);
router.get('/:id', validateGetKidsOf, getKidsOf);
