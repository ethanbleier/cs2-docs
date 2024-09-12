const general = {
	category: "General",
	commands: [
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
};

export default general;