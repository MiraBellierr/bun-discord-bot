import {
	SlashCommand,
	CommandOptionType,
	CommandContext,
	SlashCreator,
} from "slash-create";

export default class HelpCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "help",
			description: "List of commands.",
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run() {
		return "list of commands:\n\n`8ball`, `catsay`, `hack`, `hello`, `modal`, `help`\n\nThere are also some commands on the User UI:\n\n`get avatar url`, `get user info`";
	}
}
