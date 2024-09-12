const match = {
	category: "Match",
	commands: [
		{ name: "mp_warmup_end", description: "Ends the warmup period" },
		{ name: "mp_restartgame 1", description: "Restarts the match with a 1-second delay" },
		{ name: "mp_pause_match", description: "Pauses the match" },
		{ name: "mp_unpause_match", description: "Unpauses the match" },
		{ name: "mp_maxrounds [number]", description: "Sets the maximum number of rounds" },
		{ name: "mp_match_can_clinch 1", description: "Allows a team to clinch the match" },
		{ name: "mp_overtime_enable 1", description: "Enables overtime" },
		{ name: "mp_overtime_maxrounds 6", description: "Sets the number of overtime rounds" },
		{ name: "mp_halftime 1", description: "Enables halftime" },
		{ name: "mp_team_timeout_time 60", description: "Sets the duration of team timeouts in seconds" },
	]
};

export default match;