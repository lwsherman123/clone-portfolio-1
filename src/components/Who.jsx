import { OrbitControls, } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components'
import Cube from './Cube';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1250px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex:1;
  position: relative;
`;
const Title = styled.h1``;
const Subtitle = styled.h2``;
const Desc = styled.p``;
const Button = styled.button``;


const Right = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5, 5, 5]}} >
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Cube/>
          </Canvas>
        </Left>
        <Right>
          <Title> Learn About Me </Title>
          <Subtitle> Who I Am </Subtitle>
          <Desc> MORE ABOUT ME </Desc>
          <Button> See My Work </Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
