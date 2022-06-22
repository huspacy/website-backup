# Module `huspacy`

## Functions

### Function `download`

```python
def download(
    model_name: str = 'hu_core_news_lg',
    version: str = 'main'
) ‑> None
```

Downloads a HuSpaCy model.

**Args:**

- <b>`model_name`</b> <code>str</code>: model name

- <b>`version`</b> <code>str</code>: model version

Returns: None

### Function `load`

```python
def load(
    name: Union[str, pathlib.Path] = 'hu_core_news_lg',
    vocab: Union[spacy.vocab.Vocab, bool] = True,
    disable: Iterable[str] = [],
    exclude: Iterable[str] = [],
    config: Union[Dict[str, Any], thinc.config.Config] = {}
) ‑> spacy.language.Language
```

Loads a HuSpaCy model.

**Args:**

- <b>`name`</b> <code>str</code>: model name

- <b>`vocab`</b> <code>Vocab</code>: A Vocab object. If True, a vocab is created.

- <b>`disable`</b> <code>Iterable\[str]</code>: Names of pipeline components to disable. Disabled pipes will be loaded but they
  won't be run unless you explicitly enable them by calling nlp.enable_pipe.

- <b>`exclude`</b> <code>Iterable\[str]</code>: Names of pipeline components to exclude. Excluded components won't be loaded.

- <b>`config`</b> <code>Dict\[str, Any] / Config)</code>: Config overrides as nested dict or dict
  keyed by section values in dot notation.

**Returns:**

<code>Language</code>: The loaded nlp object
