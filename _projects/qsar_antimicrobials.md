---
title: Identification of Potential Antimicrobials Against <em>Salmonella typhimurium</em> and <em>Listeria monocytogenes</em> Using QSAR Modeling
date: 2017-12-13 08:00:00 +0000
subtitle: Chemoinformatics · Published Work
image: '/images/qac_qsar.jpg'
---

This study developed two Quantitative Structure-Activity Relationship (QSAR) models to identify novel antimicrobial compounds effective against *Salmonella typhimurium* and *Listeria monocytogenes* — two major foodborne pathogens — as alternatives to Cetylpyridinium Chloride (CPC), the current gold standard quaternary ammonium compound (QAC) used in food safety applications.

## Motivation

The shelf-life and safety of fresh carcasses and produce depends heavily on effective antimicrobial treatment. CPC has long been the gold standard for removing bacterial pathogens from chicken surfaces, but carries two significant limitations: it leaves behind toxic residues that have prevented its approval for broader food applications, and the rise of QAC-resistant bacteria threatens its long-term efficacy. A computational approach to identifying structurally novel QAC alternatives offered a faster, more targeted path to new antimicrobial candidates than traditional high-throughput screening.

## What We Built

- Curated a dataset of quaternary ammonium compounds with experimentally measured minimum inhibitory concentrations (MICs) against both target pathogens
- Computed a comprehensive set of **molecular descriptors** encoding structural, electronic, and physicochemical properties of each compound
- Trained and validated two independent **QSAR regression models** — one for *S. typhimurium* and one for *L. monocytogenes* — using multiple internal and external validation techniques to ensure predictive reliability
- Identified the **key molecular descriptors** most strongly associated with antimicrobial potency, providing structural design rules for next-generation QAC compounds
- Screened candidate compound libraries to rank potential antimicrobials by predicted MIC against each pathogen

## Key Findings

- Both QSAR models demonstrated strong predictive accuracy across internal cross-validation and external test sets
- Specific structural features of the quaternary ammonium scaffold — including chain length, substitution pattern, and charge distribution — were identified as primary drivers of antimicrobial activity
- The top predicted compounds against each pathogen were reported with their SMILES structures and predicted log(MIC) values, providing actionable leads for experimental follow-up
- The modeling framework significantly simplifies the development and testing of new antimicrobial compounds by enabling virtual screening prior to synthesis

## Publication

Rath EC, **Gill H**, Bai Y. Identification of potential antimicrobials against *Salmonella typhimurium* and *Listeria monocytogenes* using Quantitative Structure-Activity Relation modeling. *PLOS ONE*. 2017;12(12):e0189580. [https://doi.org/10.1371/journal.pone.0189580](https://doi.org/10.1371/journal.pone.0189580)

**Affiliations:** Department of Biology, Indiana State University, Terre Haute, IN; Department of Chemistry and Physics, Indiana State University; The Center for Genomic Advocacy, Indiana State University
