uniform vec3 uColor;
uniform vec2 uResolution;
uniform sampler2D uHeightMap;

varying vec2 vUv;

void main() {
  // vec2 st = gl_FragCoord.xy / uResolution.xy;
  // gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
  vec4 texel = texture2D(uHeightMap, vUv).rgb;
  float r = texel.r float g = texel.g float b = texel.b
  // gl_FragColor = text;
  gl_FragColor = vec4(vec3(text.b), 1.0);
}