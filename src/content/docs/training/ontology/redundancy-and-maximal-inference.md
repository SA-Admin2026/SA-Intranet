---
title: "Redundancy and Maximal Inference"
confluence_id: 11075597
source: "Redundancy-and-Maximal-Inference_11075597.html"
---

The figure on the left is what we currently have in the Schneider units ontology. The definitions to the right are designed to

1. have less redundancy
2. support more correct inferences.

![](/attachments/11075597/11075595.png)  ![](/attachments/11075597/11075596.png)  ![](/attachments/11075597/11075599.png)

First: It is redundant to say it is a ProductUnit. That is obvious at a glance and is also inferrable from the multiplier/multiplicand restrictions.

Second: If you have something that has a standard unit of ampere\_squared, but do not happen to have its multiplier and multiplicand spelled out, with the left definition, it will fail to make the correct inference that it is a gist:CurrentSquaredUnit. The middl definition will support that inference.  We can take this further. If you don't know the standard unit, but do know it has multiplier/multiplicand both ElectricalCurrentUnit, then you can infer it is a CurrentSquaredUnit from which the standard unit may then be inferred. This is not possible on either of the other two definitions.

**On redundancy**: One can certainly get carried away with stamping out all redundancy, but if we want to leave it in, there should be a good reason. In this case I cannot think of one.

**On supporting inferences**: I recommend as good practice to put the minimum needed to justify an inference in the definitions, and put the rest as necessary restrictions. If there are multiple ways to infer something into a class, there can be multiple equivalences specified. This is illustrated in the right most definition.
