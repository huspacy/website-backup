# Relation Extraction

With Textacy[¹], we can extract an ordered sequence of subject-verb-object triples from a document or sentence. For example, in the sentence "Anna éppen házat épít magának." (Anna builds a house for herself.) "Anna" will be the subject, "épít" will be the verb, and the "ház" will be the object. This triple will be an extracted relation. Using HuSpaCy for tagging and dependency parsing and Textacy for extraction, we can make a simple relaction extraction tool.

## Importing and using HuSpaCy

```python
nlp = spacy.load("hu_core_news_trf")
doc = nlp("Anna éppen házat épít magának.")
```

## Using Textacy

```python
tuples_to_list = list()

tuples = triples.subject_verb_object_triples(doc)
if tuples:
    tuples_to_list = list(tuples)
```

## Using Pandas to display the data

```python
for sub_multiple in tuples_to_list[0][0]:
    subject += str(sub_multiple) + ", "
subject = subject[:-2]
for verb_multiple in tuples_to_list[0][1]:
    verb += str(verb_multiple) + ", "
verb = verb[:-2]
for obj_multiple in tuples_to_list[0][2]:
    object += str(obj_multiple) + ", "
object = object[:-2]

relation_list = [[subject, verb, object]]

df = pd.DataFrame(relation_list, columns=['Subject', 'Verb', 'Object'])
```

## Notes

For Hungarian, Textacy does not work as intended. To make it work, you need to replace the `dobj` tag for `obj` in Textacy's source code (`textacy.extract.triples`). You can find our version [here](https://github.com/huspacy/example-applications/blob/main/resources/triples.py).

This example is available on [Hugging Face Spaces](https://huggingface.co/spaces/huspacy/example-applications). The full source code is on [GitHub](https://github.com/huspacy/example-applications/blob/main/examples/relation.py).

[¹]: https://github.com/chartbeat-labs/textacy
