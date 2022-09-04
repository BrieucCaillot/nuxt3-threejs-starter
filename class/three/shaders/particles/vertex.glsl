uniform float uTime;
uniform float uPointMultiplier;

attribute float size;
attribute vec3 colour;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vColor;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size * uPointMultiplier / gl_Position.w;

  vColor = vec4(colour, 1.0);
}