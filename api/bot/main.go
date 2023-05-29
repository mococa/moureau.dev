package bot

import (
	"log"

	"github.com/bwmarrin/discordgo"
)

type Bot struct {
	Discord *discordgo.Session
}

func New(token string) *Bot {
	discord, err := discordgo.New("Bot " + token)
	discord.Identify.Intents = discordgo.IntentMessageContent

	if err != nil {
		log.Fatal(err)
	}

	discord.Open()

	return &Bot{
		Discord: discord,
	}
}

func (bot *Bot) SendMessage(channel, message string) {
	defer bot.Discord.Close()

	bot.Discord.ChannelMessageSend(channel, message)
}
