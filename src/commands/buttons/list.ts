import { ActionRowBuilder, ModalActionRowComponentBuilder, ModalBuilder, SelectMenuBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, TextInputBuilder } from '@discordjs/builders';
import { TextInputStyle } from 'discord-api-types/v10';
import { SlashCommand, SlashCreator, CommandContext } from 'slash-create/web';

export default class BotCommand extends SlashCommand {
    constructor(creator: SlashCreator) {
        super(creator, {
            name: 'list',
            description: 'Shows a list!'
        });
    }

    async run(ctx: CommandContext) {
        await ctx.defer()

        let actionrow = new ActionRowBuilder();
        actionrow.addComponents(
            new SelectMenuBuilder()
                .setCustomId("selectMenu")
                .setPlaceholder("Select an option")
                .addOptions(
                    new StringSelectMenuOptionBuilder().setLabel("Option 1").setValue("1").setDescription("This is option 1"),
                    new StringSelectMenuOptionBuilder().setLabel("Option 2").setValue("2").setDescription("This is option 2"),
                    new StringSelectMenuOptionBuilder().setLabel("Option 3").setValue("3").setDescription("This is option 3")
                )
        )

        await ctx.send({
            components: [actionrow.toJSON() as any]
        })

        ctx.registerComponent('selectMenu', async (nCtx) => {
            console.log(nCtx.values)
            await nCtx.send(`You've selected option: \`${nCtx.values[0]}\`!`)
        });

    }
}