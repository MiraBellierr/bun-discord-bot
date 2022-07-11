import {
	SlashCommand,
	CommandOptionType,
	CommandContext,
	SlashCreator,
} from "slash-create";

export default class CatsayCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "catsay",
			description: "Make The Cat say thing of your choice",
			options: [
				{
					type: CommandOptionType.STRING,
					name: "text",
					description: "The text you want the cat to say",
					required: true,
				},
			],
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		var text: string = ctx.options.text;
		text = encodeURIComponent(text);

		return `https://cataas.com/cat/cute/says/${text}`;
	}
}
