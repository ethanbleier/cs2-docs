const admin = {
	category: "Admin",
	commands: [
		{ name: "sv_cheats 1", description: "Enables cheat commands" },
		{ name: "rcon_password [password]", description: "Sets the RCON password" },
		{ name: "sv_password [password]", description: "Sets a password for the server" },
		{ name: "kickid [UserID]", description: "Kicks a player by their UserID" },
		{ name: "banid [minutes] [UserID]", description: "Bans a player by their UserID" },
		{ name: "changelevel [map]", description: "Changes the current map" },
		{ name: "mp_forcecamera 1", description: "Forces team-only spectating" },
		{ name: "sv_alltalk 0", description: "Disables all-talk (voice chat between teams)" },
		{ name: "sv_full_alltalk 0", description: "Disables full all-talk (including dead players)" },
		{ name: "sv_deadtalk 0", description: "Disables voice chat for dead players" },
	]
};

export default admin;