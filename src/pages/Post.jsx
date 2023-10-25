import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Createpost from './Createpost'
import Side_message from './Side_message'
import Notifications from '../components/Notifications'

const Post_profile = () => {
    return (
<Container fluid="xxl">
    <Row className='w-100 h-100 p-0 pt-4' >

      <Col lg='3' className=' overflow-hidden'><Createpost /></Col>

      <Col lg='6' className='main_height no_scrollbar overflow-y-auto'>
      <Notifications/>
      </Col>

      <Col lg='3' className=' overflow-hidden'> <Side_message /> </Col>
    </Row>
    </Container>
    )
}

export default Post_profile
