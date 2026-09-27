---
slug: "rover-log-slippage"
title: "Rover log: the floor is not a plane"
date: "02.04.25"
category: "Experiment 07"
status: "Active"
readTime: "5 min read"
excerpt: "Three hours of wheel slip, one changed assumption, and a more honest mechanical model."
tags: ["robotics", "field log", "sensors"]
---

# Rover log: the floor is not a plane

Three hours of wheel slip in the workshop today led to an obvious realization: simulation environments are deceitfully polite.

In Gazebo and PyBullet, friction coefficients are clean isotropic floats. In reality, a hardwood floor has microscopic grain lines, dust accumulations near baseboards, and subtle temperature differentials that dramatically shift elastomer grip.

## What Failed

The initial odometry filter integrated optical wheel encoders directly with an IMU yaw angle. On level linoleum, position estimation stayed within 3 centimeters over a 5-meter path.

The moment the rover hit the transition strip between parquet and low-pile wool rug:
- Left drive wheel experienced 42% micro-slip.
- The dead-reckoning algorithm assumed the vehicle was turning right.
- In attempting to correct the phantom heading deviation, the controller rammed the test chassis directly into a door frame.

## The Fix: Tactile Integration

Instead of relying purely on rotational velocity, we wired strain gauges into the front suspension wishbones. When a wheel loses traction, the vertical load fluctuates at characteristic frequencies (12-18Hz).

By feeding suspension vibration spectra into the state estimator, we can detect slip *before* optical errors compound.
