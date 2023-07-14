import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={ {
        strings: [
          'design',
          'develop',
          'maintain',
          'test',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      } }
    />
  );
}

export default Type;
