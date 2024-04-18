deploy:
	pulumi up --stack mococa/$(stack)/$(environment) --cwd src/stacks/$(stack) $1

destroy:
	pulumi down --stack mococa/$(stack)/$(environment) --cwd src/stacks/$(stack) $1

deploy-web:
	pulumi up --stack mococa/moureau-web/production --cwd src/stacks/web