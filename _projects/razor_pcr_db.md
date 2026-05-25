---
title: RAZOR PCR Primer Database
date: 2026-01-06 08:00:00 +0000
subtitle: Bioinformatics · Published Work
image: '/images/razor.jpg'
---

RAZOR is a curated database of nearly 20,000 PCR primers targeting 20 human respiratory virus species, including SARS-CoV-2, Influenza A (H1N1, H5N1), Parainfluenza, Enterovirus, and Rhinovirus. The database addresses a critical gap in public health genomics tooling — existing primer resources were either outdated or narrowly scoped to a handful of pathogens.

## Motivation

Respiratory virus outbreaks have repeatedly demonstrated that PCR testing is the gold standard for definitive pathogen identification. Despite this, no comprehensive, up-to-date primer database existed for the broader landscape of human respiratory viruses. RAZOR was built to fill that gap.

## What I Built

- Designed genome-wide template sets for each of the 20 virus species
- Used **Primer3** to generate both qPCR and standard PCR primer pairs across each genome
- Implemented **NCBI Primer-BLAST** validation to verify primer specificity and amplicon identity
- Built an interactive **Integrative Genomics Viewer (IGV)** display exposing full primer metadata: sequence coordinates, melting and annealing temperatures, GC content, and hairpin structure probabilities
- Developed an optimized primer subset filtered by Primer3 weighted pair penalty scores below 0.5

## Results

The database achieved a mean gene representation score of 88.9 ± 10.5% for qPCR primers and 75.6 ± 16.3% for standard PCR primers across all 20 species. qPCR primers consistently outperformed standard PCR in gene representation — a pattern driven by the tighter amplicon size constraints used in standard PCR design.

## Publication

**Gill HM**, Mir Q, Srivastava R, Janga SC. RAZOR: a database of PCR primers targeting human respiratory viruses. *NAR Genomics and Bioinformatics*. 2026;8(1):lqag005. [https://doi.org/10.1093/nargab/lqag005](https://doi.org/10.1093/nargab/lqag005)

**Contributions:** Conceptualization, Data curation, Formal analysis, Investigation, Methodology, Software, Visualization, Writing – original draft

**Funding:** NIH R01GM123314 · Lilly Endowment / IU Pervasive Technology Institute · Indo-U.S. Science and Technology Forum
