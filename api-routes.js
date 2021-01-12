let router = require('express').Router();
router.get('/', function(req, res){
    res.json({
        status: 'API Its working',
        message: 'Welcome love!'
    });
});

let rootController = require('./rootcontroller')

router.route('/roots')
    .get(rootController.index)
    .post(rootController.new);

router.route('/roots/:root_id')
    .get(rootController.view)
    .patch(rootController.update)
    .put(rootController.update)
    .delete(rootController.delete);

module.exports = router;