import {
	SlashCommand,
	CommandOptionType,
	CommandContext,
	SlashCreator,
	ApplicationCommandType,
} from "slash-create";

export default class HelpCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "help",
			description: "List of commands",
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run() {
		const userCommands: string[] = [];
		const chatInputCommands: string[] = [];
		const messageCommands: string[] = [];

		(await this.creator.api.getCommands())
			.filter((command) => command.type === ApplicationCommandType.MESSAGE)
			.forEach((command) => {
				messageCommands.push(
					` > \`${command.name}\` - ${command.description || "No description"}`
				);
			});

		(await this.creator.api.getCommands())
			.filter((command) => command.type === ApplicationCommandType.USER)
			.forEach((command) => {
				userCommands.push(
					` > \`${command.name}\` - ${command.description || "No description"}`
				);
			});

		(await this.creator.api.getCommands())
			.filter((command) => command.type === ApplicationCommandType.CHAT_INPUT)
			.forEach((command) => {
				chatInputCommands.push(
					`> \`${command.name}\` - ${command.description || "No description"}`
				);
			});

		return `list of commands:\n\n${chatInputCommands.join(
			"\n"
		)}\n\nThere are also some commands on the user UI:\n${userCommands.join(
			"\n"
		)}\n\nAnd some commands on the message UI:\n${messageCommands.join(
			"\n"
		)}\n\nInvite bot here\n> <https://discord.com/oauth2/authorize?client_id=995295800722718740&scope=applications.commands>`;
	}
}
