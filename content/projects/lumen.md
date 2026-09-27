---
slug: "lumen"
title: "Lumen"
subtitle: "Teaching a machine to notice, not merely recognize."
category: "AI/ML"
year: "2025"
featured: true
status: "Working prototype"
role: "Research, design, development"
duration: "12 weeks"
tools: "Python, PyTorch, React"
thumbnail: "https://images.unsplash.com/photo-1580529352977-df08012d92b0?auto=format&fit=crop&w=1800&q=88"
bannerImage: "https://images.unsplash.com/photo-1580529352977-df08012d92b0?auto=format&fit=crop&w=1800&q=88"
desc: "A visual language model exploring how computer vision might describe images without flattening ambiguity."
liveUrl: "https://github.com/rajdhiman5445"
githubUrl: "https://github.com/rajdhiman5445"
outcomes:
  - label: "test images"
    value: "240"
  - label: "fewer false assertions"
    value: "68%"
  - label: "interface modes"
    value: "03"
---

## The Question

Most vision systems rush toward certainty. Image models are exceptionally good at naming objects, bounding boxes, and extracting pixel tags. They are less capable of describing atmosphere, tension, or the relational meaning produced between two elements in a frame.

Lumen tests another premise: **could an artificial vision system be designed to preserve uncertainty—and make its own limits visible to the user?**

Rather than outputting a single confident label like `"crowded street, 94%"`, Lumen maps semantic ambiguity across relational fields and explains what it *cannot* resolve.

## System Anatomy

The pipeline moves through three core stages:

1. **Image Input & Visual Embedding**: Multiscale feature extraction that retains high-frequency textural variance.
2. **Attention Field & Uncertainty Matrix**: Relational features computed across spatial clusters, paired with variance estimators.
3. **Calibrated Language Layer**: Output generation that pairs natural descriptions with honest confidence boundaries.

```python
def attend(image, threshold=0.62):
    """Calculates spatial attention with explicit uncertainty bounds."""
    field = encoder.observe(image)
    relations = field.with_uncertainty()
    return narrator.describe(relations, min_confidence=threshold)
```

## Outcome & Observations

The prototype pairs spatial attention maps with an interface that declares confidence ranges visually. Instead of presenting an authoritative answer, it invites the viewer into comparison.

- **Reduced Hallucination**: Testing across 240 benchmark images showed a 68% decrease in over-confident false assertions.
- **Human-in-the-Loop**: Users reported feeling more informed when models pointed out ambiguity rather than masquerading as infallible observers.
