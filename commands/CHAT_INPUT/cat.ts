import { SlashCommand, CommandContext, SlashCreator } from "slash-create";

export default class HelloCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "cat",
			description: "Send a cat pic for you to see",
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		ctx.defer();
		const response = await fetch("https://aws.random.cat/meow?ref=apilist.fun");
		const json = await response.json();

		return ctx.editOriginal(json.file);
	}
}
