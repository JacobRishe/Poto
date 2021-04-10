const router = require('express').Router();
const ctrl = require('../controllers');


router.get('/', ctrl.polls.index);
router.get('/:id', ctrl.polls.show);
router.post('/', ctrl.polls.create);
router.put('/:id', ctrl.polls.update);
router.delete('/:id', ctrl.polls.destroy);
router.post('/:id/vote', ctrl.polls.vote);





module.exports = router;