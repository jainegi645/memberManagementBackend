const express= require('express');
const router = express.Router();


const {welcome,createMember,deleteMember,getAllMembers,example} = require('../controllers/memberController');

router.route('/').get(welcome);
router.route('/createMember').post(createMember);
router.route('/deleteMember').post(deleteMember);
router.route('/allMembers').get(getAllMembers);
router.route('/example').post(example);

module.exports = router;