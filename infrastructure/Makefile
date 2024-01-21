deploy:
	pulumi up --stack mococa/$(stack)/$(environment) --cwd src/stacks/$(stack) $1

destroy:
	pulumi down --stack mococa/$(stack)/$(environment) --cwd src/stacks/$(stack) $1

refresh:
	pulumi refresh --stack mococa/$(stack)/$(environment) --cwd src/stacks/$(stack) $1

deploy-web:
	pulumi up --stack mococa/web/$(environment) --cwd src/stacks/web --skip-preview