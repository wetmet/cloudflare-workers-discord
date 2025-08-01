import { EmbedBuilder } from '@discordjs/builders';
import { SlashCommand, CommandOptionType, SlashCreator, CommandContext } from 'slash-create/web';

export default class BotCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
		name: 'hello',
		description: 'Says hello to you.',
		options: [
			{
				type: CommandOptionType.STRING,
				name: 'food',
				description: 'What food do you like?'
			}
		]
    });
  }

  async run(ctx: CommandContext) {

    let embed = new EmbedBuilder()
    	.setDescription(ctx.options.food ? `You like ${ctx.options.food}? Nice!` : `Hello, ${ctx.user.username}!`)

    return ctx.send({ embeds: [embed.toJSON()] });
  }
}