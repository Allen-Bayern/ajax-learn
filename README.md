# How To Start the Project

For one thing, you should install Python (version >= 3.6).Then you should add Flask via pip or conda.

At last, you can run the project.

If you use `bash` as your terminal (as well as `zsh`, and so on), you should input ( copy and paste )the following:

```zsh
$ export FLASK_APP=server
$ flask run
```

And, if your terminal is `CMD` (for Windows users), your code is:

```CMD
> set FLASK_APP=server
> flask run
```

If you use `powershell` (alias `pwsh`), your code is:

```pwsh
> $env:FLASK_APP = "server"
> flask run
```