package blog

import (
	"database/sql"
	"log"
	"os"
	"time"

	_ "github.com/lib/pq"
	"github.com/mococa/moureau.dev/api/types"
)

type Blog struct {
	db *sql.DB
}

func New() *Blog {
	db, err := sql.Open("postgres", os.Getenv("DB_URI"))
	if err != nil {
		log.Fatal(err)
	}

	return &Blog{
		db: db,
	}
}

func (b *Blog) GetPosts() ([]types.BlogPost, error) {
	rows, err := b.db.Query(`
		SELECT
			id,
			title,
			author,
			language,
			created_at,
			updated_at,
			body,
			image,
			description
		FROM posts
	`)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var posts []types.BlogPost

	for rows.Next() {
		var post types.BlogPost

		err = rows.Scan(
			&post.ID, &post.Title,
			&post.Author, &post.Language,
			&post.CreatedAt, &post.UpdatedAt,
			&post.Body, &post.Image, &post.Description,
		)
		if err != nil {
			return nil, err
		}

		posts = append(posts, post)
	}

	return posts, nil
}

func (b *Blog) AddPost(post types.ManagePost) (types.BlogPost, error) {
	query := `
        INSERT INTO posts (
            title,
            author,
            language,
            created_at,
            updated_at,
            body,
            image,
			description
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
    `

	var newPost types.BlogPost
	err := b.db.QueryRow(query,
		post.Title, post.Author, post.Language,
		time.Now(), time.Now(),
		post.Body, post.Image,
		post.Description,
	).Scan(
		&newPost.ID, &newPost.Title,
		&newPost.Author,
		&newPost.Language, &newPost.CreatedAt,
		&newPost.UpdatedAt, &newPost.Body,
		&newPost.Image, &newPost.Description,
	)

	if err != nil {
		return types.BlogPost{}, err
	}

	return newPost, nil
}

func (b *Blog) DeletePost(id int) error {
	query := `
		DELETE FROM posts WHERE id = $1
	`
	_, err := b.db.Exec(query, id)

	return err
}

func (b *Blog) UpdatePost(id int, post types.ManagePost) (types.BlogPost, error) {
	query := `
		UPDATE posts
		SET
			title = $1,
			author = $2,
			language = $3,
			body = $4,
			image = $5,
			description = $6
		WHERE id = $7
		RETURNING *
	`
	var updatedPost types.BlogPost
	err := b.db.QueryRow(query,
		post.Title, post.Author,
		post.Language, post.Body,
		post.Image, post.Description,
		id,
	).Scan(
		&updatedPost.ID, &updatedPost.Title,
		&updatedPost.Author, &updatedPost.Language,
		&updatedPost.CreatedAt, &updatedPost.UpdatedAt,
		&updatedPost.Body, &updatedPost.Image,
		&updatedPost.Description,
	)

	if err != nil {
		return types.BlogPost{}, err
	}

	return updatedPost, nil
}
