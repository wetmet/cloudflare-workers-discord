import { ActionRowBuilder, ButtonBuilder } from '@discordjs/builders';
import { ButtonStyle } from 'discord-api-types/v10';
import { SlashCommand, SlashCreator, CommandContext } from 'slash-create/web';

export default class BotCommand extends SlashCommand {
    constructor(creator: SlashCreator) {
        super(creator, {
            name: 'buttons',
            description: 'Shows a button!'
        });
    }

    async run(ctx: CommandContext) {
        await ctx.defer();

        let actionRow = new ActionRowBuilder();
        actionRow.addComponents(
            new ButtonBuilder({
                custom_id: 'a_button',
                style: ButtonStyle.Primary,
                label: 'Click Me 1'
            }),
            new ButtonBuilder({
                custom_id: 'b_button',
                style: ButtonStyle.Danger,
                label: 'Click Me 2'
            })
        )

        await ctx.send({
            content: "You now have **buttons!!**",
            components: [actionRow.toJSON() as any]
        });

        ctx.registerComponent('a_button', async (btnCtx) => {
            await btnCtx.send("You clicked the button 1!")
        });
        ctx.registerComponent('b_button', async (btnCtx) => {
            await btnCtx.send('You clicked the button 2!');
        });

    }
}