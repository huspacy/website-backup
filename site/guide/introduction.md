# Introduction

HuSpaCy is a [spaCy](https://spacy.io) library providing industrial-strength Hungarian language processing facilities through spaCy models.
The released pipelines consist of a tokenizer, sentence splitter, lemmatizer, tagger (predicting morphological features as well), dependency parser and a named entity recognition module.
Word and phrase embeddings are also available through spaCy's API.
All models have high throughput, decent memory usage and close to state-of-the-art accuracy.
A live demo is available [here](https://huggingface.co/spaces/huspacy/demo), model releases are published to [Hugging Face Hub](https://huggingface.co/huspacy/).

## Available Models

We provide two models, the first one is a CNN-based large model which achieves a good balance between accuracy and processing speed.
This default model ([`hu_core_news_lg`](/docs/lg/)) provides tokenization, sentence splitting, part-of-speech tagging (UD labels w/ detailed morphosyntactic features), lemmatization, dependency parsing and named entity recognition and ships with pretrained word vectors.

The second model ([`hu_core_news_trf`](/docs/trf/)) is built on [huBERT](https://huggingface.co/SZTAKI-HLT/hubert-base-cc) and provides the same functionality as the large model except the word vectors.
It comes with much higher accuracy in the price of increased computational resource usage. We suggest using it with GPU support.

A demo of these models is available at [Hugging Face Spaces](https://huggingface.co/spaces/huspacy/demo).
Models' changes are recorded in respective changelog files. ([`lg`](/docs/lg/changelog), [`trf`](/docs/trf/changelog), [`vectors`](/docs/lg_vectors/changelog))
