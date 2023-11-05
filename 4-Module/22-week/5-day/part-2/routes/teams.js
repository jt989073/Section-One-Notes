const express = require("express");
const { Team, Player, Sport } = require("../db/models");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const team = await Team.findByPk(req.params.id, {
    include: [{ model: Sport }, { model: Player }],
  });
  res.json(team);
});

router.post("/:id/players", async (req, res) => {
  const { firstName, lastName, number, isRetired } = req.body;

  const team = await Team.findByPk(req.params.id);
  if (!team) {
    return res.status(404).json({
      message: "team doesn't exist",
    });
  }
  const newPlayer = await Player.create({
    firstName,
    lastName,
    number,
    isRetired,
    currentTeamId: team.id,
  });
  return res.json(newPlayer);
});

module.exports = router;
