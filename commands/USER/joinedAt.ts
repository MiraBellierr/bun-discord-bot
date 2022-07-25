import {
	SlashCommand,
	ApplicationCommandType,
	SlashCreator,
	CommandContext,
} from "slash-create";

export default class JoinedAtCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			type: ApplicationCommandType.USER,
			name: "Joined At",
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		const target = ctx.targetMember;

		return `${target?.user.username} joined at ${new Intl.DateTimeFormat(
			"en-US",
			{
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
				timeZone: "UTC",
			}
		).format(target?.joinedAt)}`;
	}
}
