import { ActionRowBuilder, ModalActionRowComponentBuilder, ModalBuilder, TextInputBuilder } from '@discordjs/builders';
import { TextInputStyle } from 'discord-api-types/v10';
import { SlashCommand, SlashCreator, CommandContext } from 'slash-create/web';

export default class BotCommand extends SlashCommand {
    constructor(creator: SlashCreator) {
        super(creator, {
            name: 'modal',
            description: 'Shows a modal!'
        });

        creator.registerGlobalModal('yourModal', (interact) => {
            interact.sendFollowUp(`Hello ${interact.values.yourName}, your favourite food is ${interact.values.yourFood}!`);
        })
    }

    async run(ctx: CommandContext) {

        let modal = new ModalBuilder()
            .setCustomId('yourModal')
            .setTitle('Your Modal')
            
        let row1 = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder().setCustomId("yourName").setLabel("Your Name").setRequired(true).setStyle(TextInputStyle.Short),
        )
        let row2 = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder().setCustomId("yourFood").setLabel("Your Favourite Food").setRequired(true).setStyle(TextInputStyle.Short)
        )
        modal.addComponents(row1, row2)

        await ctx.sendModal(modal.toJSON() as any)
    }
}