import { SlashCommand, SlashCreator, CommandContext } from 'slash-create/web';

export default class BotCommand extends SlashCommand {
    constructor(creator: SlashCreator) {
        super(creator, {
            name: 'ping',
            description: 'pong!'
        });
    }

    async run(ctx: CommandContext) {
        return `🏓 Pong!`;
    }
}