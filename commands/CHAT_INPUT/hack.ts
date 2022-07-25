import {
	SlashCommand,
	CommandOptionType,
	CommandContext,
	SlashCreator,
	User,
} from "slash-create";
import { FetchRequestHandler } from "../../bun_shim/rest";

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
		await ctx.defer();

		const userid = ctx.options.user;
		let index = 0;
		let time = 1000;

		const user: User = await new FetchRequestHandler(this.creator).request(
			"GET",
			`/users/${userid}`,
			true
		);

		await ctx.send(`Hacking ${user.username}'s data....`);

		while (index < 10) {
			await this.hack(ctx, user, index, time);

			index++;
			time += 1000;
		}
	}

	async hack(ctx: CommandContext, user: User, index: number, time: number) {
		return new Promise((resolve) => {
			const responses = [
				`<a:loading:986630153104936980> Finding ${user.username}'s Email and Password.....`,
				`<a:loading:986630153104936980> Found credentials\nE-mail: ${user.username}@gmail.com\nPassword: \\*\\*\\*\\*\\*\\*\\*\\*`,
				"<a:loading:986630153104936980> Finding other accounts.....",
				"<a:loading:986630153104936980> Setting up Epic Games account.....",
				"<a:loading:986630153104936980> Generate free 3 months of Discord Nitro link",
				"<a:loading:986630153104936980> Storing token in database.....",
				"<a:loading:986630153104936980> Making request to Discord.com.....",
				"<a:loading:986630153104936980> Collecting info.....",
				"<a:loading:986630153104936980> Sending data to Mira.....",
				`Finished hacking ${user.username}'s data!`,
			];

			setTimeout(async () => {
				await ctx.editOriginal(responses[index]);
				resolve(true);
			}, time);
		});
	}
}
