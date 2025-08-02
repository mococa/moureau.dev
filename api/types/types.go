package types

import "time"

type ContactMe struct {
	Email *string `json:"email"`
	Name  *string `json:"name"`
	Body  *string `json:"body"`
}

type BlogPost struct {
	ID          int64     `json:"id"`
	Title       string    `json:"title"`
	Author      string    `json:"author"`
	Description string    `json:"description"`
	Language    string    `json:"language"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	Body        string    `json:"body"`
	Image       string    `json:"image"`
}

type ManagePost struct {
	Title       string `json:"title"`
	Author      string `json:"author"`
	Description string `json:"description"`
	Language    string `json:"language"`
	Body        string `json:"body"`
	Image       string `json:"image"`
}
