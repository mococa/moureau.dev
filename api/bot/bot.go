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

// func (bot *Bot) GetThreads() ([]types.Thread, error) {
// 	defer bot.Discord.Close()

// 	guild_id := os.Getenv("GUILD_ID")

// 	blog_threads, error := bot.Discord.GuildThreadsActive(guild_id)
// 	if error != nil {
// 		return []types.Thread{}, error
// 	}

// 	threads := []types.Thread{}

// 	wg := &sync.WaitGroup{}

// 	for i, thread := range blog_threads.Threads {
// 		if thread.ThreadMetadata.Archived || thread.ThreadMetadata.Locked {
// 			continue
// 		}

// 		wg.Add(1)

// 		go func(i int, thread *discordgo.Channel) {
// 			last_message, error := bot.Discord.ChannelMessage(thread.ID, thread.LastMessageID)
// 			if error != nil {
// 				fmt.Println(error.Error())
// 				wg.Done()
// 				return
// 			}

// 			if last_message == nil {
// 				wg.Done()
// 				return
// 			}

// 			t := types.Thread{
// 				Title:           thread.Name,
// 				Id:              thread.ID,
// 				Thread_metadata: *thread.ThreadMetadata,
// 				Content:         last_message.Content,
// 			}

// 			threads = append(threads, t)

// 			wg.Done()
// 		}(i, thread)
// 	}

// 	wg.Wait()

// 	return threads, nil
// }
