'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // TorusKnot Geometry for abstract luxury sculpture
    const geometry = new THREE.TorusKnotGeometry(1.4, 0.38, 128, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      emissive: 0x112200,
      roughness: 0.15,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const limeLight = new THREE.PointLight(0xc8ff00, 3, 50);
    limeLight.position.set(4, 4, 4);
    scene.add(limeLight);

    const whiteLight = new THREE.DirectionalLight(0xffffff, 1.5);
    whiteLight.position.set(-4, -4, 4);
    scene.add(whiteLight);

    let animationFrameId: number;

    const animate = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.008;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
