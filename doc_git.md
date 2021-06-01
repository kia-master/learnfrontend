## Remove directory from git and local 
```
git rm -r one-of-the-directories // This deletes from filesystem
git commit . -m "Remove directory"
git push origin <your-git-branch> (typically 'master', but not always)
```
## Remove directory from git, but NOT local

```
git rm -r --cached myFolder
```