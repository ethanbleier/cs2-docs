const weapon = {
	category: "Weapon",
	commands: [
		{ name: "give weapon_ak47", description: "Gives AK-47" },
		{ name: "give weapon_m4a1", description: "Gives M4A4" },
		{ name: "give weapon_awp", description: "Gives AWP" },
		{ name: "give weapon_deagle", description: "Gives Desert Eagle" },
		{ name: "give item_assaultsuit", description: "Gives kevlar and helmet" },
		{ name: "mp_drop_knife_enable 1", description: "Enables dropping knives" },
		{ name: "mp_weapons_allow_zeus 1", description: "Allows Zeus purchase" },
		{ name: "sv_infinite_ammo 1", description: "Enables infinite ammo" },
		{ name: "mp_free_armor 1", description: "Gives free armor" },
		{ name: "mp_weapons_allow_map_placed 1", description: "Allows picking up map-placed weapons" },
	]
};

export default weapon;