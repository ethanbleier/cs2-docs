const bot = {
	category: "Bot",
	commands: [
		{ name: "bot_add", description: "Adds a bot to the game" },
		{ name: "bot_add_ct", description: "Adds a CT bot" },
		{ name: "bot_add_t", description: "Adds a T bot" },
		{ name: "bot_kick", description: "Kicks all bots" },
		{ name: "bot_stop 1", description: "Stops all bot movement" },
		{ name: "bot_zombie 1", description: "Makes bots stand still" },
		{ name: "bot_difficulty [0-3]", description: "Sets bot difficulty (0 = easy, 3 = expert)" },
		{ name: "bot_quota [number]", description: "Sets the number of bots to maintain" },
		{ name: "bot_dont_shoot 1", description: "Prevents bots from shooting" },
		{ name: "bot_mimic 1", description: "Makes bots mimic player actions" },
	]
};

export default bot;