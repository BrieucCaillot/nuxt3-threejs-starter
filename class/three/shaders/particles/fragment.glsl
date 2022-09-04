uniform vec3 uColor;
uniform vec2 uResolution;
uniform sampler2D uDiffuseTexture;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vColor;

void main() {
  gl_FragColor = texture2D(uDiffuseTexture, gl_PointCoord) * vColor;

  vUv = uv;
}