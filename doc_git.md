# Remove directory
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

# GPG-key

## How to understand the `gpg failed to sign the data` problem

[sourse](https://gist.github.com/paolocarrasco/18ca8fe6e63490ae1be23e84a7039374)

Follow the below url to setup signed commit https://help.github.com/en/articles/telling-git-about-your-signing-key

if still getting gpg failed to sign the data fatal: failed to write commit object

this is not issue with git ,this is with GPG follow below steps

1. ```gpg --version```

2. ```echo "test" | gpg --clearsign```

if it is showing:
```
gpg: signing failed: Inappropriate ioctl for device
gpg: [stdin]: clear-sign failed: Inappropriate ioctl for device
```

3. then use ```export GPG_TTY=$(tty)```

4. then try again ```echo "test" | gpg --clearsign``` in which PGP signature is.

Output:
```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

test
-----BEGIN PGP SIGNATURE-----

iLMEAQEKAB0WIQS2V0SFHi18psvDbo7uFF+LP7qc1gUCYLjB2QAKCRDuFF+LP7qc
1r5LBACB1m3Lpl21379qAvVamWcn9isdgdg34t34t43t34t34t434yGQHqikxWL7A5
Ls7giKZYscb30o0rkY6I1W9MjBBW96R2pnaYsioFpsf434dfg54rfdgfdgdfgdfpaIoU3k
JKrYxR7yMjqUv0a2jE+97kh+bSuzqwIkMHyikbABI90lY+4OLw==
=UHKx
-----END PGP SIGNATURE-----
```
5. ```git config -l | grep gpg```

Output:
```
commit.gpgsign=true
gpg.program=gpg
tag.gpgsign=true
```

6. apply ```git commit -S -m "initial commit 🚀🚀🚀🚀"```

7. or ```git config --global commit.gpgsign true```

https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0/55993078#55993078