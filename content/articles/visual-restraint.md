---
slug: "visual-restraint"
title: "Can a model learn visual restraint?"
date: "21.03.25"
category: "Research note"
status: "Open"
readTime: "7 min read"
excerpt: "Notes toward an image understanding system that knows when not to describe."
tags: ["AI/ML", "vision", "philosophy"]
---

# Can a model learn visual restraint?

Current multimodal systems are trained under heavy pressure to generate exhaustive verbiage. Give GPT-4o or Claude an abstract photograph, and it will immediately generate three paragraphs cataloging colors, probable camera settings, and emotional adjectives.

It never says: *"This is a sliver of light across darkness. There is nothing more to explain."*

## The Pressure to Over-Explain

In human conversation, describing everything in sight is a symptom of anxiety, not intelligence. Silence is a valid perceptual response. A photographer looks at a fogged horizon for twenty minutes and says nothing at all.

Why do our vision models lack this capacity?

Because RLHF rewards descriptive verbosity. The human rater prefers the answer that lists five things over the answer that acknowledges that the scene is ambiguous.

## Experimenting with Silence

In training our small visual narrator prototype, we introduced an entropy threshold. If the relational attention layer produces features whose mutual information falls below $\tau = 0.38$, the decoder outputs an explicit silence token: `[UNDESCRIBED]`.

The system does not fail; it declares that language would diminish what was recorded.
