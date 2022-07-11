import {
	SlashCommand,
	CommandOptionType,
	CommandContext,
	SlashCreator,
} from "slash-create";

export default class HelloCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "hello",
			description: "Says hello to you.",
			options: [
				{
					type: CommandOptionType.STRING,
					name: "food",
					description: "What food do you like?",
				},
			],
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		return ctx.options.food
			? `You like ${ctx.options.food}? Nice!`
			: `Hello, ${ctx.user.username}!`;
	}
}
