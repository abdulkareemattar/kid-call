import express from 'express';
import { addKid, getKidsOf, confirmKid,callKid } from './kids.js';
import { validateAddingKid, validateGetKidsOf, validateConfirmKid,validateCallKid } from './validators.js';

export const router = express.Router();

router.post('/', validateAddingKid, addKid);

router.get('/:id', validateGetKidsOf, getKidsOf);
router.post('/:id/call', validateCallKid, callKid);

router.patch('/:id/confirm', validateConfirmKid, confirmKid);