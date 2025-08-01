import { EmbedBuilder } from '@discordjs/builders';
import { SlashCommand, SlashCreator, CommandContext, ApplicationIntegrationType, InteractionContextType } from 'slash-create/web';

export default class BotCommand extends SlashCommand {
    constructor(creator: SlashCreator) {
        super(creator, {
            name: 'cats',
            description: 'free cats!!',
            integrationTypes: [
                ApplicationIntegrationType.GUILD_INSTALL, 
                ApplicationIntegrationType.USER_INSTALL],
            contexts: [
                InteractionContextType.BOT_DM,
                InteractionContextType.GUILD,
                InteractionContextType.PRIVATE_CHANNEL
            ]
        });
    }

    async run(ctx: CommandContext) {

        const res = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await res.json();

        let embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Cats!!")
            .setImage(data[0].url);

        return ctx.send({ embeds: [embed.toJSON()] })
    }
}