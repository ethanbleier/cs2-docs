const cheat = {
	category: "Cheat",
	commands: [
		{ name: "sv_cheats 1", description: "Enables cheat commands" },
		{ name: "god", description: "Toggles god mode (invincibility)" },
		{ name: "buddha", description: "Toggles buddha mode (take damage but don't die)" },
		{ name: "noclip", description: "Toggles noclip mode (fly through walls)" },
		{ name: "sv_infinite_ammo 1", description: "Enables infinite ammo" },
		{ name: "sv_showimpacts 1", description: "Shows bullet impacts" },
		{ name: "sv_grenade_trajectory 1", description: "Shows grenade trajectories" },
		{ name: "sv_showbullethits 1", description: "Shows where bullets hit players" },
		{ name: "sv_regeneration_force_on 1", description: "Forces health regeneration" },
		{ name: "host_timescale [value]", description: "Changes the game speed (1 is normal)" },
	]
};

export default cheat;