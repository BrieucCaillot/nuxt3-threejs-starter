uniform vec3 uColor;
uniform vec2 uResolution;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
  // vec2 st = gl_FragCoord.xy / uResolution.xy;
  // gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
  // gl_FragColor = vec4(vUv, 0.0, 1.0);
  gl_FragColor = vec4(uColor, 1.0);
}