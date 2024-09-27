import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Iphone = (props) => {
    const { nodes, materials } = useGLTF('/models/iphone/scene.gltf');
    const meshRef = useRef();

    useEffect(() => {
        const screenMaterial = materials.screen;
        if (screenMaterial) {
            screenMaterial.color.setHex(0x3b3b3b);
            screenMaterial.emissive = new THREE.Color(0xffffff );
            screenMaterial.emissiveIntensity = 0.5;

            screenMaterial.depthWrite = true;
            screenMaterial.depthTest = true;
            screenMaterial.transparent = false;


        }
    }, [materials.screen]);

    useFrame(({ clock }) => {
        meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.01;
        meshRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.05;
    });

    return (
        <group {...props} dispose={null}>
            <group ref={meshRef} rotation={[-2.391, -0.075, -0.599]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.frame}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.mlack}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.screen}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials.chrome}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/iphone/scene.gltf');
export default Iphone;