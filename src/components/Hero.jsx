import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1250px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1``;
const Subtitle = styled.h2``;
const Desc = styled.p``;
const Button = styled.button``;


const Right = styled.div`
  flex:3;
  position: relative;
`;

const Img = styled.img`
  width: 450px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title> Luke Sherman </Title>
          <Subtitle> What I Do </Subtitle>
          <Desc> A Full-Stack Web Developer. </Desc>
          <Button> Learn More </Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={3}/>
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1,100,200]} scale={2.5}>
            <MeshDistortMaterial color="#220736" attach="material" distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
