package handlers

import (
	"encoding/json"
	"fmt"
	"os"
	"strconv"
	"strings"

	blog "github.com/mococa/moureau.dev/api/blog"
	bot "github.com/mococa/moureau.dev/api/bot"
	types "github.com/mococa/moureau.dev/api/types"
	vercel "github.com/tbxark/g4vercel"
)

const contact_model = "```ansi\n[2;37m[2;36mName[0m[2;37m[0m[2;36m\n> [2;37m%NAME%[0m[2;36m\n[2;37m[2;36m\nE-mail[0m[2;37m[0m[2;36m\n> [2;37m%EMAIL%[0m[2;36m\n\n[2;37m[2;36mMessage[0m[2;37m[0m[2;36m [2;37m [2;37m\n[2;36m> [2;37m%BODY%\n[0m[2;36m\n```"

func HealthChecker(context *vercel.Context) {
	context.JSON(200, vercel.H{
		"message": "Hello world",
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

	name_message := strings.ReplaceAll(contact_model, "%NAME%", *contact.Name)
	email_message := strings.ReplaceAll(name_message, "%EMAIL%", *contact.Email)
	message := strings.ReplaceAll(email_message, "%BODY%", *contact.Body)

	mention := fmt.Sprintf("<@&%s> **New Message !**\n", contact_role_id)

	bot.SendMessage(channel_id, mention+string(message))

	context.JSON(200, vercel.H{"message": "OK"})
}

func GetDiscordThreads(context *vercel.Context) {
	context.Writer.Header().Set("Cache-Control", "public, max-age=30")

	// token := os.Getenv("BOT_TOKEN")

	// bot := bot.New(token)

	// threads, err := bot.GetThreads()
	// if err != nil {
	// 	context.Fail(500, err.Error())
	// 	return
	// }

	// context.JSON(200, vercel.H{
	// 	"threads": threads,
	// })
	context.JSON(200, vercel.H{
		"message": "Not implemented",
	})
}

func GetBlogPosts(context *vercel.Context) {
	context.Writer.Header().Set("Cache-Control", "public, max-age=30")

	blog := blog.New()

	posts, err := blog.GetPosts()
	if err != nil {
		context.Fail(500, err.Error())
		return
	}

	context.JSON(200, vercel.H{
		"posts": posts,
	})
}

func DeleteBlogPost(context *vercel.Context) {
	id_param := context.Param("id")

	id, err := strconv.Atoi(id_param)
	if err != nil {
		context.Fail(500, err.Error())
		return
	}

	blog := blog.New()

	blog.DeletePost(id)

	context.JSON(200, vercel.H{
		"message": "OK",
		"id":      id,
		"deleted": true,
	})
}

func CreateBlogPost(context *vercel.Context) {
	body := types.ManagePost{}
	err := json.NewDecoder(context.Req.Body).Decode(&body)
	if err != nil {
		context.Fail(500, err.Error())
		return
	}

	blog := blog.New()

	post, err := blog.AddPost(body)
	if err != nil {
		context.Fail(500, err.Error())
		return
	}

	context.JSON(200, vercel.H{
		"message": "OK",
		"post":    post,
	})
}

func UpdateBlogPost(context *vercel.Context) {
	body := types.ManagePost{}
	err := json.NewDecoder(context.Req.Body).Decode(&body)
	if err != nil {
		context.Fail(500, err.Error())
		return
	}

	id_param := context.Param("id")

	id, err := strconv.Atoi(id_param)
	if err != nil {
		context.Fail(500, err.Error())
	}

	blog := blog.New()

	post, err := blog.UpdatePost(id, body)
	if err != nil {
		context.Fail(500, err.Error())
		return
	}

	context.JSON(200, vercel.H{
		"message": "OK",
		"post":    post,
		"id":      id,
	})
}
