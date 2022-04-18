export default `
precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float uTime;

attribute vec3 position;
attribute vec4 color;

varying vec3 vPosition;
varying vec4 vColor;

void main()	{

    vPosition = position;
    vColor = color;

    float PI = 3.1415925;

    vec3 newPosition = position;
    newPosition.z += 0.1 * sin((newPosition.x + 0.25) * 6. + uTime);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}
`
