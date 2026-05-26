---
title: BigEye
date: 2026-03-09 08:00:00 +0000
subtitle: Deep Learning · Published Work
image: 'https://cdn.ncbi.nlm.nih.gov/pmc/blobs/f140/13087047/38c43d754c09/41598_2026_43573_Fig1_HTML.jpg'
---

BigEye is a clinically interpretable deep learning framework for diabetic retinopathy (DR) detection and severity staging from retinal fundus photographs. Rather than treating DR classification as a black-box prediction task, BigEye grounds its predictions in explicit lesion features — making the model's reasoning transparent to clinicians.

## Motivation

Diabetic retinopathy is a leading cause of preventable blindness, with cases expected to rise significantly alongside global diabetes prevalence. While deep learning models for DR detection have shown strong performance, most lack the interpretability needed for clinical adoption. BigEye was designed to close this gap by building explainability directly into the architecture.

## What I Built

- Assembled a dataset of fundus images from **Indiana University Health (IUH)** and the public **e-ophtha** dataset, annotated with segmentation masks across six retinal lesion types
- Trained a **DeepLabV3+** model to segment microaneurysms, exudates, hemorrhages, and other DR lesions from fundus images
- Extracted lesion quantity and pixel area features from segmentation outputs and fed them into a downstream classifier to predict **ICDR severity stage**
- Evaluated the full pipeline using **10-fold nested cross-validation**
- All figures created in BioRender

## Results

| Metric | Score |
|---|---|
| Precision | 0.77 ± 0.07 |
| Recall | 0.71 ± 0.06 |
| F1 Score | 0.72 ± 0.07 |
| ROC-AUC | 0.95 ± 0.02 |
| Accuracy | 0.83 ± 0.03 |

## Publication

**Gill HM** et al. BigEye: a clinically interpretable deep learning framework for diabetic retinopathy detection and stage prediction. *Scientific Reports*. 2026. [https://doi.org/10.1038/s41598-026-43573-x](https://doi.org/10.1038/s41598-026-43573-x)
