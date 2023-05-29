package handler

import (
	"fmt"
	"net/http"

	handlers "github.com/mococa/moureau.dev/api/handlers"
	vercel "github.com/tbxark/g4vercel"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	server := vercel.New()

	server.Use(vercel.Recovery(func(err interface{}, c *vercel.Context) {
		if httpError, ok := err.(vercel.HttpError); ok {
			c.JSON(httpError.Status, vercel.H{
				"message": httpError.Error(),
			})
		} else {
			message := fmt.Sprintf("%s", err)
			c.JSON(500, vercel.H{
				"message": message,
			})
		}
	}))

	server.GET("/", handlers.HealthChecker)

	server.POST("/contact", handlers.Contact)

	server.Handle(w, r)
}
