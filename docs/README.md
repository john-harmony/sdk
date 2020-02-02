# Generating Documentation


## Overview
Documenatation is generated using the following process
1. [Typedoc](https://typedoc.org/) is used to generate HTML
2. Dcoumentation is hosted using [Read The Docs](https://readthedocs.org/)


### Installing Typedoc
Install the global CLI
`npm install --global typedoc`

### Generating HTML
#Execute typedoc on your project
```
cd docs
typedoc --out ./core ../packages/harmony-core/ --ignoreCompilerErrors
cd core
python3 -m http.server 8000
```
View the documenation generated at [http://localhost:8000](http://localhost:8000)
Compare it to the quality of the [documentation for typedoc itself](https://typedoc.org/api/index.html)

### Accessing Read The Docs

### Importing the HTML


## Documentation Guide for Developers

### Sample documentation for Methods
