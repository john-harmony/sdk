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
typedoc --out ./account ../packages/harmony-account/ --ignoreCompilerErrors
typedoc --out ./contract ../packages/harmony-contract/ --ignoreCompilerErrors
typedoc --out ./core ../packages/harmony-core/ --ignoreCompilerErrors
typedoc --out ./crypto ../packages/harmony-crypto/ --ignoreCompilerErrors
typedoc --out ./network ../packages/harmony-network/ --ignoreCompilerErrors
typedoc --out ./staking ../packages/harmony-staking/ --ignoreCompilerErrors
typedoc --out ./transaction ../packages/harmony-transaction/ --ignoreCompilerErrors
typedoc --out ./utils ../packages/harmony-utils/ --ignoreCompilerErrors
python3 -m http.server 8000

```
View the documenation generated at [http://localhost:8000](http://localhost:8000)

http://localhost:8000/core/index.html
http://localhost:8000/core/classes/_src_blockchain_.blockchain.html
http://localhost:8000/account/index.html
http://localhost:8000/contract/index.html
http://localhost:8000/crypto/index.html
http://localhost:8000/network/index.html
http://localhost:8000/staking/index.html
http://localhost:8000/transaction/index.html
http://localhost:8000/utils/index.html


Compare it to the quality of the [documentation for typedoc itself](https://typedoc.org/api/index.html)

### Accessing Read The Docs

### Importing the HTML


## Documentation Guide for Developers

### Sample documentation for Methods
