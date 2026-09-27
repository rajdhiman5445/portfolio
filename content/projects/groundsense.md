---
slug: "groundsense"
title: "Groundsense"
subtitle: "Tactile navigation for a small autonomous rover."
category: "Robotics"
year: "2025"
featured: true
status: "Active prototype"
role: "Hardware design, firmware, spatial mapping"
duration: "Ongoing"
tools: "C++, ROS2, MicroPython, Custom PCB"
thumbnail: "https://images.unsplash.com/photo-1534312527009-56c7016453e6?auto=format&fit=crop&w=1400&q=86"
bannerImage: "https://images.unsplash.com/photo-1534312527009-56c7016453e6?auto=format&fit=crop&w=1400&q=86"
desc: "Tactile navigation for a small autonomous rover traversing irregular interior terrain."
liveUrl: ""
githubUrl: "https://github.com/rajdhiman5445"
outcomes:
  - label: "tactile sensors"
    value: "12"
  - label: "field trials"
    value: "38"
  - label: "firmware version"
    value: "v0.4"
---

## The Premise

Traditional robotics simulators treat the floor as an idealized mathematical plane. In reality, real-world surfaces slip, deflect, and catch wheels. 

Groundsense explores how tactile feedback from lightweight compliant suspension elements can supplement optical odometry, allowing a miniature autonomous rover to adapt to uneven flooring, carpets, and cords without complex LiDAR payloads.

## Hardware & Sensing

The platform uses a custom 4-wheel independent suspension system equipped with analog hall-effect sensors that measure spring displacement in real time:

- **12 tactile points**: Continuous suspension compression readings at 200Hz.
- **Slip detection algorithm**: Compares commanded wheel velocity against tactile load to infer traction loss.
- **Compliant bumpers**: Mechanical whiskers that detect micro-obstacles before chassis collision.

```cpp
void TerrainObserver::updateSlip(float commandedVelocity, float measuredRpm, float suspensionDeflection) {
    float estimatedTraction = computeTractionCoeff(suspensionDeflection);
    if (measuredRpm > commandedVelocity * 1.15f && estimatedTraction < 0.4f) {
        triggerRecoveryManeuver(SLIP_CORRECTION);
    }
}
```

## Next Iterations

Currently working on v0.5 hardware revision, incorporating distributed micro-controllers to offload motor commutation and free up the main compute module for SLAM.
