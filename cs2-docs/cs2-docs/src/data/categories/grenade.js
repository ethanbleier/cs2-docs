const grenade = {
	category: "Grenade",
	commands: [
		{ name: "give weapon_hegrenade", description: "Gives a HE grenade" },
		{ name: "give weapon_flashbang", description: "Gives a flashbang" },
		{ name: "give weapon_smokegrenade", description: "Gives a smoke grenade" },
		{ name: "give weapon_molotov", description: "Gives a Molotov (T-side)" },
		{ name: "give weapon_incgrenade", description: "Gives an incendiary grenade (CT-side)" },
		{ name: "give weapon_decoy", description: "Gives a decoy grenade" },
		{ name: "sv_grenade_trajectory 1", description: "Shows grenade trajectories" },
		{ name: "sv_grenade_trajectory_time 10", description: "Sets how long grenade trajectories are visible" },
		{ name: "sv_grenade_trajectory_thickness 0.5", description: "Sets the thickness of grenade trajectories" },
		{ name: "sv_showimpacts_penetration 1", description: "Shows grenade impact and penetration data" },
	]
};

export default grenade;