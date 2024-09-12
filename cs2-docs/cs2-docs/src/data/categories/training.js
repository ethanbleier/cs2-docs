const training = {
	category: "Training",
	commands: [
		{ name: "sv_cheats 1", description: "Enables cheat commands (required for many training commands)" },
		{ name: "sv_infinite_ammo 1", description: "Gives infinite ammo" },
		{ name: "sv_showimpacts 1", description: "Shows bullet impacts" },
		{ name: "sv_grenade_trajectory 1", description: "Shows grenade trajectories" },
		{ name: "sv_regeneration_force_on 1", description: "Forces health regeneration" },
		{ name: "sv_autobunnyhopping 1", description: "Enables auto bunnyhopping" },
		{ name: "bot_stop 1", description: "Stops all bot movement (for static targets)" },
		{ name: "mp_limitteams 0", description: "Removes team limits" },
		{ name: "mp_autoteambalance 0", description: "Disables auto team balance" },
		{ name: "mp_roundtime 60", description: "Sets round time to 60 minutes for practice" },
	]
};

export default training;