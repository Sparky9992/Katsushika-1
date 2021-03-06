/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "issa",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}issa`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const becky =
			"https://www.linkpicture.com/q/TextPro.me_162966ac260cc5.jpg";
		return void this.client.sendMessage(
			M.from,
			{ url: becky },
			MessageType.image,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.jpeg,
				caption: `Sup Homiess!đI'm Ishaan, a learner/student & an upcoming developer in the future.
            
đ«đđđđ©đšđŒđ„đ„;
Wa.me/918839439805

â­đđđ©đđȘđ;
https://github.com/Sparky9992

đźđđŁđšđ©đđđ§đđą;
https://instagram.com/oyepiyush09

đđżđđšđđ€đ§đ;
ïœđąđđđđđ đČđđđïœ 

âȘŒđČđŸđŸ đđșđ đ`,
			}
		);
	};
}
