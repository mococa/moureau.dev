package types

type ContactMe struct {
	Email *string `json:"email"`
	Name  *string `json:"name"`
	Body  *string `json:"body"`
}
