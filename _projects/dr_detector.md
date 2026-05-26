---
title: DR-Detector
date: 2022-11-08 08:00:00 +0000
subtitle: Deep Learning · Published Work
image: '/images/project-dr-detector.jpg'
---

DR-detector is a diabetic retinopathy (DR) detection framework that combines transfer learning (TL) with clinically interpretable retinal lesion features extracted via deep learning segmentation. Rather than relying solely on abstract image representations from pretrained networks, DR-detector grounds its predictions in the same lesion findings — exudates, microaneurysms, and hemorrhages — that clinicians use to diagnose and grade DR.

## Motivation

DR is a late microvascular complication of diabetes mellitus and a leading cause of preventable blindness. While expert eye examination can preserve vision in 98% of DR cases when caught early, clinical screening is costly, time-consuming, and subject to inter-grader variability. Existing deep learning approaches often sacrifice interpretability for performance, producing black-box outputs that are difficult to trust in a clinical setting. DR-detector was designed to close this gap.

## What We Built

- Applied a **U-Net** segmentation model to extract three clinically relevant lesion types from color fundus images: exudates (EXs), microaneurysms (MAs), and hemorrhages (HEMs)
- Combined lesion-derived features with deep image representations from two standard transfer learning backbones — **VGG-16** and **ResNet-50** — to train a binary DR classifier
- Trained on **1,840 color fundus images** drawn from the e-ophtha, Retinal Lesions, and APTOS 2019 Kaggle datasets
- Validated on an independent external dataset of 162 images from the HRF, MESSIDOR-2, and IDRiD datasets
- Released the full framework publicly at [github.com/Janga-Lab/DR-detector](https://github.com/Janga-Lab/DR-detector)

## Results

| Model Configuration | Test Accuracy |
|---|---|
| ResNet-50 + Lesion Features | 100% |
| VGG-16 + Lesion Features | 99.38% |
| Hemorrhages only | 99.38% |
| All lesion features combined | 89% |

The finding that hemorrhage features alone match the accuracy of the full lesion combination highlights the potential for building the next generation of clinically interpretable AI systems from a minimal, explainable feature set.

## Publication

Hassan D†, **Gill HM**†, Happe M, Bhatwadekar AD, Hajrasouliha AR, Janga SC. Combining transfer learning with retinal lesion features for accurate detection of diabetic retinopathy. *Frontiers in Medicine*. 2022;9:1050436. [https://doi.org/10.3389/fmed.2022.1050436](https://doi.org/10.3389/fmed.2022.1050436)

† Co-first authors

**Affiliations:** Department of BioHealth Informatics, Indiana University Purdue University Indianapolis; Department of Ophthalmology, Glick Eye Institute, Indiana University School of Medicine
