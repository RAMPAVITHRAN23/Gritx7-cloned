import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';
import clickSound from "../assets/registerclick.wav"; // Adjust the path to your click sound file

const EventCard = ({ name, logo, description }) => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const sound = new Howl({
    src: [clickSound],
    preload: true
  });


  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Play the click sound
    sound.play();

    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate('/register');
    }, 200);
  };

  return (
    <StyledWrapper>
      <div className="card bg-blue-950">
        <img src={logo} alt="logo" className="card-logo" />
        <p className="small-desc text-white">{description}</p>
        <div className="button-container">
          <a
            onClick={handleClick}
            href="/register"

            className="btn-primary mt-"
          >
            Know More
          </a>
        </div>
        <audio ref={audioRef} src={clickSound} preload="auto" />

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Space between elements */
    align-items: center;
    width: 320px;
    height: 420px; /* Fixed height for uniform card size */
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1.5em;
    margin: 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .card-logo {
    width: 190px;
    height: 190px;
    border-radius: 50%;
    object-fit: cover;
  }

  .card-title {
  color: #000000; /* Initially black */
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin: 0; /* Removed bottom margin to control spacing */
  transition: color 0.3s ease; /* Smooth transition for color change */
}


 
.small-desc {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #000000; /* Initially black */
  text-align: center;
  flex-grow: 1; /* Allows description to take up available space */
  transition: color 0.3s ease; /* Smooth transition for color change *
  margin-bottom: 5px;
}

  .button-container {
    margin-top: auto; /* Pushes button to the bottom of the card */
  }

  .btn-primary {
    background-color: #ffce00;
    color: #333333;
    font-weight: bold;
    padding: 0.75em 1.5em;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn-primary:hover {
    background-color: #ffb900;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(28);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
    .card:hover .card-title,
.card:hover .small-desc {
  color: #ffffff; /* Turns white on hover */
}
`;

export default EventCard;
