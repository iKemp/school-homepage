# Hugo site generator

see https://gohugo.io/getting-started/quick-start/

# Checkout

To clone inclusive submodules run:

```
$ git clone --recurse-submodules -j8 https://github.com/iKemp/school-homepage.git
```

or run the following command if you cloned already

```
$ git submodule update --init --recursive
```

if this does not work navigate into themes folder and run:

```
$ git clone https://github.com/digitalcraftsman/hugo-creative-theme
```

# Build and Run

Build static pages and start the server 

```
$ hugo server -D
```

# Update

Generate files
```
$ hugo -D
```

Upload
```
$ ./sync.sh
```