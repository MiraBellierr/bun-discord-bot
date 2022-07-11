import {
	SlashCommand,
	ApplicationCommandType,
	SlashCreator,
	CommandContext,
} from "slash-create";

export default class UserCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			type: ApplicationCommandType.USER,
			name: "Get User Info",
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		const target = ctx.targetMember;

		const flags = target?.user.flags
			.toArray()
			.map((flag) => flag.toLowerCase())
			.map((flag) =>
				flag
					.split("_")
					.map((f) => f.charAt(0).toUpperCase() + f.slice(1))
					.join(" ")
			)
			.join(", ");

		const joinedAt = new Intl.DateTimeFormat("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC",
		}).format(target?.joinedAt);

		const embed = {
			author: {
				name: ctx.user.username,
				icon_url: ctx.user.avatarURL,
			},
			title: `${target?.user.username}'s Information`,
			description: `**• Username:** ${target?.user.username}\n**• Mention:** ${
				target?.user.mention
			}\n**• ID:** ${
				target?.user.id
			}\n**• Flags:** ${flags}\n**• Discriminator:** ${
				target?.user.discriminator
			}\n**• Type:** ${
				target?.user.bot ? "Bot" : "User"
			}\n**• Avatar URL:** [click here](${
				target?.avatarURL
			})\n**• Joined At:** ${joinedAt}`,
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
