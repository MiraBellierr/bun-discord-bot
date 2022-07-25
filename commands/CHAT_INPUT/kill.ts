import {
	SlashCommand,
	CommandOptionType,
	CommandContext,
	SlashCreator,
	User,
} from "slash-create";
import { FetchRequestHandler } from "../../bun_shim/rest";
import { kill } from "../../utils/kill";

export default class HackCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "kill",
			description: "kill someone or is it?",
			options: [
				{
					type: CommandOptionType.USER,
					name: "user",
					description: "The user you want to kill",
					required: true,
				},
			],
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		const author = ctx.user;
		const userId = ctx.options.user;

		if (author.id === userId) return `*kills <@${author.id}>*`;

		const target: User = await new FetchRequestHandler(this.creator).request(
			"GET",
			`/users/${userId}`,
			true
		);

		return kill(`<@${author.id}>`, `<@${target.id}>`);
	}
}
