import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";

import image from "./../../assets/img/imagee.svg"
import { useSpeechSynthesis } from "react-speech-kit";
import { useState } from "react";

import "./homepage.css"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&display=swap');
</style>


const Homepage = () => {
    const data =["bad man came today", "bad man coming tomorrow"]
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [pitch, setPitch] = useState(1)
    const [rate, setRate] = useState(1)
    const[text, setText]= useState('')
    const { speak, cancel, speaking,voices,  } = useSpeechSynthesis();
   
   const [voiceIndex, setVoiceIndex] = useState(null);
   const voice = voices[voiceIndex] || null
   
    const handleClick = () =>{
        speak({text:text, voice,rate, pitch})
    }
    const handleCancel = () =>{
        cancel();
    }
    const handlePauseOrPlay = () => {
        if (isSpeaking) {
          cancel();
        }
        setIsSpeaking(prevIsSpeaking => !prevIsSpeaking); // Toggle the state
      };


    
    return ( 

        <div className="homepage">
            <Container >
                  
                <Row className="vh-100 waves ">


                
                <Col xs="12" className="d-flex p-0 mt-5 justify-content-center align-items-center">
                    <h1 >Text To Speech Converter </h1>
                    
                </Col>
                

                <Col md="6" xs="12" className="d-flex align-items-center mb-5 justify-content-center">
                            <Image className="image" src={image} fluid />
                        </Col>
                 

                   
                    <Col md="6" xs="12" className="d-flex mb-5 justify-content-center align-items-center">
                    
                         <div className="   d-flex flex-column justify-content-center align-items-center">
                        <div className="select-voice-container mb-3">
                        <div className='speechSettings'>
                            <label style={{ fontWeight: 600 } }className="d-flex select-voice-label ">Select voice</label>
                        <select
                        className="select-voice"
                            name="voice"
                            value={voiceIndex || ''}
                            onChange={(e) => {
                            setVoiceIndex(e.target.value)
                            }}
                        >
                            {voices.map((option, index) => (
                            <option key={option.voiceURI} value={index} className="select-option">
                                {`${option.lang} - ${option.name} ${ option.default ? '- Default' : ''}`}
                            </option>
                            ))}
                        </select>
                        
                    </div>
                            </div>
                             <InputGroup className="textarea-style">
                                <Form.Control className="textarea-style " as="textarea" placeholder="Input text..." aria-label="With textarea"
                               onChange={(e)=>{setText(e.target.value)}}
                                />
                                
                                </InputGroup>
                                <div className="buttons mt-3">
                                <Button  RecordVoiceOverOutlined  onClick={()=>{handleClick()}} className="btn btn-dark convert-button">Convert</Button>
                                
                                <button className="btn btn-outline-danger cancel-button m-2" onClick={handleCancel}>
                                   Stop play
                                </button>
                                <div className='rangeContainer'>
  <div>
    <label htmlFor="rate"><small>Rate: </small></label>
    <span>{rate}</span>
  </div>
  <input className="rate custom-range"
    type="range"
    min="1"
    max="10"
    step="1"
    value={rate}
    onChange={(e) => {
      setRate(e.target.value);
    }}
  />
</div>
<div className='rangeContainer'>
  <div>
    <label htmlFor="pitch"><small>Pitch: </small></label>
    <span>{pitch}</span>
  </div>
  <input className="pitch custom-range"
    type="range"
    min="0"
    max="10"
    step="1"
    value={pitch}
    id="pitch"
    onChange={(event) => {
      setPitch(event.target.value);
    }}
  />
</div>
                                </div>
                            </div>
                        </Col>
                        
                        </Row>
            </Container>
        </div>
     );
}
 
export default Homepage;