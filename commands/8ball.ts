import { SlashCommand, CommandOptionType, SlashCreator } from "slash-create";

var fortunes: string[] = [
	"Yes.",
	"It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes definelty.",
	"You may rely on it.",
	"As I see it, yes.",
	"Most likely.",
	"Outlook good.",
	"Signs point to yes.",
	"Reply hazy, try again.",
	"Ask again later.",
	"Better not tell you now...",
	"Cannot predict now.",
	"Concentrate and ask again.",
	"Don't count on it.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good...",
	"Very doubtful.",
];

export default class EightballCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "8ball",
			description: "Tells you a fortune",
			options: [
				{
					type: CommandOptionType.STRING,
					name: "question",
					description: "The question you want to ask the magic 8ball",
					required: true,
				},
			],
		});

		// @ts-ignore
		this.filePath = __filename;
	}

	async run() {
		return fortunes[Math.floor(Math.random() * fortunes.length)];
	}
}
