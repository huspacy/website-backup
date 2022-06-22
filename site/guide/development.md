# Development

Each model has its own dependency structure managed by `poetry`. For details check the models' readmes ([`lg`](/docs/lg/), [`trf`](/docs/trf/), [`vectors`](/docs/lg_vectors/)).

## Repository structure

```
├── .github            -- Github configuration files
├── hu_core_news_lg    -- SpaCy 3.x project files for building the large model
│   ├── configs        -- SpaCy pipeline configuration files
│   ├── meta.json      -- model metadata
│   ├── poetry.lock    -- Poetry lock file
│   ├── poetry.toml    -- Poetry configs
│   ├── project.lock   -- Auto-generated project script
│   ├── project.yml    -- SpaCy Project file describing steps needed to build the model
│   ├── pyproject.toml -- Python project definition file
│   ├── CHANGELOG.md   -- Model changelog
│   └── README.md      -- Instructions on building a model from scratch
├── hu_core_news_trf   -- Spacy 3.x project files for building the transformer based model
│   ├── configs        -- SpaCy pipeline configuration files
│   ├── meta.json      -- model metadata
│   ├── poetry.lock    -- Poetry lock file
│   ├── poetry.toml    -- Poetry configs
│   ├── project.lock   -- Auto-generated project script
│   ├── project.yml    -- SpaCy Project file describing steps needed to build the model
│   ├── pyproject.toml -- Python project definition file
│   ├── CHANGELOG.md   -- Model changelog
│   └── README.md      -- Instructions on building a model from scratch
├── hu_vectors         -- Spacy 3.x project files for building word vectors
│   ├── configs        -- SpaCy pipeline configuration files
│   ├── poetry.lock    -- Poetry lock file
│   ├── poetry.toml    -- Poetry configs
│   ├── project.lock   -- Auto-generated project script
│   ├── project.yml    -- SpaCy Project file describing steps needed to build the model
│   ├── pyproject.toml -- Python project definition file
│   ├── CHANGELOG.md   -- Model changelog
│   └── README.md      -- Instructions on building a model from scratch
├── huspacy            -- subproject for the PyPI distributable package
│   ├── huspacy        -- huspacy python package
│   ├── test           -- huspacy tests
│   ├── poetry.lock    -- Poetry lock file
│   ├── poetry.toml    -- Poetry configs
│   ├── pyproject.toml -- Python project definition file
│   ├── CHANGELOG.md   -- HuSpaCy changelog
│   └── README.md      -> ../README.md
├── scripts            -- CLI scripts
├── LICENSE            -- License file
└── README.md          -- This file

```
