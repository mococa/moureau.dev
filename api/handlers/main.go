package handlers

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/mococa/moureau.dev/api/bot"
	types "github.com/mococa/moureau.dev/api/types"
	vercel "github.com/tbxark/g4vercel"
)

func HealthChecker(context *vercel.Context) {
	context.JSON(200, vercel.H{
		"message": "OK",
	})
}

func Contact(context *vercel.Context) {
	contact := types.ContactMe{}

	err := json.NewDecoder(context.Req.Body).Decode(&contact)
	if err != nil {
		context.Fail(500, "Failed to decode body")
		return
	}

	token := os.Getenv("BOT_TOKEN")
	channel_id := os.Getenv("CONTACT_CHANNEL_ID")
	contact_role_id := os.Getenv("CONTACT_ROLE_ID")

	bot := bot.New(token)

	model := "```ansi\n[2;37m[2;36mName[0m[2;37m[0m[2;36m\n> [2;37m%NAME%[0m[2;36m\n[2;37m[2;36m\nE-mail[0m[2;37m[0m[2;36m\n> [2;37m%EMAIL%[0m[2;36m\n\n[2;37m[2;36mMessage[0m[2;37m[0m[2;36m [2;37m [2;37m\n[2;36m> [2;37m%BODY%\n[0m[2;36m\n```"

	name_message := strings.ReplaceAll(model, "%NAME%", *contact.Name)
	email_message := strings.ReplaceAll(name_message, "%EMAIL%", *contact.Email)
	message := strings.ReplaceAll(email_message, "%BODY%", *contact.Body)

	mention := fmt.Sprintf("<@&%s> **New Message !**\n", contact_role_id)

	bot.SendMessage(channel_id, mention+string(message))

	context.JSON(200, vercel.H{"message": "OK"})
}
