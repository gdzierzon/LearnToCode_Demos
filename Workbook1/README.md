# Workbook 1 - Git Setup

Setup your Git configuration with the following settings.

Open your Git Bash terminal if you are on a PC, or iTerm if you are on a mac. Enter the following commands

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

git config --global core.editor "code --wait"
```

The last command will set VSCode as your default git editor for commit messages or merge conflict resolution. This will greatly simplify your life while working with git.

## Git workflow

Ensure that your branch is all up to date.

```bash
git status
```
If it **IS** up to date you can continue.
![status clean](git_images/status_clean.jpg)


If it is **NOT** up to date you must stage and commit changes.
![status dirty](git_images/status_dirty.jpg)



_Don't create a branch when you have uncommitted changes._
```bash
git branch TaskName
git checkout TaskName # this switches branches

# make your code changes
git add -A # stage your changes
git commit -m "your message" # commits your changes

# merge changes into main
git checkout main
git merge TaskName
git push # pushes your to GitHub

```
