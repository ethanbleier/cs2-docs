const hudUI = {
	category: "HUD/UI",
	commands: [
		{ name: "cl_draw_only_deathnotices 1", description: "Disabling the HUD, only the sight remains" },
		{ name: "cl_drawhud 0", description: "Completely disabling the HUD" },
		{ name: "cl_hud_color [0-11]", description: "The color of the HUD" },
		{ name: "cl_hud_background_alpha [0-1]", description: "Sets the HUD background transparency" },
		{ name: "cl_hud_healthammo_style [0-1]", description: "Changes the style of health and ammo display" },
		{ name: "cl_hud_playercount_pos [0-1]", description: "Changes the position of the player count" },
		{ name: "cl_hud_playercount_showcount [0-1]", description: "Shows or hides the player count" },
		{ name: "cl_hud_radar_scale [0.8-1.3]", description: "Adjusts the size of the radar" },
		{ name: "cl_showfps [0-5]", description: "Shows FPS counter (0 = off, 1-5 = different styles)" },
		{ name: "net_graph [0-3]", description: "Displays network performance information" },
	]
};

export default hudUI;