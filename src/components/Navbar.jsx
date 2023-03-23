import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1250px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 10px 0px;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div``;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li``;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 50px;
  box-shadow: 2px 2px 5px purple;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Who</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Button>Hire</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
