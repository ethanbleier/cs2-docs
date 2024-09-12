const commands = [
	{
		category: "General",
		commands: [
			{ name: "sv_cheats 1", description: "Allows you to enable cheat commands" },
			{ name: "clear", description: "Clears the console" },
			{ name: "disconnect", description: "Disconnects from the server" },
			{ name: "quit", description: "Quit the game" },
			{ name: "status", description: "Shows data about the server" },
			{ name: "connect [server ip address]", description: "Connect to the server if you have an ip" },
			{ name: "bind [key] [command]", description: "Binds an action to a key. Example: bind v noclip" },
			{ name: "unbind [key]", description: "Removes the bind from a specific key" },
			{ name: "alias", description: "Creates alternative versions of normal commands" },
			{ name: "exec [config name]", description: "Loads the config" },
			{ name: "callvote", description: "Start voting" },
		]
	},
	{
		category: "Gameplay",
		commands: [
			{ name: "sv_infinite_ammo 1", description: "Infinite cartridges" },
			{ name: "noclip", description: "The ability to fly" },
			{ name: "mp_warmup_end", description: "Finishes the warm-up" },
			{ name: "mp_warmup_start", description: "Starts the warm-up" },
			{ name: "mp_warmup_pausetimer 1", description: "Makes the warm-up timer infinite" },
			{ name: "mp_warmuptime [seconds]", description: "Changes the warm-up time" },
			{ name: "mp_freezetime [seconds]", description: "Reduces the duration of the freeze time to the set value" },
			{ name: "mp_restartgame 1", description: "Restarts the server" },
			{ name: "mp_buy_anywhere 1", description: "Allows you to buy everywhere" },
			{ name: "mp_maxmoney [amount]", description: "Sets the maximum possible amount of money" },
			{ name: "mp_startmoney [amount]", description: "Sets the amount of money at the beginning of the game" },
			{ name: "impulse 101", description: "Adds the maximum amount of money to the balance" },
			{ name: "mp_roundtime [minutes]", description: "Specifies the length of the round (in minutes)" },
			{ name: "mp_roundtime_defuse 0", description: "Write this command so that the previous one works correctly" },
			{ name: "mp_maxrounds [number]", description: "Specifies the limit of rounds (the maximum possible number)" },
			{ name: "mp_timelimit [minutes]", description: "Indicates the maximum match time (in minutes)" },
			{ name: "mp_c4timer [seconds]", description: "Bomb trigger timer-C4" },
			{ name: "sv_visiblemaxplayers [number]", description: "Sets the maximum possible number of players on the map" },
			{ name: "kill", description: "Kill yourself" },
		]
	},
	{
		category: "Visuals",
		commands: [
			{ name: "sv_grenade_trajectory_prac_pipreview 1", description: "Shows the trajectory of the grenade after the throw and includes a separate camera with the landing site" },
			{ name: "sv_showimpacts 1", description: "Shows bullet marks" },
			{ name: "sv_showbullethits 1", description: "Shows on the opponent's model the points where the bullets from the shots hit" },
			{ name: "cl_showpos 1", description: "Shows coordinates" },
			{ name: "cl_draw_only_deathnotices 1", description: "Disabling the HUD, only the sight remains" },
			{ name: "cl_drawhud 0", description: "Completely disabling the HUD" },
			{ name: "thirdperson", description: "Third-person view" },
			{ name: "firstperson", description: "First person view" },
			{ name: "cl_showfps 1/2/3/4", description: "FPS display" },
			{ name: "cl_hud_color [0-11]", description: "The color of the HUD" },
			{ name: "cl_ent_hitbox", description: "Enables hitboxes" },
		]
	},
	{
		category: "Crosshair",
		commands: [
			{ name: "cl_crosshairstyle [0-5]", description: "Sets the crosshair style" },
			{ name: "cl_crosshairsize [0-10]", description: "The size of the crosshair" },
			{ name: "cl_crosshairgap [-5 to 5]", description: "Gap" },
			{ name: "cl_crosshairdot 0/1", description: "Turn off or turn on the point" },
			{ name: "cl_crosshair_t 0/1", description: "Turn off or turn on the T-shaped crosshair" },
			{ name: "cl_crosshairalpha [0-255]", description: "Transparency" },
			{ name: "cl_crosshairthickness [0-6]", description: "Thickness" },
			{ name: "cl_crosshair_drawoutline 0/1", description: "Turn off or turn on the stroke" },
			{ name: "cl_crosshaircolor [0-5]", description: "Crosshair color" },
			{ name: "cl_crosshaircolor_r/g/b [0-255]", description: "Custom crosshair color (Red/Green/Blue)" },
			{ name: "cl_crosshair_sniper_width [value]", description: "The thickness of the crosshair in the sniper scope" },
			{ name: "cl_crosshairgap_useweaponvalue 1", description: "The gap in the dynamic scope varies depending on the weapon used" },
		]
	},
	{
		category: "Radar",
		commands: [
			{ name: "cl_radar_always_centered 0/1", description: "Does not center or center the radar on the player" },
			{ name: "cl_radar_scale [0.25-1]", description: "Radar approximation" },
			{ name: "cl_radar_icon_scale_min [0.4-1.25]", description: "The size of the player icons on the radar" },
			{ name: "cl_radar_rotate 0/1", description: "Disables or enables radar rotation" },
			{ name: "cl_radar_square_with_scoreboard 0/1", description: "Turns off or turns on the square radar when you click on the Tab" },
		]
	},
	{
		category: "Bots",
		commands: [
			{ name: "bot_add_ct", description: "Add a bot for CT" },
			{ name: "bot_add_t", description: "Add a bot for T" },
			{ name: "bot_add", description: "Add a bot to one of the teams" },
			{ name: "bot_kick", description: "Kick bots" },
			{ name: "bot_dont_shoot 1", description: "Bots don't shoot" },
			{ name: "mp_autoteambalance 0", description: "Disabling auto-balance" },
			{ name: "bot_difficulty [0-3]", description: "Bot level" },
			{ name: "bot_mimic 1", description: "The bot repeats all the movements of the player" },
			{ name: "bot_zombie 1", description: "Bots don't move" },
			{ name: "bot_crouch 1", description: "Bots are sitting" },
			{ name: "bot_place", description: "Puts the bot in the place where the sight is pointed" },
		]
	},
	{
		category: "Sound",
		commands: [
			{ name: "volume [0-1]", description: "Total volume" },
			{ name: "voice_enable 0/1", description: "Disables or enables voice chat" },
			{ name: "voice_always_sample_mic 0/1", description: "Turns off or on the optimized microphone setup" },
		]
	},
	{
		category: "Viewmodel",
		commands: [
			{ name: "viewmodel_presetpos [1-3]", description: "Changes the type of weapon in hand" },
			{ name: "viewmodel_fov [54-68]", description: "Changes the viewing angle" },
		]
	},
	{
		category: "Weapons and Equipment",
		commands: [
			{ name: "give weapon_[weapon_name]", description: "Gives the specified weapon (works only with sv_cheats 1)" },
			{ name: "give item_defuser", description: "Gives defuse kit" },
			{ name: "give item_vesthelm", description: "Gives armor and helmet" },
			{ name: "give item_vest", description: "Gives armor" },
		]
	},
	{
		category: "Bunny Hop",
		commands: [
			{ name: "sv_enablebunnyhopping 1", description: "Enables bunny hopping" },
			{ name: "sv_autobunnyhopping 1", description: "Enables auto bunny hopping" },
			{ name: "sv_staminajumpcost 0", description: "Removes stamina cost for jumping" },
			{ name: "sv_staminalandcost 0", description: "Removes stamina cost for landing" },
			{ name: "sv_airaccelerate 100", description: "Increases air acceleration" },
			{ name: "sv_maxspeed 10000", description: "Increases maximum speed" },
		]
	},
	{
		category: "Cheats",
		commands: [
			{ name: "buddha 1", description: "The player loses damage up to 1 HP, but does not die" },
			{ name: "god 1", description: "Immortality" },
		]
	},
	{
		category: "Demo",
		commands: [
			{ name: "record [title]", description: "Records a demo" },
			{ name: "demoui", description: "Turns off and turns on the demo playback" },
		]
	},
	{
		category: "Network",
		commands: [
			{ name: "rate 1000000", description: "Sets the speed limit of the Internet connection between the server and the player" },
		]
	},
];

export default commands;