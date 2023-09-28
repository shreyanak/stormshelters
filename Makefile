# get git status
status:
	@echo
	git branch
	git remote -v
	git status

# download files from repo
pull:
	@echo
	git pull
	git status

push:
	@echo
	git add .gitignore
	git add .
	git commit -m "another commit"
	git push
	git status
