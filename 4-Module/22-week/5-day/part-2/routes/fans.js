const express = require('express');
const{ Fan, Player }= require('../db/models');
const router = express.Router();

router.get('/:fanId/drafts', async (req, res) => {
    const fan = await Fan.findByPk(req.params.fanId, {
        include: [
            {model: Player}
        ]
    })
    res.json(fan.Players)
})

router.delete('/:id', async (req, res) => {
    const fan = await Fan.findByPk(req.params.id)
    await fan.destroy()
    res.json({
        message: "Successfully deleted"
    })
})

module.exports = router;