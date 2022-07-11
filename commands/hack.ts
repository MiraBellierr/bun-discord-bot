import {
	SlashCommand,
	CommandOptionType,
	CommandContext,
	SlashCreator,
	User,
	ApplicationCommandType,
	Message,
} from "slash-create";

export default class HackCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "hack",
			description: "Hack someone's data",
			options: [
				{
					type: CommandOptionType.USER,
					name: "user",
					description: "The user you want to hack",
					required: true,
				},
			],
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run(ctx: CommandContext) {
		return "https://cdn.discordapp.com/attachments/873441703330185250/995988623595941908/hack.mp4";
	}
}
