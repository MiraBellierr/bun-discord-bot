import {
	SlashCommand,
	ApplicationCommandType,
	SlashCreator,
	CommandContext,
} from "slash-create";

export default class AvatarCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			type: ApplicationCommandType.USER,
			name: "Get Avatar URL",
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		const target = ctx.targetUser;

		const embed = {
			author: {
				name: ctx.user.username,
				icon_url: ctx.user.avatarURL,
			},
			title: `${target?.username}'s Avatar`,
			color: 0xcd1c6c,
			image: {
				url: target?.dynamicAvatarURL(undefined, 4096),
			},
			timestamp: new Date(),
			footer: {
				text: `Requested by ${ctx.user.username}`,
			},
		};

		return ctx.send({ embeds: [embed] });
	}
}
