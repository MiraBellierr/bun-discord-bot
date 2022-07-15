import {
	SlashCommand,
	CommandContext,
	SlashCreator,
	ApplicationCommandType,
} from "slash-create";

export default class EvalCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "evaluate",
			type: ApplicationCommandType.MESSAGE,
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		const author = ctx.user;

		if (author.id !== "548050617889980426")
			return "You are not allowed to use this command.";

		try {
			const code = ctx.targetMessage!.content;

			const result = eval(code);

			console.log(result);

			return `*evaluates <@${author.id}>*\n\`\`\`js\n${result}\n\`\`\``;
		} catch (e) {
			return `*evaluates <@${author.id}>*\n\`\`\`js\n${e}\n\`\`\``;
		}
	}
}
